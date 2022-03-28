import React, { useState } from "react";
import { db } from "../db";

export default function AddPlayer() {
  const [first_name, setName] = useState("");
  const [position, setPosition] = useState("");

  async function addPlayer() {
    try {
      //Add new players
      const id = await db.players.add({
        first_name,
        position,
      });
      setName(`Player ${first_name} successfully added ${id}`);
      //   setName("");
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
        value={first_name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>
    </>
  );
}
