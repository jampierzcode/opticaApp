import {
  UnorderedListOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  AppstoreOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const ItemsRoutes = [
  getItem("Inventario", "sub6", <AppstoreOutlined />, [
    getItem("Crear Producto", "10", <PlusCircleOutlined />),
    getItem("Lista Productos", "11", <EyeOutlined />),
  ]),
  getItem("Ordenes", "sub11", <AppstoreOutlined />, [
    getItem("nueva Orden", "20", <PlusCircleOutlined />),
    getItem("Lista Ordenes", "21", <EyeOutlined />),
  ]),
  getItem("Optica", "sub7", <AppstoreOutlined />, [
    getItem("Crear Optica", "12", <PlusCircleOutlined />),
    getItem("Lista Optica", "13", <UnorderedListOutlined />),
  ]),
  getItem("Gerente", "sub8", <AppstoreOutlined />, [
    getItem("Crear Gerente", "14", <PlusCircleOutlined />),
    getItem("Lista Gerente", "15", <UserAddOutlined />),
  ]),
  getItem("Vendedor", "sub9", <AppstoreOutlined />, [
    getItem("Crear Vendedor", "16", <PlusCircleOutlined />),
    getItem("Lista Vendedor", "17", <UserAddOutlined />),
  ]),
  getItem("Clientes", "sub10", <AppstoreOutlined />, [
    getItem("Crear Clientes", "18", <PlusCircleOutlined />),
    getItem("Lista Clientes", "19", <UserAddOutlined />),
  ]),
];

export default ItemsRoutes;
