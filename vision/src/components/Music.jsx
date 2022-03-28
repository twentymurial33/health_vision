import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import Player from "./Player/Player";

const Music = () => {
  const [songs, setSongs] = useState([
    {
      artist: "Beyonce!",
      album: " Love On Top",
      track: "$orries",
      src: "./music/music.mp3/",
    },
    {
      artist: "Beyonce",
      album: "Love On Top",
      track: "4",
      src: "./music/Beyoncé.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setSongs(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Sound>
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </Sound>
    </div>
  );
};

export default Music;
