/* src/App.js */
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// antd
import { Spin } from "antd";
// fin de antd

// amplify
import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import AuthContextProvider from "./contexts/AuthContext";
import AppRoutes from "./AppRoutes/AppRoutes";
Amplify.configure(awsExports);
// fin de amlify

const App = () => {
  const [authUser, setAuthUser] = useState("");
  const sub = authUser?.attributes?.sub;

  const navigate = useNavigate();

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };

  useEffect(() => {
    fetchUser();
    // registerHubListeners();
  }, []);

  if (!authUser) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin />
      </div>
    );
  }
  const SignOut = () => {
    Auth.signOut();
    navigate("/");
  };
  return (
    <AuthContextProvider>
      <AppRoutes signOut={SignOut} user={authUser} sub={sub} />
    </AuthContextProvider>
    // <>
    //   <p>User: </p>
    // </>
  );
};

export default withAuthenticator(App);
