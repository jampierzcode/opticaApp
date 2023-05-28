import { API, DataStore, graphqlOperation } from "aws-amplify";
import React, { useEffect } from "react";
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
} from "antd";
import { useState } from "react";
import { INVENTARIO, INVENTARIOORDENITEMS, ORDEN } from "../../../models";
import TicketPDF from "./TicketPdf";
import Cotizacion from "./Cotizacion";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import logo from "../../../assets/logohilmora.png";

import { useGerenteContext } from "../../../contexts/GerenteContext";
import {
  DeleteOutlined,
  EyeOutlined,
  SearchOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import {
  getCLIENTES,
  getINVENTARIO,
  getOPTICA,
  getORDEN,
  iNVENTARIOORDENITEMSByOrdenID,
  listORDENS,
  oRDENSByOpticaID,
} from "../../../graphql/queries";
import {
  createINVENTARIOORDENITEMS,
  updateORDEN,
} from "../../../graphql/mutations";

const { Option } = Select;

function ListaOrdenes() {
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
  // graduaciones
  const [graduacionDerechaVieja, setGraduacionDerechaVieja] = useState("");
  const [graduacionIzquierdaVieja, setGraduacionIzquierdaVieja] = useState("");
  const [graduacionDerechaNueva, setGraduacionDerechaNueva] = useState("");
  const [graduacionIzquierdaNueva, setGraduacionIzquierdaNueva] = useState("");
  const [tipoOrden, setTipoOrden] = useState("");
  const [ordenNow, setOrdenNow] = useState(null);
  const [ordenID, setOrdenID] = useState("");

  // state for search
  const [searchOrden, setSearchOrden] = useState(undefined);
  const [searchStatus, setSearchStatus] = useState(undefined);
  const [searchFecha, setSearchFecha] = useState("");

  // optica id
  const { labId } = useGerenteContext();

  const fetchOrdenes = async () => {
    try {
      let ordenes;
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listORDENS));
        ordenes = result.data.listORDENS.items;
      } else {
        const result = await API.graphql(
          graphqlOperation(oRDENSByOpticaID, { opticaID: labId })
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
      setDataSource(ordenesConNombres);
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
    setOrdenID(record.id);
    setprecioMaquila(record.precioGraduacion);
    setTipoOrden(record.tipoOrden);
    setOrdenNow(record.id);
    // setTotal(record.precioTotal);
    setCliente(record.nombreCliente);
    try {
      const ordenes = await DataStore.query(INVENTARIOORDENITEMS, (d) =>
        d.ordenID.eq(record.id)
      );
      const ordenesConNombres = [];
      for (const orden of ordenes) {
        // Obtén el cliente correspondiente a través del ID
        const inventario = await DataStore.query(
          INVENTARIO,
          orden.inventarioID
        );
        const ordenConNombre = {
          ...orden,
          nombreProducto: inventario.nombreProducto,
          precio: inventario.precioVenta,
        };
        // Agrega el objeto nuevo al array de órdenes con nombres de cliente
        ordenesConNombres.push(ordenConNombre);
      }
      setProducts(ordenesConNombres);
    } catch (error) {
      console.log(error);
    }
    setVerReport(true);
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
  };
  const entregarOrden = async (record) => {
    const split = record.anticipo.split("-");
    const total = split[0];
    const deuda = `${total} - ${total}`;
    const updateOrden = {
      id: record?.id,
      tipoOrden: "ORDEN",
      ordenStatus: "ENTREGADA",
      _version: record?._version,
      anticipo: deuda,
    };
    try {
      await API.graphql(graphqlOperation(updateORDEN, { input: updateOrden }));
      fetchOrdenes();
      message.success("La orden se ha entregado correctamente");
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
      console.log(error);
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
  const problemasOrden = async (record) => {
    const updateOrden = {
      id: record?.id,
      ordenStatus: "CONPROBLEMAS",
      _version: record?._version,
    };
    try {
      await API.graphql(graphqlOperation(updateORDEN, { input: updateOrden }));
      fetchOrdenes();
      message.success("Se registro un problema en la orden");
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
      console.log(error);
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
      title: "Cliente",
      dataIndex: "nombreCliente",
      key: "nombreCliente",
    },
    {
      title: "Optica",
      dataIndex: "nombreOptica",
      key: "nombreOptica",
    },
    {
      title: "Precio total",
      dataIndex: "precioTotal",
      key: "precioTotal",
      render: (_, record) => {
        return (
          <p>${(Math.round(record.precioTotal * 100) / 100).toFixed(2)}</p>
        );
      },
    },
    {
      title: "Anticipo",
      dataIndex: "anticipo",
      key: "anticipo",
      render: (_, record) => {
        if (Number(record.anticipo) !== 0) {
          const split = record.anticipo.split("-");
          const anticipo = split[1];
          return <p style={{ color: "green" }}>${anticipo}</p>;
          // return <p>${(Math.round(record.anticipo * 100) / 100).toFixed(2)}</p>;
        } else {
          return <p>-</p>;
        }
      },
    },
    {
      title: "Deuda por anticipo",
      dataIndex: "deudaanticipo",
      key: "deudaanticipo",
      render: (_, record) => {
        if (Number(record.anticipo) !== 0) {
          const split = record.anticipo.split("-");
          const total = split[0];
          const anticipo = split[1];
          const deuda = Number(total) - Number(anticipo);
          if (deuda === 0) {
            return <Tag color="green">Pagado</Tag>;
          } else {
            return <p style={{ color: "red" }}>${deuda}</p>;
          }
          // return <p>${(Math.round(record.anticipo * 100) / 100).toFixed(2)}</p>;
        } else {
          return <p>-</p>;
        }
      },
    },
    {
      title: "Status Orden",
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
                    <Popconfirm
                      title="Entregar al Cliente"
                      description="¿Esta seguro de entregar la orden?"
                      onConfirm={() => entregarOrden(record)}
                      okText="Si"
                      cancelText="No"
                    >
                      <Button onClick={() => setOrdenID(record?.id)}>
                        Entregar Orden
                      </Button>
                    </Popconfirm>
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
                      <Button success onClick={() => setOrdenID(record?.id)}>
                        Finalizar Orden
                      </Button>
                    </Popconfirm>
                    <Popconfirm
                      title="Registrar Problema"
                      description="¿Esta seguro de registrar problema?"
                      onConfirm={() => problemasOrden(record)}
                      okText="Si"
                      cancelText="No"
                    >
                      <Button danger onClick={() => setOrdenID(record?.id)}>
                        Problemas
                      </Button>
                    </Popconfirm>
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
      title: "Actions",
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
                  title="Eliminar Cotizacion"
                  description="¿Esta seguro de eliminar la coizacion?"
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
      const result = await DataStore.query(INVENTARIO);
      result.map((producto) => {
        const option = {
          value: producto.id,
          label: producto.nombreProducto,
        };
        options.push(option);
        return true;
      });
      setProductos(options);
      setListaProductos(result);
    } catch (error) {
      message.error("No se encontraron clientes");
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
        return <p>$/{record.precio}.00</p>;
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (_, record) => {
        return <p>$/{record.subTotal}.00</p>;
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
        return <p>$/{record.precio}.00</p>;
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (_, record) => {
        return <p>$/{record.subTotal}.00</p>;
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
    console.log(ordenUpdate);
    if (isGraduation === "GRADUATION") {
      if (Number(precioAnticipo) !== 0) {
        const updateOrden = {
          id: ordenID,
          tipoOrden: "ORDEN",
          ordenStatus: "ENVIADAMAQUILA",
          precioTotal: (
            Number(precioMaquila) +
            Number(total) +
            Number(totalCarrito)
          ).toString(),
          anticipo: `${Number(precioMaquila) + Number(total)}-${Number(
            precioAnticipo
          )}`,
          _version: ordenUpdate,
        };
        await API.graphql(
          graphqlOperation(updateORDEN, { input: updateOrden })
        );
        message.success("La cotizacion se envio a Maquila");
        fetchOrdenes();
        setIsEditing(false);
        setDetalleProductos([]);
        setTotal(0);
        setprecioMaquila(0);
        setTotalCarrito(0);
      } else {
        message.warning("El anticipo no debe ser 0");
      }
    } else {
      const updateOrden = {
        id: ordenID,
        tipoOrden: "ORDEN",
        ordenStatus: "FINALIZADA",
        precioTotal: (
          Number(precioMaquila) +
          Number(total) +
          Number(totalCarrito)
        ).toString(),
        _version: ordenUpdate,
      };
      const resolver = await API.graphql(
        graphqlOperation(updateORDEN, { input: updateOrden })
      );
      console.log(resolver);
      message.success("La venta se ha confirmado correctamente");
      fetchOrdenes();
      setIsEditing(false);
      setDetalleProductos([]);
      setTotal(0);
      setprecioMaquila(0);
      setTotalCarrito(0);
    }

    if (carrito.length > 0) {
      try {
        await Promise.all(
          carrito.map(async (cart) => {
            const newDetail = {
              cantidad: cart.cantidad,
              ordenID: ordenID,
              inventarioID: cart.id,
              costo: cart.subTotal,
            };
            await API.graphql(
              graphqlOperation(createINVENTARIOORDENITEMS, { input: newDetail })
            );
          })
        );
        setCarrito([]);
        message.success("La agrego nuevos productos a la orden");
      } catch (error) {
        console.log(error);
      }
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
      searchFecha !== ""
    ) {
      const filteredOrdenes = ordenes.filter((orden) => {
        let matchOrden = true;
        let matchStatus = true;
        let matchFecha = true;

        if (searchOrden && orden.tipoOrden !== searchOrden) {
          matchOrden = false;
        }
        if (searchStatus && orden.ordenStatus !== searchStatus) {
          matchStatus = false;
        }
        if (searchFecha && orden.fechaOrden !== searchFecha) {
          matchFecha = false;
        }

        return matchOrden && matchStatus && matchFecha;
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
  };
  // funcion de imprimir
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Imprimir</title></head><body>"
    );
    printWindow.document.write('<div id="print-content">');
    printWindow.document.write(document.getElementById("pdf-viewer").innerHTML);
    printWindow.document.write("</div></body></html>");
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <div>
      <h1>Lista Ordenes</h1>
      <div style={{ margin: "20px 0px" }}>
        <p>Filtrado avanzado</p>
      </div>
      <Form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
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
            placeholder="Filtrar por fecha"
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
        // onOk={() => onFinish()}
      >
        {tipoOrden === "COTIZACION" ? (
          <>
            <PDFViewer style={{ width: "100%", height: "50vh" }}>
              <Cotizacion
                tipoOrden={tipoOrden}
                logoSrc={logo}
                title="Ticket de Cotizacion"
                customer={cliente}
                products={products}
                // total={total}
                precioGraduacion={precioMaquila}
              />
            </PDFViewer>
            <PDFDownloadLink
              fileName={ordenID + "-" + ordenNow[0].nombreCliente}
              document={
                <Cotizacion
                  tipoOrden={tipoOrden}
                  logoSrc={logo}
                  title="Ticket de Cotizacion"
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
            </PDFDownloadLink>
            {/* <Button onClick={handlePrint}>Imprimir</Button> */}
          </>
        ) : (
          <>
            <PDFViewer
              id="pdf-ticket"
              style={{ width: "100%", height: "50vh" }}
            >
              <TicketPDF
                tipoOrden={tipoOrden}
                logoSrc={logo}
                title="Ticket de Compra"
                customer={cliente}
                products={products}
                // total={total}
                precioGraduacion={precioMaquila}
              />
            </PDFViewer>

            <PDFDownloadLink
              fileName={ordenID + "-" + cliente}
              document={
                <TicketPDF
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
            </PDFDownloadLink>
            <Button onClick={handlePrint}>Imprimir</Button>
          </>
        )}
      </Modal>
      {/* modal de enviar ordenes view */}
      <Modal
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
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Cliente: <br /> {cliente}
            </h3>
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
                Total venta anterior : ${Number(total) + Number(precioMaquila)}
              </h1>
            </div>
            {graduacionDerechaNueva ? (
              <>
                <Form.Item label="Anticipo">
                  <Input
                    value={precioAnticipo}
                    onChange={(e) => setPrecioAnticipo(e.target.value)}
                    placeholder="Ingrese el anticipo del cliente $.00 de la orden"
                  />
                </Form.Item>
                <div>
                  <h1 style={{ color: "red", fontSize: "18px" }}>
                    Deuda de Anticipo : $
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
                        $
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
                        $
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
                        ${(Math.round(totalCarrito * 100) / 100).toFixed(2)}
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
                    Cobrar Ahora : $
                    {Number(totalCarrito) +
                      Number(total) +
                      Number(precioMaquila) -
                      Number(precioAnticipo)}
                  </>
                ) : (
                  <>
                    Cobrar Ahora : $
                    {Number(totalCarrito) + Number(precioAnticipo)}
                  </>
                )}
              </h1>
              <h1 style={{ color: "#5b5b5b", fontSize: "18px" }}>
                Total Venta Neta : $
                {Number(total) + Number(precioMaquila) + Number(totalCarrito)}
              </h1>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default ListaOrdenes;
