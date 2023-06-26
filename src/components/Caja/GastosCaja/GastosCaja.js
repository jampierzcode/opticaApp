import { Button, Form, Input, Modal, Table, message } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import React, { useContext, useEffect } from "react";
import { gASTOSByOpticaID, listGASTOS } from "../../../graphql/queries";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import { useState } from "react";
import { CajaContext } from "../../../contexts/CajaContext";
import TextArea from "antd/es/input/TextArea";
import { createGASTOS } from "../../../graphql/mutations";

const GastosCaja = () => {
  // const [gastos, setGastos] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [isModalGastos, setIsModalGastos] = useState(false);
  // campos de Form Crear Gasto
  const [montoGasto, setMontoGasto] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  //

  const { nowTurno, verificarCajaAbierta } = useContext(CajaContext);

  const { labId, gerenteId } = useGerenteContext();
  console.log(labId);

  const columns = [
    {
      title: "Concepto",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "MontoGasto",
      dataIndex: "montoGasto",
      key: "montoGasto",
      render: (text) => {
        return <p>S/{Math.round((Number(text) * 100) / 100).toFixed(2)}</p>;
      },
    },
  ];

  const fecthGastos = async () => {
    try {
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listGASTOS));
        console.log(result);
        const listGastos = result?.data?.listGASTOS?.items;
        console.log(listGastos);
        // setGastos(listGastos);
        setDataSource(listGastos);
      } else {
        const result = await API.graphql(
          graphqlOperation(gASTOSByOpticaID, { opticaID: labId })
        );
        console.log(result);
        const listGastos = result?.data?.gASTOSByOpticaID?.items;
        console.log(listGastos);
        // setGastos(listGastos);
        setDataSource(listGastos);
      }
    } catch (error) {
      message.error("No se pudo extraer los gastos, contacta a administrador");
    }
  };
  useEffect(() => {
    fecthGastos();
    // eslint-disable-next-line
  }, [labId]);

  const handlePermision = async () => {
    const result = await verificarCajaAbierta(gerenteId);
    if (result) {
      setIsModalGastos(true);
    } else {
      message.warning("No abierto ningun turno de caja");
    }
  };

  const crearGasto = async () => {
    try {
      const newGasto = {
        montoGasto,
        descripcion,
        opticaID: labId,
        turnoID: nowTurno.id,
      };
      await API.graphql(graphqlOperation(createGASTOS, { input: newGasto }));
      message.success("Se registro el gasto de esta caja");
      setIsModalGastos(false);
      setDescripcion(null);
      setMontoGasto(null);
      fecthGastos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Gastos</h1>
      <Button onClick={() => handlePermision()} type="primary">
        + Crear
      </Button>
      <Modal
        title="Registrar Gasto"
        open={isModalGastos}
        okText="Registar Gasto"
        onOk={() => crearGasto()}
        onCancel={() => setIsModalGastos(false)}
      >
        <Form layout="vertical">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              margin: "20px 0px",
            }}
          >
            <Form.Item label="Monto de Gasto">
              <Input
                value={montoGasto}
                onChange={(e) => setMontoGasto(e.target.value)}
                placeholder="Ingresa el monto del gasto"
              />
            </Form.Item>
            <Form.Item label="Descripcion de Gasto">
              <TextArea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ingresa el monto del gasto"
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
      <Table
        rowClassName="editable-row"
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default GastosCaja;
