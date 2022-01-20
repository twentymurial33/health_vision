import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Navbar from "../shared/Navbar";
import "./HomePage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  size: "large",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
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
        </Item>
        <Item>
          Gym 2
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Item>
        <Item>
          Gym 3
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Item>
        <Item>
          Gym 4
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
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
        </Item>
        <Item>
          Gym 2
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Item>
        <Item>
          Gym 3
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Item>
        <Item>
          Gym 4
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Item>
      </Stack>
    </div>
  );
}
