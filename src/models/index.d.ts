import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Ordenstatus {
  CREADA = "CREADA",
  ENVIADAMAQUILA = "ENVIADAMAQUILA",
  ENTREGADA = "ENTREGADA",
  CONPROBLEMAS = "CONPROBLEMAS",
  FINALIZADA = "FINALIZADA"
}

export enum Tipoorden {
  COTIZACION = "COTIZACION",
  ORDEN = "ORDEN"
}

export enum Enumcategoria {
  DAMA = "DAMA",
  CABALLERO = "CABALLERO",
  BOY = "BOY"
}



type EagerINVENTARIOORDENITEMS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIOORDENITEMS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly costo?: number | null;
  readonly inventarioID: string;
  readonly ordenID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIOORDENITEMS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIOORDENITEMS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly costo?: number | null;
  readonly inventarioID: string;
  readonly ordenID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIOORDENITEMS = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIOORDENITEMS : LazyINVENTARIOORDENITEMS

export declare const INVENTARIOORDENITEMS: (new (init: ModelInit<INVENTARIOORDENITEMS>) => INVENTARIOORDENITEMS) & {
  copyOf(source: INVENTARIOORDENITEMS, mutator: (draft: MutableModel<INVENTARIOORDENITEMS>) => MutableModel<INVENTARIOORDENITEMS> | void): INVENTARIOORDENITEMS;
}

type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerVENDEDORES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VENDEDORES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVENDEDORES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VENDEDORES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VENDEDORES = LazyLoading extends LazyLoadingDisabled ? EagerVENDEDORES : LazyVENDEDORES

export declare const VENDEDORES: (new (init: ModelInit<VENDEDORES>) => VENDEDORES) & {
  copyOf(source: VENDEDORES, mutator: (draft: MutableModel<VENDEDORES>) => MutableModel<VENDEDORES> | void): VENDEDORES;
}

type EagerINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly color?: string | null;
  readonly tipoEstructura?: string | null;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly categoria: Enumcategoria | keyof typeof Enumcategoria;
  readonly INVENTARIOORDENITEMS?: (INVENTARIOORDENITEMS | null)[] | null;
  readonly opticaID: string;
  readonly stock?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly color?: string | null;
  readonly tipoEstructura?: string | null;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly categoria: Enumcategoria | keyof typeof Enumcategoria;
  readonly INVENTARIOORDENITEMS: AsyncCollection<INVENTARIOORDENITEMS>;
  readonly opticaID: string;
  readonly stock?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIO = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIO : LazyINVENTARIO

export declare const INVENTARIO: (new (init: ModelInit<INVENTARIO>) => INVENTARIO) & {
  copyOf(source: INVENTARIO, mutator: (draft: MutableModel<INVENTARIO>) => MutableModel<INVENTARIO> | void): INVENTARIO;
}

type EagerORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipoOrden?: Tipoorden | keyof typeof Tipoorden | null;
  readonly clientesID: string;
  readonly usadoLentes?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly precioTotal?: string | null;
  readonly referencia?: string | null;
  readonly fechaEntrega?: string | null;
  readonly seRealizoExamen?: string | null;
  readonly graduacionDerechaVieja?: string | null;
  readonly graduacionIzquierdaVieja?: string | null;
  readonly graduacionDerechaNueva?: string | null;
  readonly graduacionIzquierdaNueva?: string | null;
  readonly fechaExamen?: string | null;
  readonly INVENTARIOORDENITEMS?: (INVENTARIOORDENITEMS | null)[] | null;
  readonly ordenStatus?: Ordenstatus | keyof typeof Ordenstatus | null;
  readonly precioGraduacion?: string | null;
  readonly anticipo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipoOrden?: Tipoorden | keyof typeof Tipoorden | null;
  readonly clientesID: string;
  readonly usadoLentes?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly precioTotal?: string | null;
  readonly referencia?: string | null;
  readonly fechaEntrega?: string | null;
  readonly seRealizoExamen?: string | null;
  readonly graduacionDerechaVieja?: string | null;
  readonly graduacionIzquierdaVieja?: string | null;
  readonly graduacionDerechaNueva?: string | null;
  readonly graduacionIzquierdaNueva?: string | null;
  readonly fechaExamen?: string | null;
  readonly INVENTARIOORDENITEMS: AsyncCollection<INVENTARIOORDENITEMS>;
  readonly ordenStatus?: Ordenstatus | keyof typeof Ordenstatus | null;
  readonly precioGraduacion?: string | null;
  readonly anticipo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ORDEN = LazyLoading extends LazyLoadingDisabled ? EagerORDEN : LazyORDEN

export declare const ORDEN: (new (init: ModelInit<ORDEN>) => ORDEN) & {
  copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN>) => MutableModel<ORDEN> | void): ORDEN;
}

type EagerCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly whats?: string | null;
  readonly sexo?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly whats?: string | null;
  readonly sexo?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CLIENTES = LazyLoading extends LazyLoadingDisabled ? EagerCLIENTES : LazyCLIENTES

export declare const CLIENTES: (new (init: ModelInit<CLIENTES>) => CLIENTES) & {
  copyOf(source: CLIENTES, mutator: (draft: MutableModel<CLIENTES>) => MutableModel<CLIENTES> | void): CLIENTES;
}

type EagerOPTICA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OPTICA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly VENDEDORES?: (VENDEDORES | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly CLIENTES?: (CLIENTES | null)[] | null;
  readonly INVENTARIOS?: (INVENTARIO | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOPTICA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OPTICA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly VENDEDORES: AsyncCollection<VENDEDORES>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly CLIENTES: AsyncCollection<CLIENTES>;
  readonly INVENTARIOS: AsyncCollection<INVENTARIO>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OPTICA = LazyLoading extends LazyLoadingDisabled ? EagerOPTICA : LazyOPTICA

export declare const OPTICA: (new (init: ModelInit<OPTICA>) => OPTICA) & {
  copyOf(source: OPTICA, mutator: (draft: MutableModel<OPTICA>) => MutableModel<OPTICA> | void): OPTICA;
}