import React from "react";
import { Layout } from "antd";
import CrearInventario from "../../components/Inventario/CrearInventario/CrearInventario";
import ListaInventario from "../../components/Inventario/LIstaInventario/ListaInventario";
import CrearVendedor from "../../components/Vendedores/CrearVendedor/CrearVendedor";
import ListaVendedor from "../../components/Vendedores/ListaVendedor/ListaVendedor";
import CrearCliente from "../../components/Clientes/CrearCliente/CrearCliente";
import ListaClientes from "../../components/Clientes/ListaClientes/ListaClientes";
import CrearOrden from "../../components/Ordenes/CrearOrden/CrearOrden";
import ListaOrdenes from "../../components/Ordenes/ListaOrdenes/ListaOrdenes";
import { CajaProvider } from "../../contexts/CajaContext";
import CrearCaja from "../../components/Caja/CrearCaja/CrearCaja";
import ListaCaja from "../../components/Caja/ListaCaja/ListaCaja";
import GastosCaja from "../../components/Caja/GastosCaja/GastosCaja";

const { Content } = Layout;

function ContentLayoutGerente({ current }) {
  return (
    <Content style={{ padding: "30px", background: "#fff" }}>
      {current === "10" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearInventario />
        </div>
      ) : current === "11" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaInventario />
        </div>
      ) : current === "8" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CajaProvider>
            <CrearCaja />
          </CajaProvider>
        </div>
      ) : current === "9" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaCaja />
        </div>
      ) : current === "22" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CajaProvider>
            <GastosCaja />
          </CajaProvider>
        </div>
      ) : current === "16" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearVendedor />
        </div>
      ) : current === "17" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaVendedor />
        </div>
      ) : current === "18" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearCliente />
        </div>
      ) : current === "19" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaClientes />
        </div>
      ) : current === "20" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CajaProvider>
            <CrearOrden />
          </CajaProvider>
        </div>
      ) : current === "21" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CajaProvider>
            <ListaOrdenes />
          </CajaProvider>
        </div>
      ) : (
                              <div style={{}}>
                              Bienvenido al sistema de Hilmor Óptica</div>
      )}
    </Content>
  );
}

export default ContentLayoutGerente;
