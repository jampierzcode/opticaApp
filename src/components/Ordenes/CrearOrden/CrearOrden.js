import "./Cart.css";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Table,
  message,
  Tag,
  Checkbox,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { MenuContext } from "../../../contexts/MenuContext";
import { useAuthContext } from "../../../contexts/AuthContext";
import { React, useState, useEffect, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  createINVENTARIOORDENITEMS,
  createORDEN,
  // updateINVENTARIO,
} from "../../../graphql/mutations";
import LaboratorioSelector from "../../RoleBased/LaboratorioSelector";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import GROUPS from "../../../constants/groups";
import {
  cLIENTESByOpticaID,
  getOPTICA,
  iNVENTARIOSByOpticaID,
  listCLIENTES,
  listINVENTARIOS,
  listOPTICAS,
} from "../../../graphql/queries";
import { CajaContext } from "../../../contexts/CajaContext";

const { Option } = Select;

function CrearOrden() {
  // verificar cajas uststate
  const { cajaAbierta, nowTurno, verificarCajaAbierta } =
    useContext(CajaContext);

  const [verificandoCaja, setVerificandoCaja] = useState(true);
  // const [modalVisible, setModalVisible] = useState(false);

  const { groupName } = useAuthContext();
  const { cambiarComponent } = useContext(MenuContext);
  const [clientes, setClientes] = useState([]);
  const [clientesID, setclientesID] = useState("");
  // const [usoLentes, setUsoLentes] = useState("");
  // graducacion state
  const [gradCheck, setGradCheck] = useState("");
  const [graduacion, setGraduacion] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const [opticas, setOpticas] = useState([]);
  const [graduacionDerechaVieja, setGraduacionDerechaVieja] = useState("");
  const [graduacionIzquierdaVieja, setGraduacionIzquierdaVieja] = useState("");
  const [graduacionDerechaNueva, setGraduacionDerechaNueva] = useState("");
  const [graduacionIzquierdaNueva, setGraduacionIzquierdaNueva] = useState("");
  const [referencia, setReferencia] = useState("");
  // const [seRealizoExamen, setSeRealizoExamen] = useState("");
  const [fechaExamen, setFechaExamen] = useState("");
  const fechaEntrega = "";

  // ordenes state carts
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  var cantidad = 1;
  const [productoID, setProductoID] = useState(null);
  const [total, setTotal] = useState(0);
  const [precioGraduacion, setPrecioGraduacion] = useState(0);

  // optica id
  const { labId, gerenteId } = useGerenteContext();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const options = [];
        let productosList = [];
        if (labId === "") {
          try {
            let nextToken = null;
            do {
              const result = await API.graphql(
                graphqlOperation(listINVENTARIOS, { limit: 100, nextToken })
              );
              console.log(result);
              const nodelete = result?.data?.listINVENTARIOS?.items;
              const deletew = nodelete.filter(
                (elemento) => elemento._deleted !== true
              );
              let tempProducts = [];
              for (const producto of deletew) {
                const resultOptica = await API.graphql(
                  graphqlOperation(getOPTICA, { id: producto.opticaID })
                );
                const optica = resultOptica.data.getOPTICA;
                const productOptica = {
                  ...producto,
                  nombreOptica: optica.nombre,
                };
                tempProducts.push(productOptica);
              }
              productosList.push(...tempProducts);
              nextToken = result?.data?.listINVENTARIOS?.nextToken;
            } while (nextToken);
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            let nextToken = null;
            do {
              const result = await API.graphql(
                graphqlOperation(iNVENTARIOSByOpticaID, {
                  opticaID: labId,
                  limit: 100,
                  nextToken,
                })
              );
              const nodelete = result?.data?.iNVENTARIOSByOpticaID?.items;
              const deletew = nodelete.filter(
                (elemento) => elemento._deleted !== true
              );
              productosList.push(...deletew);
              nextToken = result?.data?.iNVENTARIOSByOpticaID?.nextToken;
            } while (nextToken);
          } catch (error) {
            console.log(error);
          }
        }

        productosList.map((producto) => {
          const nombreOptica =
            producto?.nombreOptica !== undefined ? producto?.nombreOptica : "";
          const stock =
            producto.stock === "0"
              ? "sin existencias"
              : producto.stock + " und";
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
        message.error("No se encontraron produtos");
      }
    };
    fetchProductos();
  }, [labId]);
  useEffect(() => {
    const fetchOpticas = async () => {
      if (groupName !== GROUPS.SUPER_ADMIN) {
        setOpticaID(labId);
      } else {
        try {
          const result = await API.graphql(graphqlOperation(listOPTICAS));
          setOpticas(result.data.listOPTICAS.items);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchOpticas();
  }, [groupName, labId]);
  useEffect(() => {
    const fetchClientes = async () => {
      let clientes;
      if (labId === "") {
        try {
          const result = await API.graphql(graphqlOperation(listCLIENTES));
          const nodelete = result?.data?.listCLIENTES?.items;
          const deletew =
            nodelete.length > 0
              ? nodelete.filter((elemento) => elemento._deleted !== true)
              : null;
          clientes = deletew;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const result = await API.graphql(
            graphqlOperation(cLIENTESByOpticaID, { opticaID: labId })
          );
          const nodelete = result?.data?.cLIENTESByOpticaID?.items;
          const deletew =
            nodelete.length > 0
              ? nodelete.filter((elemento) => elemento._deleted !== true)
              : null;
          clientes = deletew;
        } catch (error) {
          console.log(error);
        }
      }
      const options = [];
      clientes.forEach((cliente) => {
        const option = {
          value: cliente.id,
          label:
            cliente.nombres +
            " " +
            cliente.apellidoPaterno +
            " " +
            cliente.apellidoMaterno,
        };
        options.push(option);
      });
      setClientes(options);
    };
    fetchClientes();
  }, [labId]);

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
            setTotal(total + cantidad * objeto.precio);
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
          stock: result.stock,
          version: result._version,
          subTotal: Number(result.precioVenta) * Number(cantidad),
          idGraduation: false,
        };
        setCarrito([...carrito, carritoInterno]);
        setTotal(total + carritoInterno.subTotal);
      }
      setProductoID(null);
    }
  };
  const onOrden = async () => {
    let checkOrden = 1;
    if (carrito.length > 0) {
      if (clientesID !== "" && opticaID !== "") {
        if (graduacion === "SI") {
          if (Number(precioGraduacion) !== 0) {
            let count = 0;
            for (const cart of carrito) {
              if (cart.idGraduation === true) {
                count = count + 1;
              }
            }
            if (count > 0) {
              checkOrden = 1;
            } else {
              checkOrden = 0;
              message.warning(
                "Tienes que seleccionar por lo menos un producto que pertenecerá a la graduación"
              );
            }
          } else {
            checkOrden = 0;
            message.warning(
              "Estas creando una graducación, tienes que agregar el Precio de AR-MAQUILA"
            );
          }
        }
        if (checkOrden === 1) {
          const newOrden = {
            tipoOrden: "COTIZACION",
            clientesID,
            opticaID,
            seRealizoExamen: graduacionDerechaVieja ? "SI" : "NO",
            fechaEntrega,
            usadoLentes: "-",
            referencia,
            graduacionDerechaVieja,
            graduacionIzquierdaVieja,
            graduacionDerechaNueva,
            graduacionIzquierdaNueva,
            fechaExamen,
            ordenStatus: "CREADA",
            fechaOrden: "",
            horaOrden: "",
            precioGraduacion: precioGraduacion,
            precioTotal: total + Number(precioGraduacion),
            anticipo: 0,
            turnoID: nowTurno.id,
          };
          const result = await API.graphql(
            graphqlOperation(createORDEN, { input: newOrden })
          );
          const orden = result.data.createORDEN;
          await Promise.all(
            carrito.map(async (cart) => {
              let newOrdenItem = {
                cantidad: cart.cantidad,
                ordenID: orden.id,
                inventarioID: cart.id,
                costo: cart.subTotal,
                idGraduation: cart.idGraduation,
              };
              await API.graphql(
                graphqlOperation(createINVENTARIOORDENITEMS, {
                  input: newOrdenItem,
                })
              );
            })
          );
          setCarrito([]);
          cambiarComponent({ key: "21" });
          message.success("La orden se ha registrado correctamente");
          console.log(carrito);
        }
      } else {
        message.warning("Te faltan llenar campos");
      }
    } else {
      message.info("Te faltan agregar productos");
    }
  };

  const desCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        if (objeto.cantidad > 1) {
          const newCantidad = objeto.cantidad - cantidad;
          const newSubtotal = newCantidad * objeto.precio;
          const newStock = Number(objeto.stock) + 1;
          setTotal(total - cantidad * objeto.precio);
          return {
            ...objeto,
            cantidad: newCantidad,
            subTotal: newSubtotal,
            stock: newStock,
          };
        }
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };
  const aumentCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        if (objeto.stock - 1 > 0) {
          const newCantidad = objeto.cantidad + cantidad;
          const newSubtotal = newCantidad * objeto.precio;
          setTotal(total + cantidad * objeto.precio);
          const newStock = Number(objeto.stock) - 1;
          return {
            ...objeto,
            cantidad: newCantidad,
            subTotal: newSubtotal,
            stock: newStock,
          };
        }
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };

  const deleteRowCart = (record) => {
    const nuevosObjetos = carrito.filter((objeto) => objeto.id !== record.id);
    const precio = carrito.find((objeto) => objeto.id === record.id);
    setCarrito(nuevosObjetos);
    setTotal(total - Number(precio.subTotal));
  };

  // Table source
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        let stock = Number(record?.stock);
        if (stock - 1 > 0) {
          return (
            <>
              <Tag color="green">En stock</Tag>
              <p>{Number(record?.stock) - 1} und</p>
            </>
          );
        } else {
          return <Tag color="red">Sin existencia</Tag>;
        }
      },
    },
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
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button onClick={() => deleteRowCart(record)} type="primary" danger>
              <DeleteOutlined />
            </Button>
            {graduacion === "SI" ? (
              <Checkbox
                checked={record.idGraduation}
                // disabled={disabled}
                onChange={(e) => selectGradProdut(record, e.target.checked)}
              >
                Graduacion
              </Checkbox>
            ) : null}
          </div>
        );
      },
    },
  ];
  const selectGradProdut = (record, value) => {
    console.log(record);
    console.log(value);
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        const newIdGraduation = value;
        return {
          ...objeto,
          idGraduation: newIdGraduation,
        };
      }
      return objeto;
    });
    console.log(nuevosObjetos);
    setCarrito(nuevosObjetos);

    // setCheckGradProduct(!checkGradProduct);
  };
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

  return verificandoCaja ? (
    <p>Verificando cajas abiertas</p>
  ) : cajaAbierta ? (
    <div
      style={{
        padding: "20px 30px",
        background: "#fff",
      }}
    >
      <h1>Registrar Orden</h1>

      <Form.Item style={{ marginTop: "20px" }} label="Graduacion?">
        <Select
          onSelect={(e) => {
            if (e === "NO") {
              if (carrito.length > 0) {
                let nuevosObjetos = carrito.map((objeto) => {
                  return {
                    ...objeto,
                    idGraduation: false,
                  };
                });
                setCarrito(nuevosObjetos);
              }
            }
            setGraduacion(e);
          }}
          placeholder="Seleccione que tipo de orden desea registrar"
        >
          <Option value="SI">SI</Option>
          <Option value="NO">NO</Option>
        </Select>
      </Form.Item>
      {graduacion === "SI" ? (
        <Form layout="vertical">
          <>
            <h1>Graduación de lentes</h1>
            <Form.Item label="Tiene graduación de lentes?">
              <Select
                onSelect={(e) => setGradCheck(e)}
                allowClear
                onClear={() => setGradCheck("")}
                placeholder="Selecciona SI/NO"
              >
                <Option value="SI">SI</Option>
                <Option value="NO">NO</Option>
              </Select>
            </Form.Item>
            {gradCheck === "SI" ? (
              <div
                direction="horizontal"
                style={{ width: "100%", display: "flex", gap: "8px" }}
              >
                <Form.Item
                  label="Graduación Derecha Vieja"
                  style={{ width: "100%" }}
                >
                  <Input
                    value={graduacionDerechaVieja}
                    onChange={(e) => setGraduacionDerechaVieja(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Graduación Izquierda Vieja"
                  style={{ width: "100%" }}
                >
                  <Input
                    value={graduacionIzquierdaVieja}
                    onChange={(e) =>
                      setGraduacionIzquierdaVieja(e.target.value)
                    }
                  />
                </Form.Item>
              </div>
            ) : null}
            <div
              direction="horizontal"
              style={{ width: "100%", display: "flex", gap: "8px" }}
            >
              <Form.Item
                label="Graduación Derecha Nueva"
                style={{ width: "100%" }}
              >
                <Input
                  value={graduacionDerechaNueva}
                  onChange={(e) => setGraduacionDerechaNueva(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Graduación Izquierda Nueva"
                style={{ width: "100%" }}
              >
                <Input
                  value={graduacionIzquierdaNueva}
                  onChange={(e) => setGraduacionIzquierdaNueva(e.target.value)}
                />
              </Form.Item>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              <Form.Item label="Fecha de examen">
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => setFechaExamen(dateString)}
                  placeholder="Fecha"
                />
              </Form.Item>

              <Form.Item label="Recomendado por">
                <Input
                  onChange={(e) => setReferencia(e.target.value)}
                  value={referencia}
                  placeholder="ej: Dr Shurick"
                />
              </Form.Item>

              <Form.Item label="Precio AR-MAQUILA">
                <Input
                  value={precioGraduacion}
                  onChange={(e) => setPrecioGraduacion(e.target.value)}
                  placeholder="Ingrese el costo $.00 de la orden"
                />
              </Form.Item>
            </div>
          </>
        </Form>
      ) : null}
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
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            // options={productos.filter((producto) => producto.stock > 0)} // Filtrar productos con existencias
            optionLabelProp="label"
            options={productos}
          />
          <Table
            pagination={false}
            scroll={{ x: 400 }}
            rowKey={(record) => record.id}
            columns={columns}
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
            <h3>Resumen de Pago</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>SubTotal</p>
              <h4>
                $
                {(
                  Math.round(
                    ((total + Number(precioGraduacion)) / 1.16) * 100
                  ) / 100
                ).toFixed(2)}
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>IVA(16%)</p>
              <h4>
                $
                {(
                  Math.round(
                    (total +
                      Number(precioGraduacion) -
                      (Number(total) + Number(precioGraduacion)) / 1.16) *
                      100
                  ) / 100
                ).toFixed(2)}
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Total</p>
              <h4>
                $
                {(
                  Math.round((total + Number(precioGraduacion)) * 100) / 100
                ).toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
        <div
          className="container-info"
          style={{
            maxWidth: "250px",
            border: "1px solid #ececec",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <Form.Item>
            <p>
              <b>Información Básica</b>
            </p>
            <Select
              showSearch
              style={{ width: "100%" }}
              onChange={(e) => setclientesID(e)}
              placeholder="Buscar Clientes"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={clientes}
            />
          </Form.Item>
          {opticas.length > 0 && (
            <LaboratorioSelector
              groupName={groupName}
              setOpticaID={setOpticaID}
              opticas={opticas}
            />
          )}
          <div style={{ marginTop: 10 }}>
            <Button
              onClick={onOrden}
              title="Save"
              htmlType="submit"
              type="primary"
            >
              Crear Orden
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        gap: "15px",
      }}
    >
      <h1>Debes primero abrir una caja, para empezar a vender</h1>
      <Button
        onClick={() => cambiarComponent({ key: "8" })}
        className="primary"
      >
        Abrir una caja
      </Button>
    </div>
  );
}

export default CrearOrden;
