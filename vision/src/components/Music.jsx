import React, { useEffect, useState } from "react";
import Player from "./Player/Player";

function Music() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "",
    },

    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]),
  ]);
  return (
    <div className="App">
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
