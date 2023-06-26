import { createContext, useContext } from "react";

export const GerenteContext = createContext({ labId: "", gerenteId: "" });
export const useGerenteContext = () => useContext(GerenteContext);
