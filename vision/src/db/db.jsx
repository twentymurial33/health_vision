import Dexie, { Table } from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  players: "++id,first_name,position",
});
