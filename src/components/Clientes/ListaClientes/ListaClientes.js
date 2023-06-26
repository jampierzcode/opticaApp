import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Layout,
  Modal,
  Popconfirm,
  Form,
  Input,
  message,
  Table,
  Tag,
  Select,
  DatePicker,
} from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  cLIENTESByOpticaID,
  listCLIENTES,
  listOPTICAS,
} from "../../../graphql/queries";
import { deleteCLIENTES, updateCLIENTES } from "../../../graphql/mutations";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import LaboratorioSelector from "../../RoleBased/LaboratorioSelector";
import { useAuthContext } from "../../../contexts/AuthContext";
import GROUPS from "../../../constants/groups";

const { Content } = Layout;
const { Option } = Select;

function ListaClientes() {
  const { groupName } = useAuthContext();
  // state for modal
  const [isEditing, setIsEditing] = useState(false);
  // state for modal
  const [id, setId] = useState("");
  const [version, setVersion] = useState("");
  const [clientes, setClientes] = useState([]);
  const [opticas, setOpticas] = useState([]);
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [whats, setWhats] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [opticaID, setOpticaID] = useState(null);

  // optica id
  const { labId } = useGerenteContext();

  const edithandle = (record) => {
    setId(record?.id);
    setNombres(record?.nombres);
    setVersion(record?._version);
    setApellidoPaterno(record?.apellidoPaterno);
    setApellidoMaterno(record?.apellidoMaterno);
    setFechaNacimiento(record?.fechaNacimiento);
    setEdad(record?.edad);
    setWhats(record?.whats);
    setSexo(record?.sexo);
    setEmail(record?.email);
    setOpticaID(record?.opticaID);
    setIsEditing(true);
  };

  const changeDelete = (record) => {
    setId(record?.id);
    setVersion(record?._version);
  };
  const deletehandle = async () => {
    console.log(id);

    try {
      const prod = {
        id: id,
        _version: version,
      };
      await API.graphql(graphqlOperation(deleteCLIENTES, { input: prod }));
      fetchClientes();
      message.success("El cliente se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  const onFinish = async () => {
    try {
      const prod = {
        id: id,
        _version: version,
        nombres,
        edad,
        sexo,
        fechaNacimiento,
        opticaID,
        whats,
        apellidoPaterno,
        apellidoMaterno,
      };
      await API.graphql(graphqlOperation(updateCLIENTES, { input: prod }));
      fetchClientes();
      setIsEditing(false);
      message.success("El cliente se ha actualizado");
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };

  const columns = [
    {
      title: "Nombres",
      dataIndex: "nombres",
      key: "nombres",
    },
    {
      title: "Apellido Paterno",
      dataIndex: "apellidoPaterno",
      key: "apellidoPaterno",
    },
    {
      title: "Apellido Materno",
      dataIndex: "apellidoMaterno",
      key: "apellidoMaterno",
    },
    {
      title: "Sexo",
      key: "sexo",
      dataIndex: "sexo",
      render: (text, record) => {
        let color = "";
        if (text === "FEMENINO") {
          color = "volcano";
        }
        if (text === "MASCULINO") {
          color = "green";
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Edad",
      dataIndex: "edad",
      key: "edad",
    },
    {
      title: "WhatsApp",
      dataIndex: "whats",
      key: "whats",
    },
    {
      title: "Fecha Nacimiento",
      dataIndex: "fechaNacimiento",
      key: "fechaNacimiento",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            <Popconfirm
              title="Eliminar Cliente"
              description="¿Esta seguro de eliminar el cliente?"
              onConfirm={() => deletehandle()}
              okText="Si"
              cancelText="No"
            >
              <DeleteOutlined
                onClick={() => changeDelete(record)}
                style={{ color: "red", marginLeft: "15px" }}
              />{" "}
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const searchOpticas = async () => {
    if (groupName !== GROUPS.SUPER_ADMIN) {
      setOpticaID(labId);
    } else {
      try {
        const result = await API.graphql(graphqlOperation(listOPTICAS));
        const nodelete = result?.data?.listOPTICAS?.items;
        const deletew =
          nodelete.length > 0
            ? nodelete.filter((elemento) => elemento._deleted !== true)
            : null;
        setOpticas(deletew);
      } catch (error) {
        console.log(error);
      }
    }
    // const result = await DataStore.query(OPTICA);
  };

  const fetchClientes = async () => {
    let clientes;
    if (labId === "") {
      const result = await API.graphql(graphqlOperation(listCLIENTES));
      clientes = result.data.listCLIENTES.items;
    } else {
      const result = await API.graphql(
        graphqlOperation(cLIENTESByOpticaID, { opticaID: labId })
      );
      clientes = result.data.cLIENTESByOpticaID.items;
    }
    const deletew =
      clientes.length > 0
        ? clientes.filter((elemento) => elemento._deleted !== true)
        : null;
    setClientes(deletew);
  };

  useEffect(() => {
    fetchClientes();
    searchOpticas();
    // eslint-disable-next-line
  }, []);

  return (
    <Content>
      <div>
        <h1>Lista de clientes</h1>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={clientes}
          columns={columns}
          rowClassName="editable-row"
        />
        <Modal
          onCancel={() => setIsEditing(false)}
          title="Editar Cliente"
          open={isEditing}
          onOk={() => onFinish()}
        >
          <Form layout="vertical" name="crearCliente">
            <div
              style={{
                display: "grid",
                gap: "8px",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <Form.Item
                label="Nombres"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={nombres}
                  placeholder="Ingresa los nombres del cliente"
                  onChange={(e) => setNombres(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Apellido Paterno"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={apellidoPaterno}
                  placeholder="Ingresa el apellido paterno"
                  onChange={(e) => setApellidoPaterno(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Apellido Materno"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={apellidoMaterno}
                  placeholder="Ingresa el apellido materno"
                  onChange={(e) => setApellidoMaterno(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Sexo"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={sexo}
                  onSelect={(e) => setSexo(e)}
                  placeholder="Select una Categoria"
                >
                  <Option value="FEMENINO">FEMENINO</Option>
                  <Option value="MASCULINO">MASCULINO</Option>
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
                label="Fecha de nacimiento"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <DatePicker
                  value={
                    fechaNacimiento !== ""
                      ? dayjs(fechaNacimiento, "YYYY-MM-DD")
                      : ""
                  }
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) =>
                    setFechaNacimiento(dateString)
                  }
                />
              </Form.Item>
              <Form.Item
                label="Edad"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  placeholder="Ingrese la edad del cliente"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="WhatsApp"
                rules={[
                  {
                    pattern: new RegExp(
                      /^[+]{1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/./0-9]*$/g
                    ),
                    message:
                      "Please add country code and check the number carefully",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Ingresa el numero de whatsapp con codigo de pais"
                  value={whats}
                  onChange={(e) => setWhats(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                rules={[
                  {
                    email: true,
                    required: true,
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input
                  placeholder="Ingresa email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </Content>
  );
}

export default ListaClientes;
