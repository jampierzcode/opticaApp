import { createContext } from "react";

export const MenuContext = createContext({
  current: 0,
  cambiarComponent: () => {},
});
