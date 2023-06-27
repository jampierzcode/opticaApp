import { API, DataStore, graphqlOperation } from "aws-amplify";
import { React, useState, useContext, useEffect } from "react";
import {
  Table,
  Modal,
  Tag,
  Popconfirm,
  Button,
  message,
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Space,
} from "antd";
import { INVENTARIOORDENITEMS, ORDEN } from "../../../models";
import TicketPDF from "./TicketPdf";
import Cotizacion from "./Cotizacion";
import { PDFViewer } from "@react-pdf/renderer";

import logo from "../../../assets/logohilmora.png";

import { useGerenteContext } from "../../../contexts/GerenteContext";
import { DeleteOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  deudasByOrdenID,
  getCLIENTES,
  getINVENTARIO,
  getOPTICA,
  getORDEN,
  iNVENTARIOORDENITEMSByOrdenID,
  iNVENTARIOSByOpticaID,
  listCONFIGURACIONDOCUMENTOS,
  listINVENTARIOS,
  listORDENS,
  oRDENSByOpticaID,
} from "../../../graphql/queries";
import {
  createDOCUMENTOS,
  createDeudas,
  createINVENTARIOORDENITEMS,
  createTransacciones,
  updateCONFIGURACIONDOCUMENTO,
  updateDeudas,
  updateINVENTARIO,
  updateORDEN,
} from "../../../graphql/mutations";
import { CajaContext } from "../../../contexts/CajaContext";

const { Option } = Select;

