import { API, graphqlOperation } from "aws-amplify";
import { React, useState, useEffect, useContext } from "react";
import { Input, Form, Button, Select, DatePicker, message } from "antd";

import { MenuContext } from "../../../contexts/MenuContext";
import { createCLIENTES } from "../../../graphql/mutations";
import { listOPTICAS } from "../../../graphql/queries";

const { Option } = Select;

function CrearCliente() {
  const { cambiarComponent } = useContext(MenuContext);

  const [opticas, setOpticas] = useState([]);
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [whats, setWhats] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [opticaID, setOpticaID] = useState("");

  const fetchOpticas = async () => {
    const result = await API.graphql(graphqlOperation(listOPTICAS));
    const listOpticas = result?.data?.listOPTICAS?.items;
    setOpticas(listOpticas);
  };
  useEffect(() => {
    fetchOpticas();
  }, []);

  const onFinish = async () => {
    console.log({
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      sexo,
      email,
      fechaNacimiento,
      whats,
      edad,
      opticaID,
    });
    try {
      const newClientes = {
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        sexo,
        email,
        fechaNacimiento,
        whats,
        edad,
        opticaID,
      };
      await API.graphql(
        graphqlOperation(createCLIENTES, { input: newClientes })
      );
      message.success("Se creo correctamente el cliente");
      cambiarComponent({ key: "19" });
    } catch (error) {
      console.log(error);
      message.error("Ocurrio un error, consulta al administrador");
    }

    console.log("finishi");
  };

  return (
    <div>
      <h1>CREAR CLIENTE</h1>
      <Form layout="vertical" name="crearCliente" onFinish={onFinish}>
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Nombres"
            name="nombres"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombres}
              placeholder="Ingresa los nombres del cliente"
              onChange={(e) => setNombres(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="apellidoPaterno"
            label="Apellido Paterno"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={apellidoPaterno}
              placeholder="Ingresa el apellido paterno"
              onChange={(e) => setApellidoPaterno(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="apellidoMaterno"
            label="Apellido Materno"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={apellidoMaterno}
              placeholder="Ingresa el apellido materno"
              onChange={(e) => setApellidoMaterno(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="sexo"
            label="Sexo"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select
              //   defaultValue={categoria}
              onSelect={(e) => setSexo(e)}
              placeholder="Select una Categoria"
            >
              <Option value="FEMENINO">FEMENINO</Option>
              <Option value="MASCULINO">MASCULINO</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="optica"
            label="Optica"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select
              //   defaultValue={categoria}
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
            label="Fecha de nacimiento"
            name="fechaNacimiento"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <DatePicker
              onChange={(date, dateString) => setFechaNacimiento(dateString)}
            />
          </Form.Item>
          <Form.Item
            label="Edad"
            name="edad"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingrese la edad del cliente"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="WhatsApp"
            name="WHATSAPP"
            rules={[
              {
                pattern: new RegExp(
                  /^[+]{1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/./0-9]*$/g
                ),
                message:
                  "Please add country code and check the number carefully",
                // required: true,
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
            name="email"
            rules={[
              {
                email: true,
                // required: true,
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
        <div style={{ marginTop: 10 }}>
          <Button title="Save" htmlType="submit" type="primary">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CrearCliente;
