import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Tag,
  message,
} from "antd";
import React, { useEffect, useState } from "react";

import { FiInbox } from "react-icons/fi";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import { API, graphqlOperation } from "aws-amplify";
import {
  cajasByOpticaID,
  deudasByTurnoID,
  gASTOSByTurnoID,
  listCajas,
  listOPTICAS,
  transaccionesByTurnoID,
  turnosByCajaID,
} from "../../../graphql/queries";
import TicketCaja from "../CrearCaja/TicketCaja";
import { PDFViewer } from "@react-pdf/renderer";
import logo from "../../../assets/logohilmora.png";
import { createCaja } from "../../../graphql/mutations";
const ListaCaja = () => {
  const [cajas, setCajas] = useState([]);
  const [opticas, setOpticas] = useState([]);
  const [isModalHistory, setIsModalHistory] = useState(false);
  const [historyTurnos, setHistoryTurnos] = useState([]);
  const [dataTurnos, setDataTurnos] = useState([]);
  const [isModalReport, setIsModalReport] = useState(false);
  const [gastoEfectivo, setGastoEfectivo] = useState(0);
  const [adeudos, setAdeudos] = useState(0);
  const [montoInicial, setMontoInicial] = useState(0);
  const [fechaApertura, setFechaApertura] = useState("");
  const [ventas, setVentas] = useState(0);
  const [efectivoTotal, setEfectivoTotal] = useState(0);
  const [transferenciasTotal, setTransferenciasTotal] = useState(0);
  const [tarjetaTotal, setTarjetaTotal] = useState(0);
  // state de creacion de caja
  const [nombre, setNombre] = useState("");
  const [isModalCreated, setIsModalCreated] = useState(false);
  const [opticaID, setOpticaID] = useState("");

  // optica id
  const { labId } = useGerenteContext();

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
      render: (_, record) => {
        return (
          <>
            <FiInbox style={{ fontSize: "30px", color: "#1677ff" }} />
            <p>{record?.nombre}</p>
          </>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <Button onClick={() => viewReportHistory(record)}>
              Ver Historial
            </Button>
          </>
        );
      },
    },
  ];
  const columnsTurnos = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (_, record) => {
        return (
          <>
            <p>{record?.id}</p>
          </>
        );
      },
    },

    {
      title: "Fecha Apertura",
      dataIndex: "fechaApertura",
      key: "fechaApertura",
    },
    {
      title: "Monto Inicial",
      dataIndex: "montoInicial",
      key: "montoInicial",
      render: (_, record) => {
        return (
          <p>${Math.round((record?.montoInicial * 100) / 100).toFixed(2)}</p>
        );
      },
    },
    {
      title: "Fecha Cierre",
      dataIndex: "fechaCierre",
      key: "fechaCierre",
    },
    {
      title: "Monto Cierre",
      dataIndex: "montoCierre",
      key: "montoCierre",
      render: (_, record) => {
        return (
          <p>${Math.round((record?.montoCierre * 100) / 100).toFixed(2)}</p>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "estado",
      key: "estado",
      render: (_, record) => {
        switch (record?.estado) {
          case "Cerrado":
            return <Tag color="red">Cerrado</Tag>;

          case "Abierto":
            return <Tag color="green">Abierto</Tag>;
          default:
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
            <Button onClick={() => searchContabilidad(record)}>
              Ver Reporte
            </Button>
          </>
        );
      },
    },
  ];
  const searchContabilidad = (record) => {
    setMontoInicial(record?.montoInicial);
    revisarVentas(record?.id);
    revisarDeudas(record?.id);
    revisarGastos(record?.id);
    setIsModalReport(true);
  };

  const revisarVentas = async (turnoId) => {
    try {
      const result = await API.graphql(
        graphqlOperation(transaccionesByTurnoID, { turnoID: turnoId })
      );
      const transacciones = result.data.transaccionesByTurnoID.items;
      console.log(transacciones);
      let monto = 0;
      let efectivo = 0;
      let tranferencia = 0;
      let tarjeta = 0;
      if (transacciones.length > 0) {
        for (const trans of transacciones) {
          switch (trans.metodoPago) {
            case "EFECTIVO":
              efectivo = efectivo + Number(trans.monto);
              setEfectivoTotal(efectivo);
              break;
            case "TRANSFERENCIA":
              tranferencia = tranferencia + Number(trans.monto);
              setTransferenciasTotal(tranferencia);
              break;
            case "TARJETA_CREDITO":
              tarjeta = tarjeta + Number(trans.monto);
              setTarjetaTotal(tarjeta);
              break;

            default:
              break;
          }
          monto = monto + Number(trans.monto);
          setVentas(monto);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const revisarDeudas = async (turnoId) => {
    try {
      const result = await API.graphql(
        graphqlOperation(deudasByTurnoID, { turnoID: turnoId })
      );
      console.log(result);
      const deudas = result.data.deudasByTurnoID.items;
      console.log(deudas);
      let adeudo = 0;
      if (deudas.length > 0) {
        for (const deuda of deudas) {
          adeudo = adeudo + Number(deuda.montoDeuda);
          setAdeudos(adeudo);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const revisarGastos = async (turnoId) => {
    console.log(turnoId);
    try {
      const result = await API.graphql(
        graphqlOperation(gASTOSByTurnoID, { turnoID: turnoId })
      );
      console.log(result);
      const gastos = result?.data?.gASTOSByTurnoID?.items;
      if (gastos.length > 0) {
        let montoGasto = 0;
        for (const gasto of gastos) {
          montoGasto = montoGasto + gasto.montoGasto;
          setGastoEfectivo(montoGasto);
        }
      }
    } catch (error) {
      message.error("No se cargaron los gastos de la caja");
    }
  };

  const filterData = (e) => {
    console.log(e);
    const result = historyTurnos.filter((elemento) => {
      let fechaApertura = elemento.fechaApertura.split(" ")[0];
      return fechaApertura.includes(e);
    });
    setDataTurnos(result);
  };

  const viewReportHistory = async (record) => {
    const idCaja = record?.id;
    console.log(idCaja);
    setIsModalHistory(true);
    try {
      const result = await API.graphql(
        graphqlOperation(turnosByCajaID, { cajaID: idCaja })
      );
      const turnos = result?.data?.turnosByCajaID.items;
      console.log(turnos);
      setHistoryTurnos(turnos);
      setDataTurnos(turnos);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOpticas = async () => {
    try {
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listOPTICAS));
        const opticasList = result?.data?.listOPTICAS?.items;
        setOpticas(opticasList);
      } else {
        setOpticaID(labId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOpticas();
  }, [labId]);

  const activeCreatedCaja = async () => {
    setIsModalCreated(true);
  };
  const onCreateCaja = async () => {
    try {
      if (opticaID !== "") {
        const newCaja = {
          nombre: nombre,
          opticaID: opticaID,
        };
        console.log(newCaja);
        await API.graphql(graphqlOperation(createCaja, { input: newCaja }));
        message.success("Se creo exitosamente la caja");
        fetchCajas();
        setIsModalCreated(false);
        setNombre("");
      } else {
        message.warning("Debes seleccionar una optica para crear la caja");
      }
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
      console.log(error);
    }
  };

  const fetchCajas = async () => {
    try {
      let cajas;
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listCajas));
        cajas = result.data.listCajas.items;
      } else {
        const result = await API.graphql(
          graphqlOperation(cajasByOpticaID, { opticaID: labId })
        );
        cajas = result.data.cajasByOpticaID.items;
      }
      setCajas(cajas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCajas();
    // eslint-disable-next-line
  }, [labId]);

  return (
    <div>
      <Button onClick={activeCreatedCaja} type="primary">
        Crear
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <h1>Lista Cajas</h1>
      </div>
      <Table
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={cajas}
        columns={columns}
        rowClassName="editable-row"
      />
      <Modal
        title="Reporte de caja"
        open={isModalReport}
        onCancel={() => setIsModalReport(false)}
      >
        <PDFViewer id="pdf-ticket" style={{ width: "100%", height: "50vh" }}>
          <TicketCaja
            logoSrc={logo}
            tarjetaTotal={tarjetaTotal}
            transferenciasTotal={transferenciasTotal}
            efectivoTotal={efectivoTotal}
            ventas={ventas}
            gastoEfectivo={gastoEfectivo}
            adeudos={adeudos}
            montoInicial={montoInicial}
          />
        </PDFViewer>
      </Modal>
      <Modal
        style={{ width: "100%", minWidth: "700px" }}
        title="Historial de Caja"
        onCancel={() => setIsModalHistory(false)}
        open={isModalHistory}
        footer={null}
      >
        <Form>
          <Form.Item label="Fecha de entrega">
            <DatePicker
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
              onChange={(date, dateString) => filterData(dateString)}
            />
          </Form.Item>
          <Table
            scroll={{ x: 400 }}
            rowKey={(record) => record.id}
            dataSource={dataTurnos}
            columns={columnsTurnos}
            rowClassName="editable-row"
          />
        </Form>
      </Modal>
      <Modal
        title="Crear Caja"
        open={isModalCreated}
        onCancel={() => setIsModalCreated(false)}
        onOk={onCreateCaja}
      >
        <Form layout="vertical">
          <Form.Item label="Nombre Caja">
            <Input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa el nombre de la caja"
            />
          </Form.Item>
          {labId === "" ? (
            <>
              <Form.Item label="Optica">
                <Select>
                  {opticas.map((optica) => {
                    return (
                      <>
                        <Select.Option value={optica.id}>
                          {optica.nombre}
                        </Select.Option>
                      </>
                    );
                  })}
                </Select>
              </Form.Item>
            </>
          ) : null}
        </Form>
      </Modal>
    </div>
  );
};

export default ListaCaja;
