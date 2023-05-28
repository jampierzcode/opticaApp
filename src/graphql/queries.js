/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getINVENTARIOORDENITEMS = /* GraphQL */ `
  query GetINVENTARIOORDENITEMS($id: ID!) {
    getINVENTARIOORDENITEMS(id: $id) {
      id
      cantidad
      costo
      inventarioID
      ordenID
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
      precioTotal
      referencia
      fechaEntrega
      seRealizoExamen
      graduacionDerechaVieja
      graduacionIzquierdaVieja
      graduacionDerechaNueva
      graduacionIzquierdaNueva
      fechaExamen
      INVENTARIOORDENITEMS {
        items {
          id
          cantidad
          costo
          inventarioID
          ordenID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ordenStatus
      precioGraduacion
      anticipo
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
        precioTotal
        referencia
        fechaEntrega
        seRealizoExamen
        graduacionDerechaVieja
        graduacionIzquierdaVieja
        graduacionDerechaNueva
        graduacionIzquierdaNueva
        fechaExamen
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        ordenStatus
        precioGraduacion
        anticipo
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
        precioTotal
        referencia
        fechaEntrega
        seRealizoExamen
        graduacionDerechaVieja
        graduacionIzquierdaVieja
        graduacionDerechaNueva
        graduacionIzquierdaNueva
        fechaExamen
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        ordenStatus
        precioGraduacion
        anticipo
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
        precioTotal
        referencia
        fechaEntrega
        seRealizoExamen
        graduacionDerechaVieja
        graduacionIzquierdaVieja
        graduacionDerechaNueva
        graduacionIzquierdaNueva
        fechaExamen
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        ordenStatus
        precioGraduacion
        anticipo
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
        precioTotal
        referencia
        fechaEntrega
        seRealizoExamen
        graduacionDerechaVieja
        graduacionIzquierdaVieja
        graduacionDerechaNueva
        graduacionIzquierdaNueva
        fechaExamen
        INVENTARIOORDENITEMS {
          nextToken
          startedAt
        }
        ordenStatus
        precioGraduacion
        anticipo
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
          precioTotal
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          fechaExamen
          ordenStatus
          precioGraduacion
          anticipo
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
          precioTotal
          referencia
          fechaEntrega
          seRealizoExamen
          graduacionDerechaVieja
          graduacionIzquierdaVieja
          graduacionDerechaNueva
          graduacionIzquierdaNueva
          fechaExamen
          ordenStatus
          precioGraduacion
          anticipo
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
