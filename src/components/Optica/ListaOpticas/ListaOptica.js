import { React, useState, useEffect } from "react";
import { Layout, Form, Input, Table, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import { DeleteOutlined } from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify";
import { listOPTICAS } from "../../../graphql/queries";
import { updateOPTICA } from "../../../graphql/mutations";
const { Content } = Layout;
function ListaOptica() {
  const [version, setVersion] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState("");
  const [nombreOptica, setNombreOptica] = useState("");

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
    setIsEditing(true);
  };
  const onFinish = async () => {
    try {
      const prod = {
        id: id,
        _version: version,
        nombre: nombreOptica,
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
          <>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
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
          </>
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
                gridTemplateColumns: "repeat(1, 1fr)",
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
            </div>
          </Form>
        </Modal>
        {/* ) : null} */}
      </div>
    </Content>
  );
}

export default ListaOptica;
