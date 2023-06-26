import {
  PlusCircleOutlined,
  EyeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { IoBagHandle, IoLockOpen, IoCart, IoClipboard } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
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
  getItem("Cajas", "sub5", <IoBagHandle />, [
    getItem("Abrir caja", "8", <IoLockOpen />),
    getItem("Lista Cajas", "9", <EyeOutlined />),
    getItem("Gastos/Salidas", "22", <AiOutlineDollar />),
  ]),
  getItem("Inventario", "sub6", <IoCart />, [
    getItem("Crear Producto", "10", <PlusCircleOutlined />),
    getItem("Lista Productos", "11", <EyeOutlined />),
  ]),
  getItem("Ordenes", "sub11", <IoClipboard />, [
    getItem("nueva Orden", "20", <PlusCircleOutlined />),
    getItem("Lista Ordenes", "21", <EyeOutlined />),
  ]),
  getItem("Vendedor", "sub9", <HiUserGroup />, [
    getItem("Crear Vendedor", "16", <PlusCircleOutlined />),
    getItem("Lista Vendedor", "17", <UserAddOutlined />),
  ]),
  getItem("Clientes", "sub10", <FiUsers />, [
    getItem("Crear Clientes", "18", <PlusCircleOutlined />),
    getItem("Lista Clientes", "19", <UserAddOutlined />),
  ]),
];

export default ItemsRoutes;
