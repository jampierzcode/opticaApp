/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
