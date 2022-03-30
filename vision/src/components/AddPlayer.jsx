import React, { useState } from "react";
import { db } from "../db/db";

export default function AddPlayer() {
  const [first_name, setName] = useState("");
  const [position, setPosition] = useState("");

  async function addPlayer() {
    try {
      const id = await db.players.add({
        first_name,
      });
      setName(`Player ${first_name} successfully added ${id}`);
      console.log(id);
      setName("");
    } catch (error) {
      setPosition(`Failed to add ${first_name}:${error}`);
    }
  }
  return (
    <>
      <p>{position}</p>
      Name:
      <input
        type="text"
        autoFocus
        placeholder="Name of list..."
        value={first_name}
        onChange={(ev) => setName(ev.target.value)}
        onKeyUp={(ev) => {
          if (ev.key === "Enter") {
            db.add({});
          }
        }}
      />
      <button onClick={addPlayer}>Add Player</button>
    </>
  );
}
