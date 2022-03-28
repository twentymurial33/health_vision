//component that queries the data
import { db } from "../db";
import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

export default function PlayerList() {
  const players = useLiveQuery(() => db.players.toArray());
  return (
    <>
      <div>
        <ul>
          {players?.map((player) => (
            <li key={player.id}>
              {player.first_name}, {player.position}
            </li>
          ))}
        </ul>
        ;
      </div>
    </>
  );
}