function ListaOrdenes() {
  // verificar cajas uststate
  const { cajaAbierta, nowTurno, verificarCajaAbierta } =
    useContext(CajaContext);
  const [filterMode, setFilterMode] = useState("MeOrden");

  const [verificandoCaja, setVerificandoCaja] = useState(true);

  const [loading, setLoading] = useState(false);
  const [ordenes, setOrdenes] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  // modal de ver report
  const [verReport, setVerReport] = useState(false);
  // modal de edit
  const [detalleProductos, setDetalleProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true);
  const [checkAdd, setCheckAdd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState("NOTADEVENTA");
  const [serie, setSerie] = useState("");
  const [numeroSerie, setNumeroSerie] = useState("");
  const [numeroSecuencialActual, setNumeroSecuencialActual] = useState("");
  const [versionDocumento, setVersionDocumento] = useState("");
  const [idConfigDoc, setIdConfigDoc] = useState("");
  // ustate de pago de entregar orden con pago
  const [isModalpago, setIsModalpago] = useState(false);
  const [deuda, setDeuda] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [montoPagado, setMontoPagado] = useState(0);
  // fin de pago
  var cantidad = 1;
  const [productoID, setProductoID] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [precioMaquila, setprecioMaquila] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [isGraduation, setIsGraduation] = useState("");

  const [precioAnticipo, setPrecioAnticipo] = useState(0);

  // datos de la orden seleeccionada
  const [products, setProducts] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [cliente, setCliente] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  // const [turnoID, setTurnoID] = useState("");
  const [optica, setOptica] = useState({});
  // graduaciones
  const [graduacionDerechaVieja, setGraduacionDerechaVieja] = useState("");
  const [graduacionIzquierdaVieja, setGraduacionIzquierdaVieja] = useState("");
  const [graduacionDerechaNueva, setGraduacionDerechaNueva] = useState("");
  const [graduacionIzquierdaNueva, setGraduacionIzquierdaNueva] = useState("");
  const [tipoOrden, setTipoOrden] = useState("");
  const [ordenNow, setOrdenNow] = useState(null);
  const [ordenID, setOrdenID] = useState("");
  const [verProblemas, setVerProblemas] = useState(false);
  const [version, setVersion] = useState("");

  const [fechaEntrega, setFechaEntrega] = useState("");

  // state for search
  const [searchOrden, setSearchOrden] = useState(undefined);
  const [searchCodOrden, setSearchCodOrden] = useState("");
  const [searchStatus, setSearchStatus] = useState(undefined);
  const [searchFecha, setSearchFecha] = useState("");
  const [searchEntrega, setSearchEntrega] = useState("");

  // optica id
  const { labId, gerenteId } = useGerenteContext();

  const buscarDocumento = async () => {
    try {
      if (tipoDocumento !== "" || tipoDocumento !== null) {
        const result = await API.graphql(
          graphqlOperation(listCONFIGURACIONDOCUMENTOS, {
            filter: {
              opticaID: { eq: labId },
              tipoDocumento: { eq: tipoDocumento },
            },
          })
        );
        const optica = await API.graphql(
          graphqlOperation(getOPTICA, { id: labId })
        );
        const codOptica = optica?.data?.getOPTICA.codSerial;
        const documento = result?.data?.listCONFIGURACIONDOCUMENTOS?.items[0];
        let newSerie = documento?.serieActual;
        let newNumero = documento?.numeroSecuencialActual;
        if (documento.numeroSecuencialActual === 10000) {
          newSerie = incrementSerialNumber(documento?.serieActual);
          newNumero = 1;
        }
        if (tipoDocumento === "NOTADEVENTA") {
          setSerie(codOptica + "NV" + newSerie);
        }
        if (tipoDocumento === "FACTURA") {
          setSerie(codOptica + "FA" + newSerie);
        }
        setNumeroSerie(newSerie);
        setNumeroSecuencialActual(newNumero);
        setVersionDocumento(documento?._version);
        setIdConfigDoc(documento?.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function incrementSerialNumber(originalString) {
    const incrementedSerialNumber = (parseInt(originalString, 10) + 1)
      .toString()
      .padStart(3, "0");
    // Aquí puedes hacer lo que necesites con la cadena actualizada
    return incrementedSerialNumber;
  }
  useEffect(() => {
    buscarDocumento();
    // eslint-disable-next-line
  }, [tipoDocumento]);

  const fetchOptica = async (opticaID) => {
    try {
      const result = await API.graphql(
        graphqlOperation(getOPTICA, { id: opticaID })
      );
      const optica = result?.data?.getOPTICA;
      return optica;
    } catch (error) {
      return error;
    }
  };

  const fetchOrdenes = async () => {
    try {
      let ordenes;
      if (labId === "") {
        const result = await API.graphql(
          graphqlOperation(listORDENS, {
            filter: {
              _deleted: { ne: true },
            },
          })
        );
        ordenes = result.data.listORDENS.items;
      } else {
        const result = await API.graphql(
          graphqlOperation(oRDENSByOpticaID, {
            opticaID: labId,
            filter: {
              _deleted: { ne: true },
            },
          })
        );
        ordenes = result.data.oRDENSByOpticaID.items;
      }
      const ordenesSorted = ordenes.sort((a, b) => {
        // Ordenar por fecha de creación descendente (más reciente primero)
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      const ordenesConNombres = [];
      for (const orden of ordenesSorted) {
        // Obtén el cliente correspondiente a través del ID
        const resultCliente = await API.graphql(
          graphqlOperation(getCLIENTES, { id: orden.clientesID })
        );
        const cliente = resultCliente.data.getCLIENTES;
        const resultOptica = await API.graphql(
          graphqlOperation(getOPTICA, { id: orden.opticaID })
        );
        const optica = resultOptica.data.getOPTICA;
        // const optica = await DataStore.query(OPTICA, orden.opticaID);
        const ordenConNombre = {
          ...orden,
          nombreCliente:
            cliente.nombres +
            " " +
            cliente.apellidoPaterno +
            " " +
            cliente.apellidoMaterno,
          nombreOptica: optica.nombre,
        };

        // Agrega el objeto nuevo al array de órdenes con nombres de cliente
        ordenesConNombres.push(ordenConNombre);
      }
      setOrdenes(ordenesConNombres);
      // setDataSource(ordenesConNombres);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrdenes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const edithandle = async (record) => {
    setMontoPagado(record?.montoPagado);
    setOrdenID(record.id);
    setprecioMaquila(record.precioGraduacion);
    setTipoOrden(record.tipoOrden);
    setOrdenNow(record.id);

    // setTotal(record.precioTotal);
    setCliente(record.nombreCliente);
    try {
      let opticasearch = await fetchOptica(record?.opticaID);
      setOptica(opticasearch);

      const result = await API.graphql(
        graphqlOperation(iNVENTARIOORDENITEMSByOrdenID, {
          ordenID: record.id,
        })
      );
      const ordenes = result?.data?.iNVENTARIOORDENITEMSByOrdenID.items;

      const ordenesConNombres = [];
      for (const orden of ordenes) {
        // Obtén el cliente correspondiente a través del ID

        const resultInvent = await API.graphql(
          graphqlOperation(getINVENTARIO, { id: orden.inventarioID })
        );
        const inventario = resultInvent.data.getINVENTARIO;

        const ordenConNombre = {
          ...orden,
          nombreProducto: inventario.nombreProducto,
          precio: inventario.precioVenta,
        };
        // Agrega el objeto nuevo al array de órdenes con nombres de cliente
        ordenesConNombres.push(ordenConNombre);
      }
      setProducts(ordenesConNombres);
      setVerReport(true);
    } catch (error) {
      console.log(error);
    }
  };

  const changeDelete = (record) => {
    setOrdenID(record?.id);
  };
  const deletehandle = async (record) => {
    try {
      if (record.tipoOrden === "COTIZACION") {
        await DataStore.delete(ORDEN, ordenID);
      } else {
        await DataStore.delete(INVENTARIOORDENITEMS, (d) =>
          d.ordenID.eq(record.id)
        );
        await DataStore.delete(ORDEN, ordenID);
      }
      fetchOrdenes();
      message.success("La orden se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  const envioOrdenCot = (record) => {
    setCliente(record.nombreCliente);
    setGraduacionDerechaNueva(record?.graduacionDerechaNueva);
    setGraduacionDerechaVieja(record?.graduacionDerechaVieja);
    setGraduacionIzquierdaVieja(record?.graduacionIzquierdaVieja);
    setGraduacionIzquierdaNueva(record?.graduacionIzquierdaNueva);
    fetchProductos();
    if (record?.graduacionDerechaNueva) {
      setprecioMaquila(record?.precioGraduacion);
      setIsGraduation("GRADUATION");
    } else {
      setIsGraduation("VENTA");
    }
    setIsEditing(true);

    setOrdenID(record.id);
    viewListaProductos(record?.id);
    buscarDocumento();
  };
  const entregarOrden = async () => {
    if (metodoPago !== "") {
      let deudaNow = precioTotal - montoPagado;
      const fechaActual = dayjs().format("YYYY-MM-DD");
      const fecha_entrega = dayjs().format("YYYY-MM-DD");
      const updateOrden = {
        id: ordenID,
        fechaEntrega: fecha_entrega,
        tipoOrden: "ORDEN",
        ordenStatus: "ENTREGADA",
        _version: version,
        montoPagado: precioTotal,
      };
      const newTransaccion = {
        monto: deudaNow,
        fecha: fechaActual,
        metodoPago,
        turnoID: nowTurno.id,
        ordenID,
        tipoTransaccion: "VENTA",
      };

      try {
        const result = await API.graphql(
          graphqlOperation(deudasByOrdenID, { ordenID: ordenID })
        );
        const adeudoFetch = result?.data?.deudasByOrdenID.items[0];

        const updateAdeudo = {
          id: adeudoFetch.id,
          _version: adeudoFetch._version,
          montoDeuda: 0,
          estado: "PAGADO",
          fecha: fechaActual,
        };
        await API.graphql(
          graphqlOperation(updateDeudas, { input: updateAdeudo })
        );
        message.success("Se pago la deuda pendiente");
        await API.graphql(
          graphqlOperation(updateORDEN, { input: updateOrden })
        );
        message.success("La orden se ha entregado correctamente");
        await API.graphql(
          graphqlOperation(createTransacciones, { input: newTransaccion })
        );
        setIsModalpago(false);
        message.success("Se realizo el pago del adeudo");
        fetchOrdenes();
      } catch (error) {
        message.error("Hubo un error contacta con el administrador");
        console.log(error);
      }
    } else {
      message.warning("Debe seleccionar el metodo de pago");
    }
  };
  const finalizarOrden = async (record) => {
    const updateOrden = {
      id: record?.id,
      ordenStatus: "FINALIZADA",
      _version: record?._version,
    };
    try {
      await API.graphql(graphqlOperation(updateORDEN, { input: updateOrden }));
      fetchOrdenes();
      message.success("La orden se ha finalizado correctamente");
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
      console.log(error);
    }
  };
  const problemasOrden = async () => {
    if (fechaEntrega !== "") {
      const updateOrden = {
        id: ordenID,
        fechaEntrega: fechaEntrega.toString(),
        ordenStatus: "CONPROBLEMAS",
        _version: version,
      };
      try {
        await API.graphql(
          graphqlOperation(updateORDEN, { input: updateOrden })
        );
        fetchOrdenes();
        setVerProblemas(false);
        message.success("Se registro un problema en la orden");
      } catch (error) {
        message.error("Hubo un error contacta con el administrador");
        console.log(error);
      }
    } else {
      message.warning("Debe ingresar una nueva fecha de entrega");
    }
  };
  const maquilaOrden = async (record) => {
    const updateOrden = {
      id: record?.id,
      ordenStatus: "ENVIADAMAQUILA",
      _version: record?._version,
    };
    try {
      await API.graphql(graphqlOperation(updateORDEN, { input: updateOrden }));
      fetchOrdenes();
      message.success("La Orden se envió a maquila");
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
      console.log(error);
    }
  };

  const viewListaProductos = async (idOrden) => {
    const result = await API.graphql(
      graphqlOperation(iNVENTARIOORDENITEMSByOrdenID, { ordenID: idOrden })
    );
    const detalle = result?.data?.iNVENTARIOORDENITEMSByOrdenID?.items;
    const productosNewList = [];
    var pretotal = 0;
    for (const pro of detalle) {
      const result = await API.graphql(
        graphqlOperation(getINVENTARIO, { id: pro.inventarioID })
      );
      const producto = result?.data?.getINVENTARIO;
      const objeto = {
        id: producto.id,
        nombre: producto.nombreProducto,
        cantidad: pro.cantidad,
        precio: producto.precioVenta,
        subTotal: pro.costo,
      };
      pretotal = pretotal + Number(pro.costo);
      productosNewList.push(objeto);
    }
    setTotal(pretotal);
    setDetalleProductos([...detalleProductos, ...productosNewList]);
    setCargandoProductos(false);
  };

  const calcularDiasRestantes = (fechaEstimada, fechaActual) => {
    const fechaEstimadaObj = dayjs(fechaEstimada);
    const fechaActualObj = dayjs(fechaActual);
    const diasRestantes = fechaEstimadaObj.diff(fechaActualObj, "day");

    return diasRestantes;
  };
  const pagarAdeudo = (record) => {
    setOrdenID(record?.id);
    setVersion(record?._version);
    setPrecioTotal(record?.precioTotal);
    setMontoPagado(record?.montoPagado);
    setIsModalpago(true);
    setDeuda(record?.precioTotal - record?.montoPagado);
  };

  const columns = [
    {
      title: "Tipo Orden",
      key: "tipoOrden",
      dataIndex: "tipoOrden",
      render: (text, record) => {
        let color = "";
        if (text === "COTIZACION") {
          color = "geekblue";
        }
        if (text === "ORDEN") {
          color = "green";
        }
        return (
          <>
            {record.graduacionIzquierdaNueva ? <p>Graduacion</p> : <p>Venta</p>}
            <Tag color={color}>{text}</Tag>
          </>
        );
      },
      // filters: searchcategorias(),
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.categoria.startsWith(value),
    },
    {
      title: "Fecha Orden",
      dataIndex: "fechaOrden",
      key: "fechaOrden",
    },
    {
      title: "Hora Orden",
      dataIndex: "horaOrden",
      key: "horaOrden",
    },
    {
      title: "Fecha Entrega",
      dataIndex: "fechaEntrega",
      key: "fechaEntrega",
      render: (_, record) => {
        if (record.fechaEntrega !== "") {
          if (
            record.ordenStatus === "ENTREGADA" ||
            record.ordenStatus === "FINALIZADA"
          ) {
            return (
              <>
                <Tag color="green">Entregada </Tag>
                <p>{record.fechaEntrega}</p>
              </>
            );
          } else {
            const fechaEstimada = record.fechaEntrega;
            const fechaActual = dayjs().format("YYYY-MM-DD");
            // const fechaAnterior = fechaActual.add(1, "day").format("YYYY-MM-DD");
            const diasRestantes = calcularDiasRestantes(
              fechaEstimada,
              fechaActual
            );
            if (diasRestantes === 0) {
              return <Tag color="warning">Es hoy</Tag>;
            } else if (diasRestantes < 0) {
              return (
                <Tag color="red">
                  Entrega retrasada por
                  <br /> {Math.abs(diasRestantes)} días
                </Tag>
              );
            }
            return (
              <Tag color="blue">
                Entrega a tiempo <br /> {diasRestantes} días restantes
              </Tag>
            );
          }
        } else {
          return "-";
        }
      },
    },
    {
      title: "Cliente",
      dataIndex: "nombreCliente",
      key: "nombreCliente",
    },
    // {
    //   title: "Optica",
    //   dataIndex: "nombreOptica",
    //   key: "nombreOptica",
    // },
    {
      title: "Precio total",
      dataIndex: "precioTotal",
      key: "precioTotal",
      render: (_, record) => {
        return (
          <p>S/{(Math.round(record.precioTotal * 100) / 100).toFixed(2)}</p>
        );
      },
    },
    {
      title: "Monto Pagado",
      dataIndex: "montoPagado",
      key: "montoPagado",
      render: (_, record) => {
        if (Number(record.montoPagado) !== 0) {
          return <p style={{ color: "green" }}>S/{record.montoPagado}</p>;
        } else {
          return <p>-</p>;
        }
      },
    },
    {
      title: "Anticipo",
      dataIndex: "anticipo",
      key: "anticipo",
      render: (_, record) => {
        if (Number(record.anticipo) !== 0) {
          return <p style={{ color: "blue" }}>S/{record.anticipo}</p>;
        } else {
          return <p>-</p>;
        }
      },
    },
    {
      title: "Adeudo",
      dataIndex: "deudaanticipo",
      key: "deudaanticipo",
      render: (_, record) => {
        if (Number(record.anticipo) !== 0) {
          const deuda =
            Number(record.precioTotal) - Number(record?.montoPagado);
          if (deuda === 0) {
            return <Tag color="green">Pagado</Tag>;
          } else {
            return <p style={{ color: "red" }}>S/{deuda}</p>;
          }
          // return <p>S/{(Math.round(record.anticipo * 100) / 100).toFixed(2)}</p>;
        } else {
          return <p>-</p>;
        }
      },
    },
    {
      title: "Estado Orden",
      dataIndex: "ordenStatus",
      key: "ordenStatus",
      render: (_, record) => {
        switch (record?.tipoOrden) {
          case "COTIZACION":
            return (
              <>
                <p>CREADA</p>
                <Button onClick={() => envioOrdenCot(record)}>
                  Aceptar Orden
                </Button>
              </>
            );
          case "ORDEN":
            switch (record?.ordenStatus) {
              case "ENVIADAMAQUILA":
                return (
                  <>
                    <Tag color="geekblue">{record.ordenStatus}</Tag>
                    <Button onClick={() => pagarAdeudo(record)}>
                      Entregar Orden
                    </Button>
                  </>
                );
              case "ENTREGADA":
                return (
                  <>
                    <Tag color="warning">{record.ordenStatus}</Tag>
                    <Popconfirm
                      title="Finalizar Orden"
                      description="¿Esta seguro de finalizar la orden?"
                      onConfirm={() => finalizarOrden(record)}
                      okText="Si"
                      cancelText="No"
                    >
                      <Button onClick={() => setOrdenID(record?.id)}>
                        Finalizar Orden
                      </Button>
                    </Popconfirm>

                    <Button
                      danger
                      onClick={() => {
                        setOrdenID(record?.id);
                        setVerProblemas(true);
                        setVersion(record?._version);
                      }}
                    >
                      Problemas
                    </Button>
                  </>
                );
              case "CONPROBLEMAS":
                return (
                  <>
                    <Tag color="red">{record.ordenStatus}</Tag>
                    <Popconfirm
                      title="Enviar a Maquila"
                      description="¿Esta seguro de enviar a maquilar Orden?"
                      onConfirm={() => maquilaOrden(record)}
                      okText="Si"
                      cancelText="No"
                    >
                      <Button success onClick={() => setOrdenID(record?.id)}>
                        Enviar a Maquila
                      </Button>
                    </Popconfirm>
                  </>
                );
              case "FINALIZADA":
                return (
                  <>
                    <Tag color="green">{record.ordenStatus}</Tag>
                  </>
                );
              default:
                <p>se produjo un error</p>;
                break;
            }
            break;

          default:
            <p>se produjo un error</p>;
            break;
        }
      },
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <EyeOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            {record.tipoOrden === "COTIZACION" ? (
              <>
                <Popconfirm
                  title="Eliminar Cotización"
                  description="¿Esta seguro de eliminar la coización?"
                  onConfirm={() => deletehandle(record)}
                  okText="Si"
                  cancelText="No"
                >
                  <DeleteOutlined
                    onClick={() => changeDelete(record)}
                    style={{ color: "red", marginLeft: "15px" }}
                  />{" "}
                </Popconfirm>
              </>
            ) : null}
          </>
        );
      },
    },
  ];
  const fetchProductos = async () => {
    try {
      const options = [];
      let productosList;
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listINVENTARIOS));
        const nodelete = result?.data?.listINVENTARIOS?.items;
        const deletew = nodelete.filter(
          (elemento) => elemento._deleted !== true
        );
        const tempProducts = [];
        // productosList = deletew;
        for (const producto of deletew) {
          const resultOptica = await API.graphql(
            graphqlOperation(getOPTICA, { id: producto.opticaID })
          );
          const optica = resultOptica.data.getOPTICA;
          const productOptica = { ...producto, nombreOptica: optica.nombre };
          tempProducts.push(productOptica);
        }
        productosList = tempProducts;
      } else {
        const result = await API.graphql(
          graphqlOperation(iNVENTARIOSByOpticaID, { opticaID: labId })
        );
        const nodelete = result?.data?.iNVENTARIOSByOpticaID?.items;
        const deletew = nodelete.filter(
          (elemento) => elemento._deleted !== true
        );
        productosList = deletew;
      }

      productosList.map((producto) => {
        const nombreOptica =
          producto?.nombreOptica !== undefined ? producto?.nombreOptica : "";
        const stock =
          producto.stock === "0" ? "sin existencias" : producto.stock + " und";
        const option = {
          value: producto.id,
          label:
            producto.nombreProducto +
            ", " +
            producto.tipoMaterial +
            ", " +
            producto.tipoEstructura +
            ", " +
            nombreOptica +
            stock,
          stock: Number(producto.stock),
          disabled: Number(producto.stock) === 0,
        };
        options.push(option);
        return true;
      });
      setProductos(options);
      setListaProductos(productosList);
    } catch (error) {
      message.error("No se encontraron productos");
    }
  };
  // Table source
  const columnsCarrito = [
    {
      title: "Producto",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              onClick={() => desCarrito(record)}
              type="primary"
              style={{
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block",
                padding: "0px",
                background: "#ec1c10a8",
              }}
            >
              -
            </Button>
            <p>{record.cantidad}</p>
            <Button
              onClick={() => aumentCarrito(record)}
              type="primary"
              style={{
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block",
                padding: "0px",
                background: "#06980d",
              }}
            >
              +
            </Button>
          </div>
        );
      },
    },
    {
      title: "Precio Unitario",
      dataIndex: "precio",
      key: "precio",
      render: (_, record) => {
        return <p>S//{record.precio}.00</p>;
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (_, record) => {
        return <p>S//{record.subTotal}.00</p>;
      },
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: (_, record) => {
        return (
          <>
            <Button onClick={() => deleteRowCart(record)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const columnsProductos = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>{record.cantidad}</p>
          </div>
        );
      },
    },
    {
      title: "Precio Unitario",
      dataIndex: "precio",
      key: "precio",
      render: (_, record) => {
        return <p>S//{record.precio}.00</p>;
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (_, record) => {
        return <p>S//{record.subTotal}.00</p>;
      },
    },
  ];

  const addCarrito = (productoID) => {
    const result = listaProductos.find(
      (elemento) => elemento.id === productoID
    );
    if (productoID !== "") {
      const ident = carrito.find((elemento) => {
        if (elemento.id === productoID) {
          return true;
        }
        return false;
      });
      if (ident) {
        const nuevosObjetos = carrito.map((objeto) => {
          if (objeto.id === productoID) {
            const newCantidad = objeto.cantidad + cantidad;
            const newSubtotal = newCantidad * objeto.precio;
            setTotalCarrito(totalCarrito + cantidad * objeto.precio);
            return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
          }
          return objeto;
        });
        setCarrito(nuevosObjetos);
      } else {
        const carritoInterno = {
          id: productoID,
          nombre: result.nombreProducto,
          cantidad: cantidad,
          precio: result.precioVenta,
          subTotal: Number(result.precioVenta) * Number(cantidad),
        };
        setCarrito([...carrito, carritoInterno]);
        setTotalCarrito(totalCarrito + carritoInterno.subTotal);
      }
      setProductoID(null);
    }
  };

  const onOrden = async () => {
    const original = await API.graphql(
      graphqlOperation(getORDEN, { id: ordenID })
    );
    const ordenUpdate = original?.data?.getORDEN?._version;

    const fecha = dayjs().format("YYYY-MM-DD");

    // Obtener la hora actual en el formato deseado: 09:57:05
    const hora = dayjs().format("HH:mm:ss");

    if (tipoDocumento !== undefined && numeroSerie && numeroSecuencialActual) {
      if (metodoPago !== "") {
        if (isGraduation === "GRADUATION") {
          if (Number(precioAnticipo) !== 0 && fechaEntrega !== "") {
            let totalVenta =
              Number(precioMaquila) + Number(total) + Number(totalCarrito);
            let montoPagadoCliente =
              Number(precioAnticipo) + Number(totalCarrito);
            const updateOrden = {
              id: ordenID,
              fechaEntrega,
              fechaOrden: fecha,
              horaOrden: hora,
              tipoOrden: "ORDEN",
              ordenStatus: "ENVIADAMAQUILA",
              precioTotal: totalVenta,
              anticipo: Number(precioAnticipo),
              montoPagado: montoPagadoCliente,
              _version: ordenUpdate,
            };
            await API.graphql(
              graphqlOperation(updateORDEN, { input: updateOrden })
            );
            message.success("La cotización se envio a Maquila");
            if (carrito.length > 0) {
              try {
                await Promise.all(
                  carrito.map(async (cart) => {
                    const result = listaProductos.find(
                      (elemento) => elemento.id === cart.id
                    );
                    const newDetail = {
                      cantidad: cart.cantidad,
                      ordenID: ordenID,
                      inventarioID: cart.id,
                      costo: cart.subTotal,
                      idGraduation: false,
                    };
                    await API.graphql(
                      graphqlOperation(createINVENTARIOORDENITEMS, {
                        input: newDetail,
                      })
                    );
                    let newProducto = {
                      id: cart.id,
                      stock: Number(result.stock) - Number(cart.cantidad),
                      _version: result._version,
                    };
                    await API.graphql(
                      graphqlOperation(updateINVENTARIO, { input: newProducto })
                    );
                  })
                );
                setCarrito([]);
                message.success("Se agregó nuevos productos a la orden");
              } catch (error) {
                console.log(error);
              }
            }
            const newTransaccion = {
              monto: montoPagadoCliente,
              fecha: fecha,
              metodoPago,
              turnoID: nowTurno.id,
              ordenID,
              tipoTransaccion: "VENTA",
            };
            await API.graphql(
              graphqlOperation(createTransacciones, { input: newTransaccion })
            );
            if (totalVenta !== montoPagadoCliente) {
              try {
                const newDeuda = {
                  fecha,
                  montoDeuda: totalVenta - montoPagadoCliente,
                  estado: "ADEUDO",
                  turnoID: nowTurno.id,
                  ordenID: ordenID,
                  opticaID: labId,
                };
                await API.graphql(
                  graphqlOperation(createDeudas, { input: newDeuda })
                );
                message.success("Se registró la deuda");
              } catch (error) {
                console.log(error);
              }
            }
            fetchOrdenes();
            setIsEditing(false);
            setDetalleProductos([]);
            setTotal(0);
            setprecioMaquila(0);
            setTotalCarrito(0);

            try {
              const newDocumento = {
                tipoDocumento,
                serie,
                numeroSecuencial: numeroSecuencialActual,
                ordenID,
                opticaID: labId,
              };
              const updateConfig = {
                id: idConfigDoc,
                tipoDocumento,
                serieActual: numeroSerie,
                numeroSecuencialActual: numeroSecuencialActual + 1,
                _version: versionDocumento,
              };
              await API.graphql(
                graphqlOperation(createDOCUMENTOS, { input: newDocumento })
              );
              await API.graphql(
                graphqlOperation(updateCONFIGURACIONDOCUMENTO, {
                  input: updateConfig,
                })
              );
              message.success("Se grabó el documento");
            } catch (error) {
              message.error("Hubo un error contacta al administrador");
            }
            await Promise.all(
              original.data.getORDEN.INVENTARIOORDENITEMS.items.map(
                async (cart) => {
                  const result = listaProductos.find(
                    (elemento) => elemento.id === cart.inventarioID
                  );
                  let newProducto = {
                    id: cart.inventarioID,
                    stock: Number(result.stock) - Number(cart.cantidad),
                    _version: result._version,
                  };
                  await API.graphql(
                    graphqlOperation(updateINVENTARIO, { input: newProducto })
                  );
                }
              )
            );
          } else {
            if (Number(precioAnticipo) === 0) {
              message.warning("El anticipo no debe ser 0");
            }
            if (fechaEntrega === "") {
              message.warning("Debe asignar una fecha estimada de entrega");
            }
            if (metodoPago === "") {
              message.warning("Debe establecer el metodo de pago");
            }
          }
        } else {
          const updateOrden = {
            id: ordenID,
            fechaOrden: fecha,
            horaOrden: hora,
            tipoOrden: "ORDEN",
            ordenStatus: "FINALIZADA",
            precioTotal: Number(total) + Number(totalCarrito),
            montoPagado: Number(total) + Number(totalCarrito),
            _version: ordenUpdate,
          };
          const newTransaccion = {
            monto: Number(total) + Number(totalCarrito),
            fecha: fecha,
            metodoPago,
            turnoID: nowTurno.id,
            ordenID,
            tipoTransaccion: "VENTA",
          };
          await API.graphql(
            graphqlOperation(createTransacciones, { input: newTransaccion })
          );
          await API.graphql(
            graphqlOperation(updateORDEN, { input: updateOrden })
          );
          if (carrito.length > 0) {
            try {
              await Promise.all(
                carrito.map(async (cart) => {
                  const result = listaProductos.find(
                    (elemento) => elemento.id === cart.id
                  );
                  const newDetail = {
                    cantidad: cart.cantidad,
                    ordenID: ordenID,
                    inventarioID: cart.id,
                    costo: cart.subTotal,
                    idGraduation: false,
                  };
                  await API.graphql(
                    graphqlOperation(createINVENTARIOORDENITEMS, {
                      input: newDetail,
                    })
                  );
                  let newProducto = {
                    id: cart.id,
                    stock: Number(result.stock) - Number(cart.cantidad),
                    _version: result._version,
                  };
                  await API.graphql(
                    graphqlOperation(updateINVENTARIO, { input: newProducto })
                  );
                })
              );
              setCarrito([]);
              message.success("La agrego nuevos productos a la orden");
            } catch (error) {
              console.log(error);
            }
          }
          message.success("La venta se ha confirmado correctamente");
          fetchOrdenes();
          setIsEditing(false);
          setDetalleProductos([]);
          setTotal(0);
          setprecioMaquila(0);
          setTotalCarrito(0);

          try {
            const newDocumento = {
              tipoDocumento,
              serie,
              numeroSecuencial: numeroSecuencialActual,
              ordenID,
              opticaID: labId,
            };
            const updateConfig = {
              id: idConfigDoc,
              tipoDocumento,
              serieActual: numeroSerie,
              numeroSecuencialActual: numeroSecuencialActual + 1,
              _version: versionDocumento,
            };
            await API.graphql(
              graphqlOperation(createDOCUMENTOS, { input: newDocumento })
            );
            await API.graphql(
              graphqlOperation(updateCONFIGURACIONDOCUMENTO, {
                input: updateConfig,
              })
            );
            message.success("Se gravo el documento");
          } catch (error) {
            message.error("Hubo un error contacta al administrador");
          }
          await Promise.all(
            original.data.getORDEN.INVENTARIOORDENITEMS.items.map(
              async (cart) => {
                const result = listaProductos.find(
                  (elemento) => elemento.id === cart.inventarioID
                );
                let newProducto = {
                  id: cart.inventarioID,
                  stock: (
                    Number(result.stock) - Number(cart.cantidad)
                  ).toString(),
                  _version: result._version,
                };
                await API.graphql(
                  graphqlOperation(updateINVENTARIO, { input: newProducto })
                );
              }
            )
          );
        }
      } else {
        message.warning("Debe establecer el metodo de pago");
      }
    } else {
      message.warning("Establece el tipo de documento a generar");
    }
  };

  const desCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        if (objeto.cantidad > 1) {
          const newCantidad = objeto.cantidad - cantidad;
          const newSubtotal = newCantidad * objeto.precio;
          setTotalCarrito(totalCarrito - cantidad * objeto.precio);
          return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
        }
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };
  const aumentCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        const newCantidad = objeto.cantidad + cantidad;
        const newSubtotal = newCantidad * objeto.precio;
        setTotalCarrito(totalCarrito + cantidad * objeto.precio);
        return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };

  const deleteRowCart = (record) => {
    const nuevosObjetos = carrito.filter((objeto) => objeto.id !== record.id);
    const precio = carrito.find((objeto) => objeto.id === record.id);
    setCarrito(nuevosObjetos);
    setTotalCarrito(totalCarrito - Number(precio.subTotal));
  };

  const searchFilters = () => {
    if (
      searchOrden !== undefined ||
      searchStatus !== undefined ||
      searchFecha !== "" ||
      searchEntrega !== ""
    ) {
      const filteredOrdenes = dataSource.filter((orden) => {
        let matchOrden = true;
        let matchStatus = true;
        let matchFecha = true;
        let matchFechaEntrega = true;

        if (searchOrden && orden.tipoOrden !== searchOrden) {
          matchOrden = false;
        }
        if (searchStatus && orden.ordenStatus !== searchStatus) {
          matchStatus = false;
        }
        if (searchFecha && orden.fechaOrden !== searchFecha) {
          matchFecha = false;
        }
        if (
          searchEntrega &&
          !dayjs(orden.fechaEntrega).isSame(searchEntrega, "day") &&
          !dayjs(orden.fechaEntrega).isBefore(searchEntrega, "day")
        ) {
          matchFechaEntrega = false;
        }

        return matchOrden && matchStatus && matchFecha && matchFechaEntrega;
      });
      setDataSource(filteredOrdenes);
    } else {
      setDataSource(ordenes);
    }
  };
  const resetFilters = () => {
    setDataSource(ordenes);
    setSearchFecha("");
    setSearchOrden(undefined);
    setSearchStatus(undefined);
    setSearchEntrega("");
  };
  // funcion de imprimir
  // const handlePrint = () => {
  //   const printWindow = window.open("", "_blank");
  //   printWindow.document.write(
  //     "<html><head><title>Imprimir</title></head><body>"
  //   );
  //   printWindow.document.write('<div id="print-content">');
  //   printWindow.document.write(document.getElementById("pdf-viewer").innerHTML);
  //   printWindow.document.write("</div></body></html>");
  //   printWindow.document.close();
  //   printWindow.print();
  // };

  useEffect(() => {
    const verificarCaja = async () => {
      // Realizar la verificación del estado de la caja aquí
      // Reemplaza el siguiente código con tu lógica de verificación real
      await verificarCajaAbierta(gerenteId); // Supongamos que esto es una función asincrónica

      setVerificandoCaja(false); // Finaliza la verificación
    };

    verificarCaja();
    // eslint-disable-next-line
  }, []);

  const filterOrdenesMe = (orden) => {
    switch (orden) {
      case "MeOrden":
        const result = ordenes.filter((orden) => orden.turnoID === nowTurno.id);
        setDataSource(result);

        break;
      case "TodoOrden":
        setDataSource(ordenes);

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    filterOrdenesMe(filterMode);
    // eslint-disable-next-line
  }, [filterMode, ordenes]);

  return verificandoCaja ? (
    <p>Verificando cajas abiertas</p>
  ) : cajaAbierta ? (
    <div>
      {/* <h1>Lista Ordenes</h1> */}
      {/* <div style={{ margin: "20px 0px" }}> */}
      <p>Filtrado avanzado</p>
      {/* </div> */}

      <div style={{ display: "flex", gap: "10px", margin: "20px 0px" }}>
        <Button
          onClick={() => setFilterMode("MeOrden")}
          title="Filtrar"
          type={filterMode === "MeOrden" ? "primary" : "secondary"}
        >
          Mis Ordenes
        </Button>
        <Button
          type={filterMode === "TodoOrden" ? "primary" : "secondary"}
          onClick={() => setFilterMode("TodoOrden")}
          title="reset"
        >
          Todo Ordenes
        </Button>
      </div>
      <Form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "15px",
        }}
      >
        <Form.Item>
          <Select
            value={searchOrden}
            onSelect={(e) => setSearchOrden(e)}
            onClear={(e) => setSearchOrden(e)}
            allowClear
            placeholder="Filtrar por orden"
          >
            <Option value="ORDEN">ORDEN</Option>
            <Option value="COTIZACION">COTIZACION</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Input
            value={searchCodOrden}
            onChange={(e) => {
              setSearchCodOrden(e.target.value);
            }}
            placeholder="Buscar codigo de armazon"
          />
        </Form.Item>
        <Form.Item>
          <Select
            value={searchStatus}
            onSelect={(e) => setSearchStatus(e)}
            onClear={(e) => setSearchStatus(e)}
            allowClear
            placeholder="Filtrar por Status"
          >
            <Option value="CREADA">CREADA</Option>
            <Option value="ENVIADAMAQUILA">ENVIADAMAQUILA</Option>
            <Option value="ENTREGADA">ENTREGADA</Option>
            <Option value="CONPROBLEMAS">CONPROBLEMAS</Option>
            <Option value="FINALIZADA">FINALIZADA</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <DatePicker
            value={searchFecha !== "" ? dayjs(searchFecha, "YYYY-MM-DD") : ""}
            onChange={(date, dateString) => setSearchFecha(dateString)}
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
            placeholder="Fecha de orden"
          />
        </Form.Item>
        <Form.Item>
          <DatePicker
            value={
              searchEntrega !== "" ? dayjs(searchEntrega, "YYYY-MM-DD") : ""
            }
            onChange={(date, dateString) => setSearchEntrega(dateString)}
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
            placeholder="Fecha de Entrega"
          />
        </Form.Item>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={searchFilters} title="Filtrar" type="primary">
            Filtrar <SearchOutlined />
          </Button>
          <Button onClick={resetFilters} title="reset">
            Resetear
          </Button>
        </div>
      </Form>
      {loading ? (
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={dataSource}
          columns={columns}
          rowClassName="editable-row"
        />
      ) : (
        <p>Cargando...</p>
      )}

      {/* modal de report view */}
      <Modal
        onCancel={() => setVerReport(false)}
        title="Ver Report"
        open={verReport}
        footer={null}
        // onOk={() => onFinish()}
      >
        {tipoOrden === "COTIZACION" ? (
          <>
            {/* {products.length > 0 ? ( */}
            <>
              <PDFViewer style={{ width: "100%", height: "50vh" }}>
                <Cotizacion
                  optica={optica}
                  ordenID={ordenNow}
                  tipoOrden={tipoOrden}
                  logoSrc={logo}
                  title="Ticket de Compra"
                  customer={cliente}
                  products={products}
                  // total={total}
                  precioGraduacion={precioMaquila}
                />
              </PDFViewer>
            </>
            {/* ) : (
              <p>Cargando...</p>
            )} */}

            {/* <PDFDownloadLink
              fileName={ordenID + "-" + ordenNow[0].nombreCliente}
              document={
                <Cotizacion
                  optica={optica}
                  ordenID={ordenNow}
                  tipoOrden={tipoOrden}
                  logoSrc={logo}
                  title="Ticket de Compra"
                  customer={cliente}
                  products={products}
                  // total={total}
                  precioGraduacion={precioMaquila}
                />
              }
            >
              <Button>
                <CloudDownloadOutlined /> Descargar
              </Button>
            </PDFDownloadLink> */}
            {/* <Button onClick={handlePrint}>Imprimir</Button> */}
          </>
        ) : (
          <>
            <PDFViewer
              id="pdf-ticket"
              style={{ width: "100%", height: "50vh" }}
            >
              <TicketPDF
                optica={optica}
                ordenID={ordenNow}
                tipoOrden={tipoOrden}
                logoSrc={logo}
                title="Ticket de Compra"
                customer={cliente}
                products={products}
                montoPagado={montoPagado}
                // total={total}
                precioGraduacion={precioMaquila}
              />
            </PDFViewer>

            {/* <PDFDownloadLink
              fileName={ordenID + "-" + cliente}
              document={
                <TicketPDF
                  optica={optica}
                  ordenID={ordenNow}
                  tipoOrden={tipoOrden}
                  logoSrc={logo}
                  title="Ticket de Compra"
                  customer={cliente}
                  products={products}
                  montoPagado={montoPagado}
                  // total={total}
                  precioGraduacion={precioMaquila}
                />
              }
            >
               <Button>
                <CloudDownloadOutlined /> Descargar
              </Button> 
            </PDFDownloadLink>
            <Button onClick={handlePrint}>Imprimir</Button> */}
          </>
        )}
      </Modal>
      {/* modal de pago entregar orden */}
      <Modal
        title="Pagar Orden"
        open={isModalpago}
        onOk={() => entregarOrden()}
        onCancel={() => setIsModalpago(false)}
      >
        <div className="m-6">
          <h3 style={{ width: "100%", textAlign: "start" }}>Adeudo</h3>
          <p>S/{Math.round((deuda * 100) / 100).toFixed(2)}</p>
          <h3 style={{ width: "100%", textAlign: "start" }}>Método de Pago</h3>
          <Checkbox
            checked={metodoPago === "TARJETA_CREDITO"}
            onChange={(e) => setMetodoPago("TARJETA_CREDITO")}
          >
            TARJETA_CREDITO
          </Checkbox>
          <Checkbox
            checked={metodoPago === "TRANSFERENCIA"}
            onChange={(e) => setMetodoPago("TRANSFERENCIA")}
          >
            TRANSFERENCIA
          </Checkbox>
          <Checkbox
            checked={metodoPago === "EFECTIVO"}
            onChange={(e) => setMetodoPago("EFECTIVO")}
          >
            EFECTIVO
          </Checkbox>
        </div>
      </Modal>
      {/* modal de enviar ordenes view */}
      <Modal
        width={"800px"}
        onCancel={() => {
          setIsEditing(false);
          setDetalleProductos([]);
          setTotal(0);
          setprecioMaquila(0);
          setTotalCarrito(0);
          setCheckAdd(null);
        }}
        title="Enviar Orden"
        open={isEditing}
        onOk={onOrden}
        okText="Aceptar Orden"
      >
        <Form>
          <div>
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Cliente: {cliente}
              </h3>{" "}
            </div>
            <div>
              <Space.Compact style={{ gap: "15px" }}>
                <Form.Item style={{ width: "40%" }}>
                  <Select
                    value={tipoDocumento}
                    onSelect={(e) => setTipoDocumento(e)}
                    onClear={(e) => setTipoDocumento(e)}
                    allowClear
                    placeholder="Seleccione el tipo de documento"
                  >
                    <Option value="NOTADEVENTA">NOTADEVENTA</Option>
                    <Option value="FACTURA">FACTURA</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  style={{ width: "60%" }}
                  rules={[
                    { required: true, message: "Este campo es requerido" },
                  ]}
                >
                  <Space.Compact>
                    <Input disabled value={serie} />
                    <Input
                      disabled
                      type="number"
                      value={numeroSecuencialActual}
                    />
                  </Space.Compact>
                </Form.Item>
              </Space.Compact>
            </div>
            {graduacionDerechaNueva ? (
              <>
                <h4>Graduaciones</h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    margin: "20px 0px",
                  }}
                >
                  <p>Graduacion Vieja Izquierda: {graduacionIzquierdaVieja}</p>
                  <p>Graduacion Vieja Derecha: {graduacionDerechaVieja}</p>
                  <p>Graduacion Nueva Izquierda: {graduacionIzquierdaNueva}</p>
                  <p>Graduacion Nueva Derecha: {graduacionDerechaNueva}</p>
                </div>

                <Form.Item label="Precio de maquila x cotizacion">
                  <Input disabled value={precioMaquila} />
                </Form.Item>
              </>
            ) : null}

            {cargandoProductos ? (
              <p>Cargando</p>
            ) : detalleProductos.length > 0 ? (
              <>
                <Table
                  pagination={false}
                  scroll={{ x: 400 }}
                  rowKey={(record) => record.id}
                  columns={columnsProductos}
                  dataSource={detalleProductos}
                />
              </>
            ) : (
              <p>Cargando</p>
            )}
            <div>
              <h1 style={{ color: "#5b5b5b", fontSize: "18px" }}>
                Total venta anterior : S/{Number(total) + Number(precioMaquila)}
              </h1>
            </div>
            {graduacionDerechaNueva ? (
              <>
                <Form.Item label="Anticipo">
                  <Input
                    value={precioAnticipo}
                    onChange={(e) => setPrecioAnticipo(e.target.value)}
                    placeholder="Ingrese el anticipo del cliente S/.00 de la orden"
                  />
                </Form.Item>
                <Form.Item label="Fecha de entrega">
                  <DatePicker
                    style={{ width: "100%" }}
                    format="YYYY-MM-DD"
                    onChange={(date, dateString) => setFechaEntrega(dateString)}
                    placeholder="fecha"
                  />
                </Form.Item>
                <div>
                  <h1 style={{ color: "red", fontSize: "18px" }}>
                    Adeudo : S/
                    {Number(total) +
                      Number(precioMaquila) -
                      Number(precioAnticipo)}
                  </h1>
                </div>
              </>
            ) : null}
            <Form.Item label="Deseas agregar más productos?">
              <Select
                value={checkAdd}
                onSelect={(e) => {
                  if (e === "NO") {
                    setTotalCarrito(0);
                    setCarrito([]);
                  }
                  setCheckAdd(e);
                }}
                placeholder="Selecciona SI/NO"
              >
                <Option value="SI">SI</Option>
                <Option value="NO">NO</Option>
              </Select>
            </Form.Item>
            {checkAdd === "SI" ? (
              <div style={{ display: "flex", gap: "20px" }}>
                <div className="container-productos" style={{ width: "100%" }}>
                  <Select
                    showSearch
                    value={productoID}
                    style={{ width: "100%", marginBottom: "20px" }}
                    onChange={(e) => addCarrito(e)}
                    placeholder="Agregar Producto"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={productos}
                  />
                  <Table
                    pagination={false}
                    scroll={{ x: 400 }}
                    rowKey={(record) => record.id}
                    columns={columnsCarrito}
                    dataSource={carrito}
                  />
                  <div
                    style={{
                      marginTop: "30px",
                      width: "100%",
                      maxWidth: "300px",
                      padding: "15px",
                      border: "1px solid #ececec",
                      borderRadius: "10px",
                    }}
                  >
                    <h3>Resumen de Venta Agregada</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>SubTotal</p>
                      <h4>
                        S/
                        {(
                          Math.round((totalCarrito / 1.16) * 100) / 100
                        ).toFixed(2)}
                      </h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>IVA(16%)</p>
                      <h4>
                        S/
                        {(
                          Math.round(
                            (totalCarrito - totalCarrito / 1.16) * 100
                          ) / 100
                        ).toFixed(2)}
                      </h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Total</p>
                      <h4>
                        S/{(Math.round(totalCarrito * 100) / 100).toFixed(2)}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div>
              <h1 style={{ color: "green", fontSize: "18px" }}>
                {isGraduation === "VENTA" ? (
                  <>
                    Cobrar Ahora : S/
                    {Number(totalCarrito) +
                      Number(total) +
                      Number(precioMaquila) -
                      Number(precioAnticipo)}
                  </>
                ) : (
                  <>
                    Cobrar Ahora : S/
                    {Number(totalCarrito) + Number(precioAnticipo)}
                  </>
                )}
              </h1>
              <h1 style={{ color: "#5b5b5b", fontSize: "18px" }}>
                Total Venta Neta : S/
                {Number(total) + Number(precioMaquila) + Number(totalCarrito)}
              </h1>
              <div className="m-6">
                <h3 style={{ width: "100%", textAlign: "start" }}>
                  Método de Pago
                </h3>
                <Checkbox
                  checked={metodoPago === "TARJETA_CREDITO"}
                  onChange={(e) => setMetodoPago("TARJETA_CREDITO")}
                >
                  TARJETA CRÉDITO/DÉBITO
                </Checkbox>
                <Checkbox
                  checked={metodoPago === "TRANSFERENCIA"}
                  onChange={(e) => setMetodoPago("TRANSFERENCIA")}
                >
                  TRANSFERENCIA
                </Checkbox>
                <Checkbox
                  checked={metodoPago === "EFECTIVO"}
                  onChange={(e) => setMetodoPago("EFECTIVO")}
                >
                  EFECTIVO
                </Checkbox>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
      <Modal
        onCancel={() => setVerProblemas(false)}
        title="Registrar problema"
        open={verProblemas}
        onOk={() => problemasOrden()}
      >
        <Form.Item label="Fecha de próxima entrega">
          <DatePicker
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
            onChange={(date, dateString) => setFechaEntrega(dateString)}
          />
        </Form.Item>
      </Modal>
    </div>
  ) : null;
}

export default ListaOrdenes;
