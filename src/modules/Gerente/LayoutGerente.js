import { React, useState, useEffect } from "react";
import logo from "../../assets/logohilmora.png";

import { Layout, Menu, message } from "antd";
import ItemsRoutes from "./ItemRoutes";
import HeaderLayoutSuperAdmin from "../SuperAdmin/HeaderLayoutSuperAdmin";
import { MenuContext } from "../../contexts/MenuContext";
import ContentLayoutGerente from "./ContentLayoutGerente";
import { GerenteContext } from "../../contexts/GerenteContext";
import { API, graphqlOperation } from "aws-amplify";
import { listGERENTES } from "../../graphql/queries";

const { Footer, Sider } = Layout;

function LayoutGerente({ user, signOut }) {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const [labId, setLabId] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const cambiarComponent = (e) => {
    setCurrent(e.key);
  };
  useEffect(() => {
    const getLabid = async () => {
      const result = await API.graphql(
        graphqlOperation(listGERENTES, {
          filter: { userName: { eq: user.userName } },
        })
      );
      const original = result?.data?.listGERENTES?.items[0];
      if (original?.opticaID) {
        setLabId(original?.opticaID);
      } else {
        message.error("No existe optica asignada para este usuario");
        signOut();
      }
    };
    getLabid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="50"
        style={{ minHeight: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img style={{ width: "80%" }} src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={current}
          onClick={cambiarComponent}
          items={ItemsRoutes}
        />
      </Sider>
      <Layout>
        <HeaderLayoutSuperAdmin
          collapsed={collapsed}
          toggle={toggle}
          signOut={signOut}
        />
        <MenuContext.Provider value={{ current, cambiarComponent }}>
          <GerenteContext.Provider value={{ labId }}>
            <ContentLayoutGerente current={current} />
          </GerenteContext.Provider>
        </MenuContext.Provider>
        <Footer style={{ textAlign: "center" }}>
          Todos los Derechos reservados ©2023 por Hilmora Optica
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutGerente;
