import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useAuthContext } from "../../contexts/AuthContext";
const { Header } = Layout;

function HeaderLayoutSuperAdmin({ collapsed, toggle, signOut }) {
  const authContext = useAuthContext();
  const items = [
    {
      label: authContext?.authEmail,
      key: "SubMenu",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Session",
          children: [
            {
              label: "Cerrar Sesion",
              onClick: signOut,
              key: "setting:1",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Header
      className="headerAdmin"
      style={{
        padding: "0px 30px",
        background: "#ececec",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger hamburguesaMenu",
        onClick: toggle,
      })}
      <Menu
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          background: "transparent",
        }}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {/* <Menu mode={"horizontal"}>
        <Menu.SubMenu
          title={
            <>
              <Avatar icon={<UserOutlined />} />
              <span className="username">Super</span>
            </>
          }
        >
          <Menu.ItemGroup>
            <h3>{authContext?.userName}</h3>
            <p>
              <b>{authContext?.authEmail}</b>
            </p>
            <p>{authContext?.usuario?.username}</p>
          </Menu.ItemGroup>
          <Menu.Item onClick={signOut}>
            <LogoutOutlined /> Logout
          </Menu.Item>
        </Menu.SubMenu>
      </Menu> */}
    </Header>
  );
}

export default HeaderLayoutSuperAdmin;
