import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  Input,
  Layout,
  Select,
  Table,
  Tag,
  Modal,
  message,
  // Image,
  Popconfirm,
  Button,
  Space,
} from "antd";
// amplify API
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { FaFilePdf } from "react-icons/fa";
import { API, DataStore, graphqlOperation } from "aws-amplify";
// import { useNavigate } from "react-router-dom";
import { OPTICA } from "../../../models";
import {
  iNVENTARIOSByOpticaID,
  listINVENTARIOS,
} from "../../../graphql/queries";

import { useGerenteContext } from "../../../contexts/GerenteContext";
import { deleteINVENTARIO, updateINVENTARIO } from "../../../graphql/mutations";
import LaboratorioSelector from "../../RoleBased/LaboratorioSelector";
import { useAuthContext } from "../../../contexts/AuthContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TicketInventario from "./TicketInventario";

const { Content } = Layout;
const { Option } = Select;
function ListaInventario() {
  // carga de pdf
  const [isGenerating, setIsGenerating] = useState(false);

  const { groupName } = useAuthContext();
  // use state de form modal
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [version, setVersion] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [color, setColor] = useState("");
  const [tipoEstructura, settipoEstructura] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [inventario, setInventario] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [opticaID, setOpticaID] = useState("");
  const [isaument, setIsaument] = useState(false);
  const [isRestar, setIsRestar] = useState(false);
  const [stock, setStock] = useState("");
  const [newStock, setNewStock] = useState("");

  const [dataSource, setDataSource] = useState([]);
  // const [filtercategorias, setFiltercategorias] = useState([]);
  const [opticas, setOpticas] = useState([]);

  // filtros de busqueda
  const [searchStatus, setSearchStatus] = useState(undefined);
  const [searchArmazon, setSearchArmazon] = useState("");

  // optica id select session for context
  const { labId } = useGerenteContext();

  // const navigate = useNavigate();
  const searchcategorias = () => {
    const categorias = [...new Set(inventario.map((inv) => inv.categoria))];
    const items = [];
    for (let index = 0; index < categorias.length; index++) {
      const cat = { text: categorias[index], value: categorias[index] };
      items.push(cat);
    }
    return items;
  };
  // const fetchImage = async (img) => {
  //   try {
  //     const credentials = Auth.currentCredentials();
  //     const url = await Storage.get(img, { level: "public", ...credentials });
  //     console.log(url);
  //     return url;
  //   } catch (error) {
  //     console.error("Error al obtener la imagen:", error);
  //   }
  // };
  console.log(dataSource.length);

  const aumentProduct = (record) => {
    setId(record?.id);
    setVersion(record?._version);
    setStock(record?.stock);
    setIsaument(true);
  };
  const restarProduct = (record) => {
    setId(record?.id);
    setVersion(record?._version);
    setStock(record?.stock);
    setIsRestar(true);
  };
  const onAddProduct = async () => {
    try {
      const newInventario = {
        id: id,
        _version: version,
        stock: (Number(newStock) + Number(stock)).toString(),
      };
      await API.graphql(
        graphqlOperation(updateINVENTARIO, { input: newInventario })
      );
      setIsaument(false);
      setNewStock("");
      message.success("Se agrego mas stock al producto");
      fetchInventario();
    } catch (error) {
      console.log(error);
    }
  };
  const onRestarProduct = async () => {
    try {
      if (stock >= newStock) {
        const newInventario = {
          id: id,
          _version: version,
          stock: (Number(stock) - Number(newStock)).toString(),
        };
        await API.graphql(
          graphqlOperation(updateINVENTARIO, { input: newInventario })
        );
        setIsaument(false);
        setNewStock("");
        message.success("Se agrego mas stock al producto");
        fetchInventario();
      } else {
        message.error(
          "La cantidad de stock max que se puede dar de baje es " + stock
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    // {
    //   title: "Imagen",
    //   dataIndex: "urlImagen",
    //   key: "urlImagen",
    //   onCell: async (record) => ({
    //     children: await fetchImage(record.urlImagen),
    //   }),
    //   render: (text) => {
    //     if (text === "") {
    //       return (
    //         <div
    //           style={{
    //             width: "60px",
    //             height: "60px",
    //             borderRadius: "50%",
    //             objectFit: "contain",
    //             objectPosition: "center",
    //             overflow: "hidden",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             background: "#5b5b5b",
    //             color: "#fff",
    //           }}
    //           alt="imagen prueba"
    //         >
    //           Sin Img
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <Image
    //           style={{
    //             width: "80px",
    //             height: "80px",
    //             borderRadius: "50%",
    //             objectFit: "contain",
    //             objectPosition: "center",
    //             overflow: "hidden",
    //           }}
    //           src={text}
    //           alt="imagen prueba"
    //         />
    //       );
    //     }
    //   },
    // },
    {
      title: "Nombre",
      dataIndex: "nombreProducto",
      key: "nombreProducto",
    },
    {
      title: "Tipo Material",
      dataIndex: "tipoMaterial",
      key: "tipoMaterial",
    },
    {
      title: "Categoria",
      key: "categoria",
      dataIndex: "categoria",
      render: (text, record) => {
        let color = "";
        if (text === "DAMA") {
          color = "geekblue";
        }
        if (text === "CABALLERO") {
          color = "green";
        }
        if (text === "BOY") {
          color = "volcano";
        }
        return <Tag color={color}>{text}</Tag>;
      },
      filters: searchcategorias(),
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.categoria.startsWith(value),
    },
    {
      title: "Proveedor",
      dataIndex: "proveedor",
      key: "proveedor",
    },
    {
      title: "Costo",
      dataIndex: "costo",
      key: "costo",
      render: (text) => {
        return <p> ${(Math.round(text * 100) / 100).toFixed(2)}</p>;
      },
    },
    {
      title: "Precio Venta",
      dataIndex: "precioVenta",
      key: "precioVenta",
      render: (text) => {
        return <p> ${(Math.round(text * 100) / 100).toFixed(2)}</p>;
      },
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Cód Armazón",
      dataIndex: "tipoEstructura",
      key: "tipoEstructura",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        let stock = record?.stock;
        if (stock > 10) {
          return <Tag color="green">En stock</Tag>;
        } else if (stock === "0") {
          return <Tag color="red">Sin existencias</Tag>;
        } else if (stock > 0 && stock < 11) {
          return <Tag color="warning">Limitado</Tag>;
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <Space display="horizontal">
            <Button onClick={() => aumentProduct(record)}>+</Button>
            <Button onClick={() => restarProduct(record)}>-</Button>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            <Popconfirm
              title="Eliminar Lente"
              description="¿Esta seguro de eliminar el lente?"
              onConfirm={() => deletehandle()}
              okText="Si"
              cancelText="No"
            >
              <DeleteOutlined
                onClick={() => changeDelete(record)}
                style={{ color: "red", marginLeft: "15px" }}
              />{" "}
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  const searchOpticas = async () => {
    try {
      const result = await DataStore.query(OPTICA);
      setOpticas(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchOpticas();
  }, []);

  const edithandle = (record) => {
    setId(record?.id);
    setVersion(record?._version);
    setOpticaID(record.opticaID);
    setNombreProducto(record?.nombreProducto);
    setCategoria(record?.categoria);
    setProveedor(record?.proveedor);
    setCosto(record?.costo);
    setPrecioVenta(record?.precioVenta);
    setColor(record?.color);
    settipoEstructura(record?.tipoEstructura);
    setTipoMaterial(record?.tipoMaterial);
    setIsEditing(true);
    setUrlImagen(record?.urlImagen);
  };

  const changeDelete = (record) => {
    setId(record?.id);
    setVersion(record?._version);
  };

  const fetchInventario = useCallback(async () => {
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
          productosList.push(...deletew);
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
    console.log(productosList);
    // const ordenProducts = productosList.sort((a, b) => {
    //   // Ordenar por fecha de creación descendente (más reciente primero)
    //   return new Date(b.createdAt) - new Date(a.createdAt);
    // });

    productosList.sort((a, b) => a.tipoMaterial.localeCompare(b.tipoMaterial));

    setDataSource(productosList);
    setInventario(productosList);
  }, [labId]);
  useEffect(() => {
    fetchInventario();
    // eslint-disable-next-line
  }, []);

  const deletehandle = async () => {
    console.log(id);
    const prod = {
      id: id,
      _version: version,
    };
    try {
      await API.graphql(graphqlOperation(deleteINVENTARIO, { input: prod }));
      fetchInventario();
      message.success("El producto se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  const onFinish = async () => {
    console.log({
      id,
      categoria,
      proveedor,
      costo,
      precioVenta,
      nombreProducto,
      color,
      tipoEstructura,
      urlImagen,
      tipoMaterial,
      opticaID,
    });
    try {
      const prod = {
        id,
        categoria,
        proveedor,
        costo,
        precioVenta,
        nombreProducto,
        color,
        tipoEstructura,
        urlImagen,
        tipoMaterial,
        opticaID,
        _version: version,
      };
      await API.graphql(graphqlOperation(updateINVENTARIO, { input: prod }));
      fetchInventario();
      setIsEditing(false);
      message.success("El producto se ha actualizado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  useEffect(() => {
    searchFilters(searchStatus, searchArmazon);
    // eslint-disable-next-line
  }, [searchStatus, searchArmazon]);

  const handleStatusChange = (value) => {
    setSearchStatus(value);
  };

  const handleNombreChange = (e) => {
    setSearchArmazon(e.target.value);
  };

  const searchFilters = (status, armazon) => {
    if (searchStatus !== undefined || searchArmazon !== "") {
      const filteredProductos = inventario.filter((producto) => {
        const searchStatusString = String(status);
        console.log(producto);

        const statusFilter =
          status === undefined ||
          (searchStatusString === "2" && Number(producto.stock) === 0) ||
          (searchStatusString === "1" &&
            Number(producto.stock) > 0 &&
            Number(producto.stock) < 11) ||
          (searchStatusString === "0" && Number(producto.stock) >= 10);

        const armazonFilter =
          !armazon ||
          producto.tipoEstructura.toLowerCase().includes(armazon.toLowerCase());

        return statusFilter && armazonFilter;
      });
      setDataSource(filteredProductos);
    } else {
      setDataSource(inventario);
    }
  };
  const resetFilters = () => {
    setSearchArmazon("");
    setSearchStatus(undefined);
  };

  return (
    <Content>
      <div>
        <h1>NUESTROS PRODUCTOS</h1>
        <div style={{ margin: "20px 0px" }}>
          <p>Filtrado avanzado</p>
        </div>
        <Form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "15px",
          }}
        >
          <Form.Item>
            <Select
              value={searchStatus}
              onSelect={(e) => {
                handleStatusChange(e);
              }}
              onClear={(e) => {
                handleStatusChange(e);
              }}
              allowClear
              placeholder="Filtrar por Status"
            >
              <Option value="0">EN STOCK</Option>
              <Option value="1">LIMITADO</Option>
              <Option value="2">SIN EXISTENCIAS</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Input
              value={searchArmazon}
              onChange={(e) => {
                handleNombreChange(e);
              }}
              placeholder="Buscar codigo de armazon"
            />
          </Form.Item>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={resetFilters} title="reset">
              Resetear
            </Button>
            {dataSource.length > 0 && (
              <PDFDownloadLink
                document={<TicketInventario data={dataSource} />}
                fileName="inventario.pdf"
              >
                {({ load }) => (
                  <Button
                    onClick={() => setIsGenerating(load)}
                    disabled={load || isGenerating}
                  >
                    {load || isGenerating ? (
                      "Generando PDF..."
                    ) : (
                      <>
                        <FaFilePdf /> Descargar reporte
                      </>
                    )}
                  </Button>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </Form>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={dataSource}
          columns={columns}
          rowClassName="editable-row"
          // onRow={(lentes) => ({
          //   onClick: () => navigate(`lentes/${lentes.id}`),
          // })}
        />
        {/* {isEditing === true ? ( */}
        <Modal
          onCancel={() => setIsEditing(false)}
          // onOk={() => setIsEditing(false)}
          title="Edit Lente"
          open={isEditing}
          onOk={() => onFinish()}
        >
          <Form layout="vertical">
            <div
              style={{
                display: "grid",
                gap: "8px",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <Form.Item
                label="Nombre"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={nombreProducto}
                  onChange={(e) => setNombreProducto(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Categoria"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={categoria}
                  onSelect={(e) => setCategoria(e)}
                  placeholder="Select un categoria DAMA/CABALERO/BOY"
                >
                  <Option value="DAMA">DAMA</Option>
                  <Option value="CABALLERO">CABALLERO</Option>
                  <Option value="BOY">BOY</Option>
                </Select>
              </Form.Item>
              {opticas.length > 0 && (
                <LaboratorioSelector
                  opticaID={opticaID}
                  groupName={groupName}
                  setOpticaID={setOpticaID}
                  opticas={opticas}
                />
              )}
              <Form.Item
                label="Proveedor"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={proveedor}
                  onChange={(e) => setProveedor(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Costo"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={costo}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setCosto(0);
                    } else {
                      setCosto(Number(e.target.value));
                    }
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Precio de Venta"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={precioVenta}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setPrecioVenta(0);
                    } else {
                      setPrecioVenta(Number(e.target.value));
                    }
                  }}
                  style={{ width: "100%" }}
                  // formatter={(value) =>
                  //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  // }
                  // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  // onChange={onChange}
                />
              </Form.Item>
              <Form.Item
                label="Color"
                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Tipo Armazon"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={tipoEstructura}
                  onChange={(e) => settipoEstructura(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Imagen"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input type="file" accept="jpg" />
                {/* <Upload
              // customRequest={(info) => handleImage(info)}
              onChange={(e) => handleImage(e)}
              action="http://localhost:3000/superadmin"
              name="lente"
              accept=".apng,.avif,.gif,.jpg,.jpeg,.jfif,.pjpeg,.pjp,.png,.svg,.webp"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload> */}
              </Form.Item>
              <Form.Item
                label="Tipo Material"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={tipoMaterial}
                  onChange={(e) => setTipoMaterial(e.target.value)}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
        <Modal
          onCancel={() => setIsaument(false)}
          // onOk={() => setIsEditing(false)}
          title="Aumentar productos"
          open={isaument}
          onOk={() => onAddProduct()}
        >
          <p>Stock Actual: {stock}</p>
          <Form.Item label="Agregar stock">
            <Input
              placeholder="Ingresa la cantidad de stock a agregar al actual"
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
            />
          </Form.Item>
        </Modal>
        <Modal
          onCancel={() => setIsRestar(false)}
          // onOk={() => setIsEditing(false)}
          title="Dar de baja a producto"
          open={isRestar}
          onOk={() => onRestarProduct()}
        >
          <p>Stock Actual: {stock}</p>
          <Form.Item label="Agregar stock">
            <Input
              placeholder="Ingresa la cantidad de stock a agregar al actual"
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
            />
          </Form.Item>
        </Modal>
        {/* ) : null} */}
      </div>
    </Content>
  );
}

export default ListaInventario;
