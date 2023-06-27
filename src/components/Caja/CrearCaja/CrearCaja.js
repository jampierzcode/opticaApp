import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Tag,
  Form,
  Input,
  message,
  Modal,
  Select,
  Popconfirm,
} from "antd";
import { FiDollarSign, FiShoppingBag, FiInbox, FiLock } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiFillCreditCard, AiFillDollarCircle } from "react-icons/ai";
import { CajaContext } from "../../../contexts/CajaContext";
import { API, graphqlOperation } from "aws-amplify";
import logo from "../../../assets/logohilmora.png";
import dayjs from "dayjs";
import {
  cajasByOpticaID,
  deudasByTurnoID,
  gASTOSByTurnoID,
  transaccionesByTurnoID,
} from "../../../graphql/queries";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import { createTurno, updateTurno } from "../../../graphql/mutations";
import TicketCaja from "./TicketCaja";
import { PDFViewer } from "@react-pdf/renderer";

const { Option } = Select;

const CrearCaja = () => {
  const { labId, gerenteId } = useGerenteContext();
  const [montoInicial, setMontoInicial] = useState(0);
  // metodos de pago
  const [ventas, setVentas] = useState(0);
  const [efectivoTotal, setEfectivoTotal] = useState(0);
  const [transferenciasTotal, setTransferenciasTotal] = useState(0);
  const [tarjetaTotal, setTarjetaTotal] = useState(0);
  const [gastoEfectivo, setGastoEfectivo] = useState(0);
  // fin de metodos de pago
  const [isModalReport, setIsModalReport] = useState(false);
  // adeudos
  const [adeudos, setAdeudos] = useState(0);
  // fin de adeudos

  const [cajas, setCajas] = useState([]);
  const [cajaID, setCajaID] = useState(null);

  const [verificandoCaja, setVerificandoCaja] = useState(true);
  const { cajaAbierta, nowTurno, setCajaAbierta, verificarCajaAbierta } =
    useContext(CajaContext);
  const [isModal, setIsModal] = useState(true);

  const revisarVentas = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(transaccionesByTurnoID, { turnoID: nowTurno.id })
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
    }
  };
  const revisarDeudas = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(deudasByTurnoID, { turnoID: nowTurno.id })
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
    }
  };

  const revisarGastos = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(gASTOSByTurnoID, { turnoID: nowTurno.id })
        );
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
    }
  };
  useEffect(() => {
    revisarGastos();
    // eslint-disable-next-line
  }, [labId]);

  const corteCaja = async () => {
    let fechaActual = dayjs().format("YYYY-MM-DD");
    try {
      const updateTurnos = {
        id: nowTurno.id,
        _version: nowTurno._version,
        montoCierre: Number(ventas) + nowTurno.montoInicial - gastoEfectivo,
        fechaCierre: fechaActual,
        estado: "Cerrado",
      };
      await API.graphql(graphqlOperation(updateTurno, { input: updateTurnos }));
      setVerificandoCaja(true);
      setCajaAbierta(false);
      setMontoInicial(0);
      verificarCaja();

      message.success("Se hizo corte de la caja correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta con administrador");
    }
  };

  useEffect(() => {
    revisarVentas();
    // eslint-disable-next-line
  }, [cajaAbierta, ventas]);
  useEffect(() => {
    revisarDeudas();
    // eslint-disable-next-line
  }, [cajaAbierta, adeudos]);
  const abrirCaja = async () => {
    let fechaApertura = dayjs().format("YYYY-MM-DD HH:mm:ss");
    try {
      let newCaja = {
        montoInicial: Number(montoInicial),
        fechaApertura,
        estado: "Abierto",
        usuario: gerenteId,
        cajaID,
      };
      console.log(newCaja);
      await API.graphql(graphqlOperation(createTurno, { input: newCaja }));
      message.success("Se aperturo la caja");
      verificarCajaAbierta(gerenteId);
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
  const fetchCajas = async () => {
    try {
      if (labId !== "") {
        const result = await API.graphql(
          graphqlOperation(cajasByOpticaID, { opticaID: labId })
        );
        const cajas = result?.data?.cajasByOpticaID?.items;
        setCajas(cajas);
      }
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
    }
  };
  useEffect(() => {
    fetchCajas();
    // eslint-disable-next-line
  }, [labId]);
  const verificarCaja = async () => {
    // Realizar la verificación del estado de la caja aquí
    // Reemplaza el siguiente código con tu lógica de verificación real
    try {
      const result = await verificarCajaAbierta(gerenteId); // Supongamos que esto es una función asincrónica
      if (result === false) {
        setVerificandoCaja(false); // Finaliza la verificación
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verificarCaja();
    // eslint-disable-next-line
  }, [gerenteId]);
  return (
    <div>
      {verificandoCaja ? (
        <p>Verificando cajas abiertas...</p>
      ) : cajaAbierta === false ? (
        <>
          <Modal
            open={isModal}
            onOk={abrirCaja}
            onCancel={() => setIsModal(false)}
            okText="Aperturar caja"
            title="Aperturar turno de caja"
          >
            <div
              style={{
                maxWidth: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: "10px",
              }}
            >
              <Form.Item style={{ width: "100%" }} label="Monto Inicial">
                <Input
                  value={montoInicial}
                  onChange={(e) => setMontoInicial(e.target.value)}
                  placeholder="Ingresa el monto inicial"
                />
              </Form.Item>
              <Form.Item
                style={{ width: "100%" }}
                label="Cajas"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  onSelect={(e) => setCajaID(e)}
                  placeholder="Select una Optica"
                >
                  {cajas.map((caja) => {
                    const turnosAbiertos = caja.Turnos.items.some(
                      (turno) => turno.estado === "Abierto"
                    );
                    const textoAdicional = turnosAbiertos
                      ? " - Caja abierta"
                      : "";
                    return (
                      <Option
                        key={caja.id}
                        value={caja.id}
                        disabled={turnosAbiertos}
                      >
                        {caja.nombre} {textoAdicional}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            title="Reporte de caja"
            open={isModalReport}
            onCancel={() => setIsModalReport(false)}
          >
            <PDFViewer
              id="pdf-ticket"
              style={{ width: "100%", height: "50vh" }}
            >
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
          <Col span={32} style={{ margin: "20px 0px" }}>
            <Card bordered={true}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <FiInbox style={{ fontSize: "30px", color: "#1677ff" }} />
                  <div>
                    <p>Caja : {nowTurno.id}</p>
                    <Tag color="green">Aperturado</Tag>
                    <p>
                      Responsable: <b> Gerente</b>
                    </p>
                    <p>
                      Apertura:{" "}
                      <b>
                        {" "}
                        {dayjs(nowTurno.fechaApertura).format(
                          "D [de] MMM [del] YYYY [a las] hh:mm:ss a"
                        )}
                      </b>
                    </p>
                  </div>
                </div>
                <div>
                  <Popconfirm
                    title="Corte de Caja"
                    description="¿Esta seguro de hacer corte de caja?"
                    onConfirm={() => corteCaja()}
                    okText="Si"
                    cancelText="No"
                  >
                    <Button
                      style={{
                        background: "#ff6016",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <FiLock /> Hacer corte de caja
                    </Button>
                  </Popconfirm>
                  <Button
                    onClick={() => setIsModalReport(true)}
                    style={{
                      background: "#1677ff",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <FaFileInvoiceDollar /> Ver reporte
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={false}>
                <p style={{ color: "#529f00", fontWeight: "bold" }}>
                  Saldo inicial
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      S/
                      {(
                        Math.round(Number(nowTurno.montoInicial) * 100) / 100
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div>
                    <FiDollarSign
                      style={{ fontSize: "30", color: "#529f00" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Card bordered={false}>
                  <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                    Total Ventas
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/{(Math.round(Number(ventas) * 100) / 100).toFixed(2)}
                      </h1>
                      <p>Resultado de montos reales pagados hasta el momento</p>
                    </div>
                    <div>
                      <FiShoppingBag
                        style={{ fontSize: "30", color: "#1677ff" }}
                      />
                    </div>
                  </div>
                </Card>
                <Card bordered={false}>
                  <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                    Total Efectivo
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(
                          Math.round(Number(efectivoTotal) * 100) / 100
                        ).toFixed(2)}
                      </h1>
                    </div>
                    <div>
                      <AiFillDollarCircle
                        style={{ fontSize: "30", color: "#1677ff" }}
                      />
                    </div>
                  </div>
                </Card>
                <Card bordered={false}>
                  <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                    Total Transferencias
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(
                          Math.round(Number(transferenciasTotal) * 100) / 100
                        ).toFixed(2)}
                      </h1>
                    </div>
                    <div>
                      <BiTransfer
                        style={{ fontSize: "30", color: "#1677ff" }}
                      />
                    </div>
                  </div>
                </Card>
                <Card bordered={false}>
                  <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                    Total Tarjeta
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(Math.round(Number(tarjetaTotal) * 100) / 100).toFixed(
                          2
                        )}
                      </h1>
                    </div>
                    <div>
                      <AiFillCreditCard
                        style={{ fontSize: "30", color: "#1677ff" }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Card bordered={false}>
                  <p style={{ color: "#ff1616", fontWeight: "bold" }}>
                    Adeudos en Caja
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/{(Math.round(Number(adeudos) * 100) / 100).toFixed(2)}
                      </h1>
                      <p>Resultado de adeudos de ordenes aceptadas</p>
                    </div>
                    <div>
                      <FiShoppingBag
                        style={{ fontSize: "30", color: "#ff1616" }}
                      />
                    </div>
                  </div>
                </Card>
                <Card bordered={false}>
                  <p style={{ color: "#ff1616", fontWeight: "bold" }}>
                    Gastos en Efectivo
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(
                          Math.round(Number(gastoEfectivo) * 100) / 100
                        ).toFixed(2)}
                      </h1>
                    </div>
                    <div>
                      <FiShoppingBag
                        style={{ fontSize: "30", color: "#ff1616" }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Card bordered={false}>
                  <p style={{ color: "#529f00", fontWeight: "bold" }}>
                    Total a rendir
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(
                          Math.round(
                            (Number(ventas) + Number(nowTurno.montoInicial)) *
                              100
                          ) / 100
                        ).toFixed(2)}
                      </h1>
                    </div>
                    <div>
                      <FiDollarSign
                        style={{ fontSize: "30", color: "#529f00" }}
                      />
                    </div>
                  </div>
                </Card>
                <Card bordered={false}>
                  <p style={{ color: "#529f00", fontWeight: "bold" }}>
                    Rendir en Efectivo
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h1>
                        S/
                        {(
                          Math.round(
                            (Number(efectivoTotal) +
                              Number(nowTurno.montoInicial) -
                              Number(gastoEfectivo)) *
                              100
                          ) / 100
                        ).toFixed(2)}
                      </h1>
                    </div>
                    <div>
                      <FiDollarSign
                        style={{ fontSize: "30", color: "#529f00" }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default CrearCaja;
