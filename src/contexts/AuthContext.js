import { Auth } from "aws-amplify";
import { createContext, useState, useEffect, useContext } from "react";
import GROUPS from "../constants/groups";

const AuthContext = createContext({});
export const getGroupName = (groups) => {
  let groupName = "";
  if (groups.includes(GROUPS.SUPER_ADMIN)) {
    groupName = GROUPS.SUPER_ADMIN;
  } else if (groups.includes(GROUPS.GERENTE)) {
    groupName = GROUPS.GERENTE;
  } else if (groups.includes(GROUPS.VENDEDOR_MOSTRADOR)) {
    groupName = GROUPS.VENDEDOR_MOSTRADOR;
  }
  return groupName;
};
const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState("");

  const sub = authUser?.attributes?.sub;
  const authEmail = authUser?.attributes?.email;
  const userName = authUser?.username;

  const groups =
    authUser?.signInUserSession?.idToken?.payload["cognito:groups"] ?? [];
  const groupName = getGroupName(groups);
  // console.log(authUser, groups, groupName);
  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authEmail, userName, groupName, groups, sub }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
