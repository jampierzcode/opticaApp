// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Ordenstatus = {
  "CREADA": "CREADA",
  "ENVIADAMAQUILA": "ENVIADAMAQUILA",
  "ENTREGADA": "ENTREGADA",
  "CONPROBLEMAS": "CONPROBLEMAS",
  "FINALIZADA": "FINALIZADA"
};

const Tipoorden = {
  "COTIZACION": "COTIZACION",
  "ORDEN": "ORDEN"
};

const Enumcategoria = {
  "DAMA": "DAMA",
  "CABALLERO": "CABALLERO",
  "BOY": "BOY"
};

const { INVENTARIOORDENITEMS, GERENTE, VENDEDORES, INVENTARIO, ORDEN, CLIENTES, OPTICA } = initSchema(schema);

export {
  INVENTARIOORDENITEMS,
  GERENTE,
  VENDEDORES,
  INVENTARIO,
  ORDEN,
  CLIENTES,
  OPTICA,
  Ordenstatus,
  Tipoorden,
  Enumcategoria
};