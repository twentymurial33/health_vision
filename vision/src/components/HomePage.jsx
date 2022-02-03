import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Navbar from "../shared/Navbar";
import "./HomePage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  size: "large",
  color: theme.palette.text.secondary,
}));

export default function HomePage(props) {
  const [isLoadingData, setisLoadingData] = React.useState(false);
  const [articles, setData] = React.useState([]);
  const [showData, setShowData] = React.useState(false);

  const handleClick = () => {
    setisLoadingData(true);
    setShowData(true);
    const url =
      "https://newsapi.org/v2/everything?q=keyword&apiKey=ea6ca052605441c3a1470c2d00e3aaad";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setisLoadingData(false);
        setData(json["articles"]);
        console.log(articles);
      });
  };

  return (
    <div>
      <Navbar />
      <Stack
        direction="row"
        spacing={4}
        style={{ marginTop: "60px", marginLeft: "60px" }}
      >
        <Item>
          Gym 1
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button" onClick={handleClick}>
            Click for Data
          </button>
          {showData ? (
            isLoadingData ? (
              <h1>LOADING DATA........</h1>
            ) : (
              articles.map((article) => <h1>{article.author}</h1>)
            )
          ) : (
            <div></div>
          )}
        </Item>
        <Item>
          Gym 2
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
        <Item>
          Gym 3
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
        <Item>
          Gym 4
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        style={{ marginTop: "60px", marginLeft: "60px" }}
      >
        <Item>
          Gym 1
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
        <Item>
          Gym 2
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
        <Item>
          Gym 3
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
        <Item>
          Gym 4
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <button type="button">Click for Data</button>
        </Item>
      </Stack>
    </div>
  );
}
