import { useState, useEffect } from "react";
import Player from "./Player/Player";
import React from "react";

function Music() {
  const [songs] = useState([
    {
      title: "Love on Top",
      artist: "Beyonce",
      src: "../../public/music/Beyoncé - Love On Top (Official Video).mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  });

  return (
    <div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Music;
