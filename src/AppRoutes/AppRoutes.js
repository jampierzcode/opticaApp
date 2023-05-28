import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../modules/Home/Home";
import SuperAdmin from "../modules/SuperAdmin/SuperAdmin";
import Gerente from "../modules/Gerente/Gerente";
import Clientes from "../modules/Clientes/Clientes";
import VendedorMostrador from "../modules/VendedorMostrador/VendedorMostrador";

function AppRoutes({ signOut, user, sub }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home signOut={signOut} user={user} sub={sub} />}
      />
      <Route
        path="/superadmin"
        element={<SuperAdmin signOut={signOut} user={user} sub={sub} />}
      />
      <Route
        path="/gerente"
        element={<Gerente signOut={signOut} user={user} sub={sub} />}
      />
      <Route
        path="/clientes"
        element={<Clientes signOut={signOut} user={user} sub={sub} />}
      />
      <Route
        path="/vendedormostrador"
        element={<VendedorMostrador signOut={signOut} user={user} sub={sub} />}
      />

      {/* Ruta blog */}
      {/* <Route path="admin/blog/:id" element={<EditarBlog />} /> */}

      {/* Ruta paciente */}
      {/* <Route path="/admin/paciente/:id" element={<EditarPaciente />} /> */}

      {/* Ruta orden */}
      {/* <Route path="admin/orden/:id" element={<EditarOrden />} /> */}
    </Routes>
  );
}

export default AppRoutes;
