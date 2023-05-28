import React, { useState, useContext } from "react";
import { Button, Form, Input, message } from "antd";

import { DataStore } from "aws-amplify";

import { useAuthContext } from "../../../contexts/AuthContext";
import { OPTICA } from "../../../models";
import { MenuContext } from "../../../contexts/MenuContext";
function CrearOptica() {
  const { cambiarComponent } = useContext(MenuContext);
  const authContext = useAuthContext();
  const [nombreOptica, setNombreOptica] = useState("");

  const onFinish = async () => {
    if (nombreOptica !== "") {
      try {
        const result = await DataStore.save(
          new OPTICA({
            nombre: nombreOptica,
            createdBy: authContext?.authEmail,
          })
        );
        console.log(result);
        message.success("La optica se ha creado correctamente");
        cambiarComponent({ key: "13" });
        setNombreOptica("");
      } catch (error) {
        console.log(error);
        message.error("Hubo un error contacta al administrador");
      }
    } else {
      message.warning(
        "Te falta agregar campo del nombre para continuar con la creacion"
      );
    }
  };

  return (
    <>
      <h1>CREAR OPTICA</h1>
      <Form onFinish={onFinish} layout="vertical" name="crearInventario">
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Nombre"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombreOptica}
              onChange={(e) => setNombreOptica(e.target.value)}
            />
          </Form.Item>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button title="Save" htmlType="submit" type="primary">
            Guardar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CrearOptica;
