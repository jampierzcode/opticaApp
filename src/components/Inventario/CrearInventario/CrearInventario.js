import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Input, Select, message } from "antd";
// import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
// import type { FormInstance } from "antd/es/form";

// amplify API
import { Storage, API, graphqlOperation } from "aws-amplify";
// import * as mutations from "../../../graphql/mutations";
import { MenuContext } from "../../../contexts/MenuContext";
import { v4 as uuidv4 } from "uuid";
import config from "../../../aws-exports";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import GROUPS from "../../../constants/groups";
import { listOPTICAS } from "../../../graphql/queries";
import LaboratorioSelector from "../../RoleBased/LaboratorioSelector";
import { createINVENTARIO } from "../../../graphql/mutations";
const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Option } = Select;

function CrearInventario() {
  // usesate url y key
  const { groupName } = useAuthContext();

  const { cambiarComponent } = useContext(MenuContext);
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [color, setColor] = useState("");
  const [tipoEstructura, setTipoEstructura] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const [opticas, setOpticas] = useState([]);

  // optica id
  const { labId } = useGerenteContext();

  useEffect(() => {
    const searchOpticas = async () => {
      if (groupName !== GROUPS.SUPER_ADMIN) {
        setOpticaID(labId);
      } else {
        try {
          const result = await API.graphql(graphqlOperation(listOPTICAS));
          setOpticas(result.data.listOPTICAS.items);
        } catch (error) {
          console.log(error);
        }
      }
    };
    searchOpticas();
  }, [groupName, labId]);

  const onFinish = async () => {
    try {
      const newProducto = {
        opticaID,
        categoria,
        nombreProducto,
        proveedor,
        costo,
        precioVenta,
        color,
        tipoEstructura,
        urlImagen,
        tipoMaterial,
      };
      const result = await API.graphql(
        graphqlOperation(createINVENTARIO, { input: newProducto })
      );
      console.log(result);
      message.success("El producto se ha creado correctamente");
      cambiarComponent({ key: "11" });
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
  const handleImage = async (e) => {
    e.preventDefault();
    console.log(e);
    const file = e.target.files[0];
    if (!file) {
      console.log(undefined);
      // Manejar el caso en que no se haya seleccionado ningún archivo
      return;
    }
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const keys = `images/${uuidv4()}${name}.${extension}`;
    const urls = `https://${bucket}.s3.${region}.amazonaws.com/public/${keys}`;
    console.log(keys, file, file.type);
    console.log(urls);

    try {
      const image1 = await Storage.put(keys, file, {
        level: "public",
        contentType: file.type,
      });
      console.log(image1);
      // const image1 = await Storage.get(keys, { level: "public" });
      setUrlImagen(urls);
      console.log("archivo guardado");
      message.success("Imagen cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
  };
  return (
    <div>
      <h1>CREAR PRODUCTO</h1>
      <Form layout="vertical" name="crearLente" onFinish={onFinish}>
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Nombre Producto"
            name="nombreProducto"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombreProducto}
              placeholder="Ingresa el nombre del producto"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Categoria"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select
              //   defaultValue={categoria}
              onSelect={(e) => setCategoria(e)}
              placeholder="Select una Categoria"
            >
              <Option value="DAMA">DAMA</Option>
              <Option value="CABALLERO">CABALLERO</Option>
              <Option value="BOY">BOY</Option>
            </Select>
          </Form.Item>
          {opticas.length > 0 && (
            <LaboratorioSelector
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
              placeholder="Ingrese el nombre del proveedor"
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Costo"
            name="costo"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingresa el costo del producto"
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
            name="precioVenta"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingresa el precio de venta"
              value={precioVenta}
              onChange={(e) => {
                if (e.target.value === "") {
                  setPrecioVenta(0);
                } else {
                  setPrecioVenta(Number(e.target.value));
                }
              }}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingresa el color del producto"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Cod Armazon"
            name="tipoEstructura"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingresa el tipo de estructura"
              value={tipoEstructura}
              onChange={(e) => setTipoEstructura(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Imagen"
            name="urlImagen"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input type="file" accept="jpg" onChange={(e) => handleImage(e)} />
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
            name="tipoMaterial"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              placeholder="Ingresa el tipo de material"
              value={tipoMaterial}
              onChange={(e) => setTipoMaterial(e.target.value)}
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

export default CrearInventario;
