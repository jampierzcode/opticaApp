import { createContext, useContext } from "react";

export const GerenteContext = createContext({ labId: "" });
export const useGerenteContext = () => useContext(GerenteContext);
