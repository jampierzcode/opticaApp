import { React } from "react";
import LayoutSuperAdmin from "./LayoutSuperAdmin";
import GROUPS from "../../constants/groups";
import { Navigate } from "react-router-dom";
import { getGroupName } from "../../contexts/AuthContext";

function SuperAdmin({ signOut, user, sub }) {
  if (
    getGroupName(
      user?.signInUserSession?.idToken?.payload["cognito:groups"][0]
    ) !== GROUPS.SUPER_ADMIN
  ) {
    return <Navigate to="/" />;
  }
  return <LayoutSuperAdmin user={user} sub={sub} signOut={signOut} />;
}

export default SuperAdmin;
