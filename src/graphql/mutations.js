/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGASTOS = /* GraphQL */ `
  mutation CreateGASTOS(
    $input: CreateGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    createGASTOS(input: $input, condition: $condition) {
      id
      montoGasto
      descripcion
      turnoID
      fecha
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGASTOS = /* GraphQL */ `
  mutation UpdateGASTOS(
    $input: UpdateGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    updateGASTOS(input: $input, condition: $condition) {
      id
      montoGasto
      descripcion
      turnoID
      fecha
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGASTOS = /* GraphQL */ `
  mutation DeleteGASTOS(
    $input: DeleteGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    deleteGASTOS(input: $input, condition: $condition) {
      id
      montoGasto
      descripcion
      turnoID
      fecha
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDOCUMENTOS = /* GraphQL */ `
  mutation CreateDOCUMENTOS(
    $input: CreateDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    createDOCUMENTOS(input: $input, condition: $condition) {
      id
      tipoDocumento
      serie
      numeroSecuencial
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDOCUMENTOS = /* GraphQL */ `
  mutation UpdateDOCUMENTOS(
    $input: UpdateDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    updateDOCUMENTOS(input: $input, condition: $condition) {
      id
      tipoDocumento
      serie
      numeroSecuencial
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDOCUMENTOS = /* GraphQL */ `
  mutation DeleteDOCUMENTOS(
    $input: DeleteDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    deleteDOCUMENTOS(input: $input, condition: $condition) {
      id
      tipoDocumento
      serie
      numeroSecuencial
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation CreateCONFIGURACIONDOCUMENTO(
    $input: CreateCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    createCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
      id
      tipoDocumento
      serieActual
      numeroSecuencialActual
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation UpdateCONFIGURACIONDOCUMENTO(
    $input: UpdateCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    updateCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
      id
      tipoDocumento
      serieActual
      numeroSecuencialActual
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation DeleteCONFIGURACIONDOCUMENTO(
    $input: DeleteCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    deleteCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
      id
      tipoDocumento
      serieActual
      numeroSecuencialActual
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTransacciones = /* GraphQL */ `
  mutation CreateTransacciones(
    $input: CreateTransaccionesInput!
    $condition: ModelTransaccionesConditionInput
  ) {
    createTransacciones(input: $input, condition: $condition) {
      id
      monto
      metodoPago
      turnoID
      ordenID
      tipoTransaccion
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTransacciones = /* GraphQL */ `
  mutation UpdateTransacciones(
    $input: UpdateTransaccionesInput!
    $condition: ModelTransaccionesConditionInput
  ) {
    updateTransacciones(input: $input, condition: $condition) {
      id
      monto
      metodoPago
      turnoID
      ordenID
      tipoTransaccion
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTransacciones = /* GraphQL */ `
  mutation DeleteTransacciones(
    $input: DeleteTransaccionesInput!
    $condition: ModelTransaccionesConditionInput
  ) {
    deleteTransacciones(input: $input, condition: $condition) {
      id
      monto
      metodoPago
      turnoID
      ordenID
      tipoTransaccion
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDeudas = /* GraphQL */ `
  mutation CreateDeudas(
    $input: CreateDeudasInput!
    $condition: ModelDeudasConditionInput
  ) {
    createDeudas(input: $input, condition: $condition) {
      id
      fecha
      montoDeuda
      estado
      turnoID
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeudas = /* GraphQL */ `
  mutation UpdateDeudas(
    $input: UpdateDeudasInput!
    $condition: ModelDeudasConditionInput
  ) {
    updateDeudas(input: $input, condition: $condition) {
      id
      fecha
      montoDeuda
      estado
      turnoID
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeudas = /* GraphQL */ `
  mutation DeleteDeudas(
    $input: DeleteDeudasInput!
    $condition: ModelDeudasConditionInput
  ) {
    deleteDeudas(input: $input, condition: $condition) {
      id
      fecha
      montoDeuda
      estado
      turnoID
      ordenID
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTurno = /* GraphQL */ `
  mutation CreateTurno(
    $input: CreateTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    createTurno(input: $input, condition: $condition) {
      id
      montoInicial
      fechaApertura
      montoCierre
      fechaCierre
      cajaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usuario
      estado
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTurno = /* GraphQL */ `
  mutation UpdateTurno(
    $input: UpdateTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    updateTurno(input: $input, condition: $condition) {
      id
      montoInicial
      fechaApertura
      montoCierre
      fechaCierre
      cajaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usuario
      estado
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTurno = /* GraphQL */ `
  mutation DeleteTurno(
    $input: DeleteTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    deleteTurno(input: $input, condition: $condition) {
      id
      montoInicial
      fechaApertura
      montoCierre
      fechaCierre
      cajaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usuario
      estado
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCaja = /* GraphQL */ `
  mutation CreateCaja(
    $input: CreateCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    createCaja(input: $input, condition: $condition) {
      id
      nombre
      opticaID
      Turnos {
        items {
          id
          montoInicial
          fechaApertura
          montoCierre
          fechaCierre
          cajaID
          usuario
          estado
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCaja = /* GraphQL */ `
  mutation UpdateCaja(
    $input: UpdateCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    updateCaja(input: $input, condition: $condition) {
      id
      nombre
      opticaID
      Turnos {
        items {
          id
          montoInicial
          fechaApertura
          montoCierre
          fechaCierre
          cajaID
          usuario
          estado
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCaja = /* GraphQL */ `
  mutation DeleteCaja(
    $input: DeleteCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    deleteCaja(input: $input, condition: $condition) {
      id
      nombre
      opticaID
      Turnos {
        items {
          id
          montoInicial
          fechaApertura
          montoCierre
          fechaCierre
          cajaID
          usuario
          estado
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createINVENTARIOORDENITEMS = /* GraphQL */ `
  mutation CreateINVENTARIOORDENITEMS(
    $input: CreateINVENTARIOORDENITEMSInput!
    $condition: ModelINVENTARIOORDENITEMSConditionInput
  ) {
    createINVENTARIOORDENITEMS(input: $input, condition: $condition) {
      id
      cantidad
      costo
      inventarioID
      ordenID
      idGraduation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateINVENTARIOORDENITEMS = /* GraphQL */ `
  mutation UpdateINVENTARIOORDENITEMS(
    $input: UpdateINVENTARIOORDENITEMSInput!
    $condition: ModelINVENTARIOORDENITEMSConditionInput
  ) {
    updateINVENTARIOORDENITEMS(input: $input, condition: $condition) {
      id
      cantidad
      costo
      inventarioID
      ordenID
      idGraduation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteINVENTARIOORDENITEMS = /* GraphQL */ `
  mutation DeleteINVENTARIOORDENITEMS(
    $input: DeleteINVENTARIOORDENITEMSInput!
    $condition: ModelINVENTARIOORDENITEMSConditionInput
  ) {
    deleteINVENTARIOORDENITEMS(input: $input, condition: $condition) {
      id
      cantidad
      costo
      inventarioID
      ordenID
      idGraduation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createVENDEDORES = /* GraphQL */ `
  mutation CreateVENDEDORES(
    $input: CreateVENDEDORESInput!
    $condition: ModelVENDEDORESConditionInput
  ) {
    createVENDEDORES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVENDEDORES = /* GraphQL */ `
  mutation UpdateVENDEDORES(
    $input: UpdateVENDEDORESInput!
    $condition: ModelVENDEDORESConditionInput
  ) {
    updateVENDEDORES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVENDEDORES = /* GraphQL */ `
  mutation DeleteVENDEDORES(
    $input: DeleteVENDEDORESInput!
    $condition: ModelVENDEDORESConditionInput
  ) {
    deleteVENDEDORES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createINVENTARIO = /* GraphQL */ `
  mutation CreateINVENTARIO(
    $input: CreateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    createINVENTARIO(input: $input, condition: $condition) {
      id
      nombreProducto
      proveedor
      costo
      precioVenta
      color
      tipoEstructura
      urlImagen
      tipoMaterial
      categoria
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      opticaID
      stock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateINVENTARIO = /* GraphQL */ `
  mutation UpdateINVENTARIO(
    $input: UpdateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    updateINVENTARIO(input: $input, condition: $condition) {
      id
      nombreProducto
      proveedor
      costo
      precioVenta
      color
      tipoEstructura
      urlImagen
      tipoMaterial
      categoria
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      opticaID
      stock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteINVENTARIO = /* GraphQL */ `
  mutation DeleteINVENTARIO(
    $input: DeleteINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    deleteINVENTARIO(input: $input, condition: $condition) {
      id
      nombreProducto
      proveedor
      costo
      precioVenta
      color
      tipoEstructura
      urlImagen
      tipoMaterial
      categoria
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      opticaID
      stock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createORDEN = /* GraphQL */ `
  mutation CreateORDEN(
    $input: CreateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    createORDEN(input: $input, condition: $condition) {
      id
      opticaID
      tipoOrden
      clientesID
      usadoLentes
      fechaOrden
      horaOrden
      fechaExamen
      referencia
      fechaEntrega
      seRealizoExamen
      graduacionDerechaVieja
      graduacionIzquierdaVieja
      graduacionDerechaNueva
      graduacionIzquierdaNueva
      ordenStatus
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      precioTotal
      montoPagado
      anticipo
      precioGraduacion
      turnoID
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateORDEN = /* GraphQL */ `
  mutation UpdateORDEN(
    $input: UpdateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    updateORDEN(input: $input, condition: $condition) {
      id
      opticaID
      tipoOrden
      clientesID
      usadoLentes
      fechaOrden
      horaOrden
      fechaExamen
      referencia
      fechaEntrega
      seRealizoExamen
      graduacionDerechaVieja
      graduacionIzquierdaVieja
      graduacionDerechaNueva
      graduacionIzquierdaNueva
      ordenStatus
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      precioTotal
      montoPagado
      anticipo
      precioGraduacion
      turnoID
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteORDEN = /* GraphQL */ `
  mutation DeleteORDEN(
    $input: DeleteORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    deleteORDEN(input: $input, condition: $condition) {
      id
      opticaID
      tipoOrden
      clientesID
      usadoLentes
      fechaOrden
      horaOrden
      fechaExamen
      referencia
      fechaEntrega
      seRealizoExamen
      graduacionDerechaVieja
      graduacionIzquierdaVieja
      graduacionDerechaNueva
      graduacionIzquierdaNueva
      ordenStatus
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          idGraduation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      precioTotal
      montoPagado
      anticipo
      precioGraduacion
      turnoID
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Transacciones {
        items {
          id
          monto
          metodoPago
          turnoID
          ordenID
          tipoTransaccion
          fecha
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCLIENTES = /* GraphQL */ `
  mutation CreateCLIENTES(
    $input: CreateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    createCLIENTES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      edad
      whats
      sexo
      email
      opticaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCLIENTES = /* GraphQL */ `
  mutation UpdateCLIENTES(
    $input: UpdateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    updateCLIENTES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      edad
      whats
      sexo
      email
      opticaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCLIENTES = /* GraphQL */ `
  mutation DeleteCLIENTES(
    $input: DeleteCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    deleteCLIENTES(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      edad
      whats
      sexo
      email
      opticaID
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOPTICA = /* GraphQL */ `
  mutation CreateOPTICA(
    $input: CreateOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    createOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      VENDEDORES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CLIENTES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          fechaNacimiento
          edad
          whats
          sexo
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      INVENTARIOS {
        items {
          id
          nombreProducto
          proveedor
          costo
          precioVenta
          color
          tipoEstructura
          urlImagen
          tipoMaterial
          categoria
          opticaID
          stock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CONFIGURACIONDOCUMENTOS {
        items {
          id
          tipoDocumento
          serieActual
          numeroSecuencialActual
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      direction
      cp
      rfc
      contactPhone
      codSerial
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOPTICA = /* GraphQL */ `
  mutation UpdateOPTICA(
    $input: UpdateOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    updateOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      VENDEDORES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CLIENTES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          fechaNacimiento
          edad
          whats
          sexo
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      INVENTARIOS {
        items {
          id
          nombreProducto
          proveedor
          costo
          precioVenta
          color
          tipoEstructura
          urlImagen
          tipoMaterial
          categoria
          opticaID
          stock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CONFIGURACIONDOCUMENTOS {
        items {
          id
          tipoDocumento
          serieActual
          numeroSecuencialActual
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      direction
      cp
      rfc
      contactPhone
      codSerial
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOPTICA = /* GraphQL */ `
  mutation DeleteOPTICA(
    $input: DeleteOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    deleteOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      VENDEDORES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ORDENS {
        items {
          id
          opticaID
          tipoOrden
          clientesID
          usadoLentes
          fechaOrden
          horaOrden
          fechaExamen
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          ordenStatus
          precioTotal
          montoPagado
          anticipo
          precioGraduacion
          turnoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CLIENTES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          fechaNacimiento
          edad
          whats
          sexo
          email
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      INVENTARIOS {
        items {
          id
          nombreProducto
          proveedor
          costo
          precioVenta
          color
          tipoEstructura
          urlImagen
          tipoMaterial
          categoria
          opticaID
          stock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CONFIGURACIONDOCUMENTOS {
        items {
          id
          tipoDocumento
          serieActual
          numeroSecuencialActual
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      direction
      cp
      rfc
      contactPhone
      codSerial
      Deudas {
        items {
          id
          fecha
          montoDeuda
          estado
          turnoID
          ordenID
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          turnoID
          fecha
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
