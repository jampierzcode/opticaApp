/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGASTOS = /* GraphQL */ `
  subscription OnCreateGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onCreateGASTOS(filter: $filter) {
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
export const onUpdateGASTOS = /* GraphQL */ `
  subscription OnUpdateGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onUpdateGASTOS(filter: $filter) {
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
export const onDeleteGASTOS = /* GraphQL */ `
  subscription OnDeleteGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onDeleteGASTOS(filter: $filter) {
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
export const onCreateDOCUMENTOS = /* GraphQL */ `
  subscription OnCreateDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onCreateDOCUMENTOS(filter: $filter) {
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
export const onUpdateDOCUMENTOS = /* GraphQL */ `
  subscription OnUpdateDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onUpdateDOCUMENTOS(filter: $filter) {
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
export const onDeleteDOCUMENTOS = /* GraphQL */ `
  subscription OnDeleteDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onDeleteDOCUMENTOS(filter: $filter) {
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
export const onCreateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnCreateCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onCreateCONFIGURACIONDOCUMENTO(filter: $filter) {
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
export const onUpdateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnUpdateCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onUpdateCONFIGURACIONDOCUMENTO(filter: $filter) {
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
export const onDeleteCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnDeleteCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onDeleteCONFIGURACIONDOCUMENTO(filter: $filter) {
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
export const onCreateTransacciones = /* GraphQL */ `
  subscription OnCreateTransacciones(
    $filter: ModelSubscriptionTransaccionesFilterInput
  ) {
    onCreateTransacciones(filter: $filter) {
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
export const onUpdateTransacciones = /* GraphQL */ `
  subscription OnUpdateTransacciones(
    $filter: ModelSubscriptionTransaccionesFilterInput
  ) {
    onUpdateTransacciones(filter: $filter) {
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
export const onDeleteTransacciones = /* GraphQL */ `
  subscription OnDeleteTransacciones(
    $filter: ModelSubscriptionTransaccionesFilterInput
  ) {
    onDeleteTransacciones(filter: $filter) {
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
export const onCreateDeudas = /* GraphQL */ `
  subscription OnCreateDeudas($filter: ModelSubscriptionDeudasFilterInput) {
    onCreateDeudas(filter: $filter) {
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
export const onUpdateDeudas = /* GraphQL */ `
  subscription OnUpdateDeudas($filter: ModelSubscriptionDeudasFilterInput) {
    onUpdateDeudas(filter: $filter) {
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
export const onDeleteDeudas = /* GraphQL */ `
  subscription OnDeleteDeudas($filter: ModelSubscriptionDeudasFilterInput) {
    onDeleteDeudas(filter: $filter) {
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
export const onCreateTurno = /* GraphQL */ `
  subscription OnCreateTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onCreateTurno(filter: $filter) {
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
export const onUpdateTurno = /* GraphQL */ `
  subscription OnUpdateTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onUpdateTurno(filter: $filter) {
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
export const onDeleteTurno = /* GraphQL */ `
  subscription OnDeleteTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onDeleteTurno(filter: $filter) {
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
export const onCreateCaja = /* GraphQL */ `
  subscription OnCreateCaja($filter: ModelSubscriptionCajaFilterInput) {
    onCreateCaja(filter: $filter) {
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
export const onUpdateCaja = /* GraphQL */ `
  subscription OnUpdateCaja($filter: ModelSubscriptionCajaFilterInput) {
    onUpdateCaja(filter: $filter) {
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
export const onDeleteCaja = /* GraphQL */ `
  subscription OnDeleteCaja($filter: ModelSubscriptionCajaFilterInput) {
    onDeleteCaja(filter: $filter) {
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
export const onCreateINVENTARIOORDENITEMS = /* GraphQL */ `
  subscription OnCreateINVENTARIOORDENITEMS(
    $filter: ModelSubscriptionINVENTARIOORDENITEMSFilterInput
  ) {
    onCreateINVENTARIOORDENITEMS(filter: $filter) {
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
export const onUpdateINVENTARIOORDENITEMS = /* GraphQL */ `
  subscription OnUpdateINVENTARIOORDENITEMS(
    $filter: ModelSubscriptionINVENTARIOORDENITEMSFilterInput
  ) {
    onUpdateINVENTARIOORDENITEMS(filter: $filter) {
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
export const onDeleteINVENTARIOORDENITEMS = /* GraphQL */ `
  subscription OnDeleteINVENTARIOORDENITEMS(
    $filter: ModelSubscriptionINVENTARIOORDENITEMSFilterInput
  ) {
    onDeleteINVENTARIOORDENITEMS(filter: $filter) {
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
export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
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
export const onUpdateGERENTE = /* GraphQL */ `
  subscription OnUpdateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onUpdateGERENTE(filter: $filter) {
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
export const onDeleteGERENTE = /* GraphQL */ `
  subscription OnDeleteGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onDeleteGERENTE(filter: $filter) {
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
export const onCreateVENDEDORES = /* GraphQL */ `
  subscription OnCreateVENDEDORES(
    $filter: ModelSubscriptionVENDEDORESFilterInput
  ) {
    onCreateVENDEDORES(filter: $filter) {
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
export const onUpdateVENDEDORES = /* GraphQL */ `
  subscription OnUpdateVENDEDORES(
    $filter: ModelSubscriptionVENDEDORESFilterInput
  ) {
    onUpdateVENDEDORES(filter: $filter) {
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
export const onDeleteVENDEDORES = /* GraphQL */ `
  subscription OnDeleteVENDEDORES(
    $filter: ModelSubscriptionVENDEDORESFilterInput
  ) {
    onDeleteVENDEDORES(filter: $filter) {
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
export const onCreateINVENTARIO = /* GraphQL */ `
  subscription OnCreateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onCreateINVENTARIO(filter: $filter) {
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
export const onUpdateINVENTARIO = /* GraphQL */ `
  subscription OnUpdateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onUpdateINVENTARIO(filter: $filter) {
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
export const onDeleteINVENTARIO = /* GraphQL */ `
  subscription OnDeleteINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onDeleteINVENTARIO(filter: $filter) {
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
export const onCreateORDEN = /* GraphQL */ `
  subscription OnCreateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onCreateORDEN(filter: $filter) {
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
export const onUpdateORDEN = /* GraphQL */ `
  subscription OnUpdateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onUpdateORDEN(filter: $filter) {
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
export const onDeleteORDEN = /* GraphQL */ `
  subscription OnDeleteORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onDeleteORDEN(filter: $filter) {
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
export const onCreateCLIENTES = /* GraphQL */ `
  subscription OnCreateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onCreateCLIENTES(filter: $filter) {
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
export const onUpdateCLIENTES = /* GraphQL */ `
  subscription OnUpdateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onUpdateCLIENTES(filter: $filter) {
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
export const onDeleteCLIENTES = /* GraphQL */ `
  subscription OnDeleteCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onDeleteCLIENTES(filter: $filter) {
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
export const onCreateOPTICA = /* GraphQL */ `
  subscription OnCreateOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onCreateOPTICA(filter: $filter) {
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
export const onUpdateOPTICA = /* GraphQL */ `
  subscription OnUpdateOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onUpdateOPTICA(filter: $filter) {
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
export const onDeleteOPTICA = /* GraphQL */ `
  subscription OnDeleteOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onDeleteOPTICA(filter: $filter) {
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
