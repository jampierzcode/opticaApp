import { Button, Card } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import GROUPS from "../../constants/groups";
import { getGroupName } from "../../contexts/AuthContext";

function Home({ signOut, user, sub }) {
  const grupo_invitado =
    user?.signInUserSession?.idToken?.payload["cognito:groups"];
  if (grupo_invitado !== undefined) {
    switch (getGroupName(grupo_invitado[0])) {
      case GROUPS.SUPER_ADMIN:
        return <Navigate to="/superadmin" />;
      case GROUPS.GERENTE:
        return <Navigate to="/gerente" />;
      case GROUPS.VENDEDOR_MOSTRADOR:
        return <Navigate to="/vendedormostrador" />;
      default:
    }
  } else {
    console.log(grupo_invitado);
    return (
      <Card className="mt-2 mb-2">
        <h3>
          Hola {user?.attributes?.username} aun no tienes acceso o permisos para
          acceder a esta ruta. Pide a tu administrador que te asigne un rol y
          luego regresa...
        </h3>
        <p>
          Es necesario cerrar sesion, una vez que se te haya otorgado los
          permisos necesarios, solamente vuelve a iniciar la sesión.
        </p>

        <Button onClick={signOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Card>
    );
  }
}

export default Home;
