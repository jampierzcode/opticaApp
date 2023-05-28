import { React } from "react";
import GROUPS from "../../constants/groups";
import { Navigate } from "react-router-dom";
import { getGroupName } from "../../contexts/AuthContext";
import LayoutGerente from "./LayoutGerente";

function Gerente({ signOut, user, sub }) {
  if (
    getGroupName(
      user?.signInUserSession?.idToken?.payload["cognito:groups"][0]
    ) !== GROUPS.GERENTE
  ) {
    return <Navigate to="/" />;
  }
  return <LayoutGerente user={user} sub={sub} signOut={signOut} />;
}

export default Gerente;
