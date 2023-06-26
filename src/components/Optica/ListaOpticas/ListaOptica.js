import { React, useState, useEffect } from "react";
import {
  Layout,
  Form,
  Input,
  Table,
  Modal,
  message,
  Select,
  Space,
  Button,
} from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
// import { DeleteOutlined } from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify";
import {
  listCONFIGURACIONDOCUMENTOS,
  listOPTICAS,
} from "../../../graphql/queries";
import {
  createCONFIGURACIONDOCUMENTO,
  updateOPTICA,
} from "../../../graphql/mutations";
const { Content } = Layout;

const { Option } = Select;
function ListaOptica() {
  const [version, setVersion] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isConfig, setIsConfig] = useState(false);
  const [id, setId] = useState("");
  const [nombreOptica, setNombreOptica] = useState("");
  const [opRfc, setOpRfc] = useState("");
  const [direction, setDirection] = useState("");
  const [opCp, setOpCp] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [codSerial, setCodSerial] = useState("");
  const [activeCreate, setActiveCreate] = useState(false);

  const [documentos, setDocumentos] = useState([]);

  // ustetate de configuracion de documentos
  const [tipoDocumento, setTipoDocumento] = useState(null);
  const [serieActual, setSerieActual] = useState("001");
  const [numeroSecuencialActual, setNumeroSecuencialActual] = useState("1");

  const [opticas, setOpticas] = useState([]);
  const fecthOptica = async () => {
    try {
      // const result = await DataStore.query(OPTICA);
      const result = await API.graphql(graphqlOperation(listOPTICAS));
      const opticasList = result?.data?.listOPTICAS?.items;
      console.log(result);

      setOpticas(opticasList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthOptica();
  }, []);
  const edithandle = (record) => {
    setId(record?.id);
    setNombreOptica(record?.nombre);
    setVersion(record?._version);
    setCodSerial(record?.codSerial);
    setOpRfc(record?.rfc);
    setOpCp(record?.cp);
    setContactPhone(record?.contactPhone);
    setDirection(record?.direction);
    setCodSerial(record?.codSerial);
    setIsEditing(true);
  };
  const onFinish = async () => {
    try {
      const prod = {
        id: id,
        _version: version,
        nombre: nombreOptica,
        direction,
        cp: opCp,
        rfc: opRfc,
        contactPhone,
        codSerial,
      };
      await API.graphql(graphqlOperation(updateOPTICA, { input: prod }));
      fecthOptica();
      setIsEditing(false);
      message.success("La optica se ha actualizado correctamente");
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };

  // const changeDelete = (record) => {
  //   setId(record?.id);
  // };
  // const deletehandle = async () => {
  //   console.log(id);

  //   try {
  //     const prod = {
  //       id: id,
  //       _version: version,
  //     };
  //     await DataStore.delete(OPTICA, id);
  //     await API.graphql(graphqlOperation(deleteOPTICA, { input: prod }));
  //     fecthOptica();
  //     message.success("La optica se ha eliminado correctamente");
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Hubo un error contacta al administrador");
  //   }
  // };
  const configDocumentos = (record) => {
    setId(record?.id);
    setCodSerial(record?.codSerial);
    setIsConfig(true);
  };
  const onConfig = async () => {
    try {
      if (
        tipoDocumento !== "" &&
        serieActual !== "" &&
        numeroSecuencialActual !== ""
      ) {
        const newConfig = {
          opticaID: id,
          tipoDocumento,
          serieActual,
          numeroSecuencialActual,
        };
        await API.graphql(
          graphqlOperation(createCONFIGURACIONDOCUMENTO, { input: newConfig })
        );
        message.success("Se configuro correctamento el documento");
        setIsConfig(false);
        fecthDocumentos();
        setActiveCreate(false);
      } else {
        message.warning("Tiene que completar todos los campos");
      }
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
    }
  };
  const fecthDocumentos = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(listCONFIGURACIONDOCUMENTOS, {
          filter: {
            opticaID: { eq: id },
          },
        })
      );
      console.log(result);
      const documentos = result?.data?.listCONFIGURACIONDOCUMENTOS?.items;
      setDocumentos(documentos);
      console.log(documentos);
    } catch (error) {
      message.error("Hubo un error al traer los documentos");
      console.log(error);
    }
  };
  useEffect(() => {
    fecthDocumentos();
    // eslint-disable-next-line
  }, [id]);

  const columnsDcoumentos = [
    {
      title: "Documento",
      dataIndex: "tipoDocumento",
      key: "tipoDocumento",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
          </div>
        );
      },
    },
  ];
  const columns = [
    {
      title: "Nombre Optica",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Creado por",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            <SettingOutlined
              type="link"
              onClick={() => configDocumentos(record)}
            />

            {/* <Popconfirm
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
            </Popconfirm> */}
          </div>
        );
      },
    },
  ];

  return (
    <Content>
      <div>
        <p>Nuestras Opticas</p>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={opticas}
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
          title="Edit Optica"
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
                label="Nombre de la Optica"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={nombreOptica}
                  onChange={(e) => setNombreOptica(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="RFC"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={opRfc}
                  onChange={(e) => setOpRfc(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Cp (cód. postal)"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input value={opCp} onChange={(e) => setOpCp(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Dirección"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Numero de contácto"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Cod. Serial"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={codSerial}
                  onChange={(e) => setCodSerial(e.target.value)}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
        <Modal
          onCancel={() => setIsConfig(false)}
          cancelText="Cerrar"
          footer={null}
          // onOk={() => setIsEditing(false)}
          title="Configuracion de documentos"
          open={isConfig}
          // onOk={() => onConfig()}
        >
          <div style={{ margin: "20px 0px" }}>
            <p>
              Aqui podrá configurar los tipos de documentos aceptados para las
              ventas
            </p>
          </div>

          {activeCreate ? (
            <Form layout="vertical">
              <div
                style={{
                  display: "grid",
                  gap: "8px",
                  gridTemplateColumns: "repeat(1, 1fr)",
                }}
              >
                <Form.Item label="TipoDocumento">
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
                  label="Serie"
                  rules={[
                    { required: true, message: "Este campo es requerido" },
                  ]}
                >
                  <Space.Compact>
                    <Input
                      disabled
                      style={{ width: "20%" }}
                      defaultValue={codSerial}
                    />
                    <Input
                      value={serieActual}
                      placeholder="Escriba el numero de serie con que empezara el documento"
                      onChange={(e) => setSerieActual(e.target.value)}
                    />
                  </Space.Compact>
                </Form.Item>
                <Form.Item
                  label="Empezar en:"
                  rules={[
                    { required: true, message: "Este campo es requerido" },
                  ]}
                >
                  <Space.Compact>
                    <Input
                      disabled
                      style={{ width: "20%" }}
                      defaultValue="00000"
                    />
                    <Input
                      type="number"
                      value={numeroSecuencialActual}
                      placeholder="Escriba el numero  secuencial con que empezara el documento"
                      onChange={(e) =>
                        setNumeroSecuencialActual(e.target.value)
                      }
                    />
                  </Space.Compact>
                </Form.Item>
              </div>
              <div>
                <Space>
                  <Button
                    onClick={() => setActiveCreate(false)}
                    type="primary"
                    danger
                  >
                    Cancelar
                  </Button>
                  <Button onClick={() => onConfig()} type="primary">
                    + Crear
                  </Button>
                </Space>
              </div>
            </Form>
          ) : (
            <Button onClick={() => setActiveCreate(true)} type="primary">
              Crear
            </Button>
          )}
          {activeCreate === false ? (
            <div>
              <Table
                scroll={{ x: 400 }}
                rowKey={(record) => record.id}
                dataSource={documentos}
                columns={columnsDcoumentos}
              />
            </div>
          ) : null}
        </Modal>
        {/* ) : null} */}
      </div>
    </Content>
  );
}

export default ListaOptica;
