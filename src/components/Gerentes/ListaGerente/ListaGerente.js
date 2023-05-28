import { React, useState, useEffect } from "react";
// ant desinng
import {
  Form,
  // message,
  Input,
  Button,
  Select,
  Tag,
  Table,
  Modal,
  Layout,
  Popconfirm,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify";
// import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import Confirm from "../../RoleBased/Confirm";
import GROUPS from "../../../constants/groups";
// import { MenuContext } from "../../../contexts/MenuContext";
// uso el contexto del auth
// import { useAuthContext } from "../../../contexts/AuthContext";
// import { checkIfExists } from "../../../functions/user/checkIfExists";
// import { signUp } from "../../../functions/user/signUp";
// import GROUPS from "../../../constants/groups";

const { Content } = Layout;
const { Option } = Select;

function ListaGerente() {
  const [gerentes, setGerentes] = useState([]);
  // usestate de modal
  const [opticas, setOpticas] = useState([]);
  const [opticaID, setOpticaID] = useState("");
  const [nombres, setNombres] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [selectedRecord, setSelectedRecord] = useState("");
  // const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // modal close open
  const [isEditing, setIsEditing] = useState(false);

  const fetchGerentes = async () => {
    const result = await API.graphql(graphqlOperation(queries.listGERENTES));
    setGerentes(result?.data?.listGERENTES?.items);
  };
  useEffect(() => {
    fetchGerentes();
    fetchOpticas();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    fetchGerentes();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchOpticas = async () => {
    const result = await API.graphql(graphqlOperation(queries.listOPTICAS));
    setOpticas(result.data.listOPTICAS.items);
  };
  const fetchOpticaID = (id_optica) => {
    const result = opticas.find((element) => element.id === id_optica);
    return result;
  };
  const columns = [
    {
      title: "Nombres",
      dataIndex: "nombres",
      key: "nombres",
    },
    {
      title: "Optica",
      key: "opticaID",
      dataIndex: "opticaID",
      render: (text, record) => {
        if (opticas.length > 0) {
          const optica = fetchOpticaID(record?.opticaID);
          return <Tag color="green">{optica.nombre}</Tag>;
        } else {
          return <p>Cargando</p>;
        }
      },
      // filters: searchcategorias(),
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.categoria.startsWith(value),
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "phoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Creado por",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Confirmed",
      dataIndex: "confirmed",
      key: "confirmed",
      render: (text, record) => {
        if (text === false) {
          return <Tag color="red">No confirmado</Tag>;
        } else {
          return <Tag color="green">Confirmado</Tag>;
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
            {!record.confirmed && (
              <Button onClick={() => showModal(record)} type="primary">
                Confirm
              </Button>
            )}
            <EditOutlined
              type="link"
              onClick={() => {
                // edithandle(record);
              }}
            />
            <Popconfirm
              title="Eliminar Lente"
              description="¿Esta seguro de eliminar el lente?"
              // onConfirm={() => deletehandle()}
              okText="Si"
              cancelText="No"
            >
              <DeleteOutlined
                // onClick={() => changeDelete(record)}
                style={{ color: "red", marginLeft: "15px" }}
              />{" "}
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const onFinish = () => {
    console.log("finish");
  };

  return (
    <Content>
      <div>
        <h1>NUESTROS GERENTES</h1>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={gerentes}
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
                label="Nombres"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Optica"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={opticaID}
                  onSelect={(e) => setOpticaID(e)}
                  placeholder="Select una Optica"
                >
                  {opticas.map((optica) => {
                    return (
                      <Option key={optica.id} value={optica.id}>
                        {optica.nombre}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Email"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="phoneNumber"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={phoneNumber}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setPhoneNumber(0);
                    } else {
                      setPhoneNumber(e.target.value);
                    }
                  }}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
        <Confirm
          selectedRecord={selectedRecord}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          group={GROUPS.GERENTE}
        />
        {/* ) : null} */}
      </div>
    </Content>
  );
}

export default ListaGerente;
