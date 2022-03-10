import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  players: "++id, name, stats", // Primary key and indexed props
});
