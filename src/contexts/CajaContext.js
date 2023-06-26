// CajaContext.js
import { API, graphqlOperation } from "aws-amplify";
import React, { createContext, useState } from "react";
import { listTurnos } from "../graphql/queries";
import { message } from "antd";

const CajaContext = createContext();

const CajaProvider = ({ children }) => {
  const [cajaAbierta, setCajaAbierta] = useState(false);
  const [nowTurno, setNowTurno] = useState({});
  //   const [turnoSeleccionado, setTurnoSeleccionado] = useState(""); // Almacena el ID del turno seleccionado por el usuario

  const verificarCajaAbierta = async (gerenteId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(listTurnos, {
          filter: {
            estado: { eq: "Abierto" },
            usuario: { eq: gerenteId }, // Reemplazar con el ID del usuario actual
          },
        })
      );

      const turnosAbiertos = response.data.listTurnos.items;

      if (turnosAbiertos.length > 0) {
        // Si hay al menos un turno abierto por el usuario, actualiza el estado
        setCajaAbierta(true);
        let newTurno = {
          id: turnosAbiertos[0].id,
          montoInicial: turnosAbiertos[0].montoInicial,
          //   montoFinal: turnosAbiertos[0].montoFinal,
          fechaApertura: turnosAbiertos[0].fechaApertura,
          _version: turnosAbiertos[0]._version,
        };
        setNowTurno(newTurno);
      } else {
        // Si no hay turnos abiertos por el usuario, redirige al usuario para que seleccione un turno
        // Aquí puedes mostrar una lista de los turnos registrados y permitir al usuario seleccionar uno
        // Luego, actualizas el estado con el turno seleccionado
        // setTurnoSeleccionado(ID_TURNO_SELECCIONADO);
        message.warning("No has abierto ningún turno");
      }
      return true;
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
    // eslint-disable-next-line
  };

  return (
    <CajaContext.Provider
      value={{ cajaAbierta, setCajaAbierta, nowTurno, verificarCajaAbierta }}
    >
      {children}
    </CajaContext.Provider>
  );
};

export { CajaContext, CajaProvider };
