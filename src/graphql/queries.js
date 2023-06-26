/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGASTOS = /* GraphQL */ `
  query GetGASTOS($id: ID!) {
    getGASTOS(id: $id) {
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
export const listGASTOS = /* GraphQL */ `
  query ListGASTOS(
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGASTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncGASTOS = /* GraphQL */ `
  query SyncGASTOS(
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGASTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const gASTOSByTurnoID = /* GraphQL */ `
  query GASTOSByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gASTOSByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const gASTOSByOpticaID = /* GraphQL */ `
  query GASTOSByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gASTOSByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getDOCUMENTOS = /* GraphQL */ `
  query GetDOCUMENTOS($id: ID!) {
    getDOCUMENTOS(id: $id) {
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
export const listDOCUMENTOS = /* GraphQL */ `
  query ListDOCUMENTOS(
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDOCUMENTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDOCUMENTOS = /* GraphQL */ `
  query SyncDOCUMENTOS(
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const dOCUMENTOSByOrdenID = /* GraphQL */ `
  query DOCUMENTOSByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dOCUMENTOSByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const dOCUMENTOSByOpticaID = /* GraphQL */ `
  query DOCUMENTOSByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dOCUMENTOSByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  query GetCONFIGURACIONDOCUMENTO($id: ID!) {
    getCONFIGURACIONDOCUMENTO(id: $id) {
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
export const listCONFIGURACIONDOCUMENTOS = /* GraphQL */ `
  query ListCONFIGURACIONDOCUMENTOS(
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCONFIGURACIONDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncCONFIGURACIONDOCUMENTOS = /* GraphQL */ `
  query SyncCONFIGURACIONDOCUMENTOS(
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCONFIGURACIONDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const cONFIGURACIONDOCUMENTOSByOpticaID = /* GraphQL */ `
  query CONFIGURACIONDOCUMENTOSByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cONFIGURACIONDOCUMENTOSByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTransacciones = /* GraphQL */ `
  query GetTransacciones($id: ID!) {
    getTransacciones(id: $id) {
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
export const listTransacciones = /* GraphQL */ `
  query ListTransacciones(
    $filter: ModelTransaccionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransacciones(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTransacciones = /* GraphQL */ `
  query SyncTransacciones(
    $filter: ModelTransaccionesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransacciones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const transaccionesByTurnoID = /* GraphQL */ `
  query TransaccionesByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransaccionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transaccionesByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const transaccionesByOrdenID = /* GraphQL */ `
  query TransaccionesByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransaccionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transaccionesByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getDeudas = /* GraphQL */ `
  query GetDeudas($id: ID!) {
    getDeudas(id: $id) {
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
export const listDeudas = /* GraphQL */ `
  query ListDeudas(
    $filter: ModelDeudasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeudas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDeudas = /* GraphQL */ `
  query SyncDeudas(
    $filter: ModelDeudasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeudas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const deudasByTurnoID = /* GraphQL */ `
  query DeudasByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeudasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deudasByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const deudasByOrdenID = /* GraphQL */ `
  query DeudasByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeudasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deudasByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const deudasByOpticaID = /* GraphQL */ `
  query DeudasByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeudasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deudasByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTurno = /* GraphQL */ `
  query GetTurno($id: ID!) {
    getTurno(id: $id) {
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
export const listTurnos = /* GraphQL */ `
  query ListTurnos(
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTurnos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        cajaID
        ORDENS {
          nextToken
          startedAt
        }
        Deudas {
          nextToken
          startedAt
        }
        usuario
        estado
        Transacciones {
          nextToken
          startedAt
        }
        GASTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTurnos = /* GraphQL */ `
  query SyncTurnos(
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTurnos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        cajaID
        ORDENS {
          nextToken
          startedAt
        }
        Deudas {
          nextToken
          startedAt
        }
        usuario
        estado
        Transacciones {
          nextToken
          startedAt
        }
        GASTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const turnosByCajaID = /* GraphQL */ `
  query TurnosByCajaID(
    $cajaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    turnosByCajaID(
      cajaID: $cajaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        cajaID
        ORDENS {
          nextToken
          startedAt
        }
        Deudas {
          nextToken
          startedAt
        }
        usuario
        estado
        Transacciones {
          nextToken
          startedAt
        }
        GASTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCaja = /* GraphQL */ `
  query GetCaja($id: ID!) {
    getCaja(id: $id) {
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
export const listCajas = /* GraphQL */ `
  query ListCajas(
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCajas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        opticaID
        Turnos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCajas = /* GraphQL */ `
  query SyncCajas(
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCajas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        opticaID
        Turnos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const cajasByOpticaID = /* GraphQL */ `
  query CajasByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cajasByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            estado
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
      nextToken
      startedAt
    }
  }
`;
export const getINVENTARIOORDENITEMS = /* GraphQL */ `
  query GetINVENTARIOORDENITEMS($id: ID!) {
    getINVENTARIOORDENITEMS(id: $id) {
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
export const listINVENTARIOORDENITEMS = /* GraphQL */ `
  query ListINVENTARIOORDENITEMS(
    $filter: ModelINVENTARIOORDENITEMSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listINVENTARIOORDENITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncINVENTARIOORDENITEMS = /* GraphQL */ `
  query SyncINVENTARIOORDENITEMS(
    $filter: ModelINVENTARIOORDENITEMSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncINVENTARIOORDENITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const iNVENTARIOORDENITEMSByInventarioID = /* GraphQL */ `
  query INVENTARIOORDENITEMSByInventarioID(
    $inventarioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOORDENITEMSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOORDENITEMSByInventarioID(
      inventarioID: $inventarioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const iNVENTARIOORDENITEMSByOrdenID = /* GraphQL */ `
  query INVENTARIOORDENITEMSByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOORDENITEMSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOORDENITEMSByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
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
export const listGERENTES = /* GraphQL */ `
  query ListGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGERENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncGERENTES = /* GraphQL */ `
  query SyncGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGERENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const gERENTESByOpticaID = /* GraphQL */ `
  query GERENTESByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gERENTESByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getVENDEDORES = /* GraphQL */ `
  query GetVENDEDORES($id: ID!) {
    getVENDEDORES(id: $id) {
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
export const listVENDEDORES = /* GraphQL */ `
  query ListVENDEDORES(
    $filter: ModelVENDEDORESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVENDEDORES(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncVENDEDORES = /* GraphQL */ `
  query SyncVENDEDORES(
    $filter: ModelVENDEDORESFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVENDEDORES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const vENDEDORESByOpticaID = /* GraphQL */ `
  query VENDEDORESByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVENDEDORESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vENDEDORESByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getINVENTARIO = /* GraphQL */ `
  query GetINVENTARIO($id: ID!) {
    getINVENTARIO(id: $id) {
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
export const listINVENTARIOS = /* GraphQL */ `
  query ListINVENTARIOS(
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listINVENTARIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        INVENTARIOORDENITEMS {
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
      nextToken
      startedAt
    }
  }
`;
export const syncINVENTARIOS = /* GraphQL */ `
  query SyncINVENTARIOS(
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncINVENTARIOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        INVENTARIOORDENITEMS {
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
      nextToken
      startedAt
    }
  }
`;
export const iNVENTARIOSByOpticaID = /* GraphQL */ `
  query INVENTARIOSByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOSByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        INVENTARIOORDENITEMS {
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
      nextToken
      startedAt
    }
  }
`;
export const getORDEN = /* GraphQL */ `
  query GetORDEN($id: ID!) {
    getORDEN(id: $id) {
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
export const listORDENS = /* GraphQL */ `
  query ListORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        precioTotal
        montoPagado
        anticipo
        precioGraduacion
        turnoID
        Deudas {
          nextToken
          startedAt
        }
        Transacciones {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncORDENS = /* GraphQL */ `
  query SyncORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORDENS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        precioTotal
        montoPagado
        anticipo
        precioGraduacion
        turnoID
        Deudas {
          nextToken
          startedAt
        }
        Transacciones {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const oRDENSByOpticaID = /* GraphQL */ `
  query ORDENSByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        precioTotal
        montoPagado
        anticipo
        precioGraduacion
        turnoID
        Deudas {
          nextToken
          startedAt
        }
        Transacciones {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const oRDENSByClientesID = /* GraphQL */ `
  query ORDENSByClientesID(
    $clientesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByClientesID(
      clientesID: $clientesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        precioTotal
        montoPagado
        anticipo
        precioGraduacion
        turnoID
        Deudas {
          nextToken
          startedAt
        }
        Transacciones {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const oRDENSByTurnoID = /* GraphQL */ `
  query ORDENSByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        precioTotal
        montoPagado
        anticipo
        precioGraduacion
        turnoID
        Deudas {
          nextToken
          startedAt
        }
        Transacciones {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCLIENTES = /* GraphQL */ `
  query GetCLIENTES($id: ID!) {
    getCLIENTES(id: $id) {
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
export const listCLIENTES = /* GraphQL */ `
  query ListCLIENTES(
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCLIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        ORDENS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCLIENTES = /* GraphQL */ `
  query SyncCLIENTES(
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCLIENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        ORDENS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const cLIENTESByOpticaID = /* GraphQL */ `
  query CLIENTESByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cLIENTESByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        ORDENS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOPTICA = /* GraphQL */ `
  query GetOPTICA($id: ID!) {
    getOPTICA(id: $id) {
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
export const listOPTICAS = /* GraphQL */ `
  query ListOPTICAS(
    $filter: ModelOPTICAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOPTICAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        createdBy
        VENDEDORES {
          nextToken
          startedAt
        }
        GERENTES {
          nextToken
          startedAt
        }
        ORDENS {
          nextToken
          startedAt
        }
        CLIENTES {
          nextToken
          startedAt
        }
        INVENTARIOS {
          nextToken
          startedAt
        }
        Cajas {
          nextToken
          startedAt
        }
        CONFIGURACIONDOCUMENTOS {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        Deudas {
          nextToken
          startedAt
        }
        GASTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOPTICAS = /* GraphQL */ `
  query SyncOPTICAS(
    $filter: ModelOPTICAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOPTICAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        createdBy
        VENDEDORES {
          nextToken
          startedAt
        }
        GERENTES {
          nextToken
          startedAt
        }
        ORDENS {
          nextToken
          startedAt
        }
        CLIENTES {
          nextToken
          startedAt
        }
        INVENTARIOS {
          nextToken
          startedAt
        }
        Cajas {
          nextToken
          startedAt
        }
        CONFIGURACIONDOCUMENTOS {
          nextToken
          startedAt
        }
        DOCUMENTOS {
          nextToken
          startedAt
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        Deudas {
          nextToken
          startedAt
        }
        GASTOS {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
