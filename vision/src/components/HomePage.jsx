import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Navbar from "../shared/Navbar";
import "./HomePage.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  size: "large",
  color: theme.palette.text.secondary,
}));

export default function HomePage(props) {
  const [isLoadingData, setisLoadingData] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [season, setSeason] = React.useState([]);
  const [showData, setShowData] = React.useState(false);

  const handleClick = () => {
    setisLoadingData(true);
    setShowData(true);
    const url = "https://www.balldontlie.io/api/v1/players";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setisLoadingData(false);
        setData(json["data"]);
        console.log(data);
      });
  };

  return (
    <div>
      <Navbar />
      <Stack
        direction="row"
        spacing={4}
        style={{
          marginTop: "60px",
          marginLeft: "500px",
          display: "flex",
        }}
      >
        <Item class="basketBall">
          <h1>Players...</h1>

          <button type="button" onClick={handleClick}>
            Click for Data
          </button>
          {showData ? (
            isLoadingData ? (
              <h1>LOADING DATA........</h1>
            ) : (
              data.map((data) => (
                <button>
                  {data.first_name}

                  {data.team.full_name}
                </button>
              ))
            )
          ) : (
            <div></div>
          )}
        </Item>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        style={{
          marginTop: "60px",
          marginLeft: "500px",
        }}
      >
        <Item class="basket">
          <h1>Season stats</h1>

          <button type="button">Click for Data</button>
          {showData ? (
            isLoadingData ? (
              <h1>LOADING DATA........</h1>
            ) : (
              season.map((data) => (
                <button>
                  {season.season}

                  {season.games_played}
                </button>
              ))
            )
          ) : (
            <div></div>
          )}
        </Item>
      </Stack>
    </div>
  );
}
