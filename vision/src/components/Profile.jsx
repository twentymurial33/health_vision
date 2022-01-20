import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../shared/Navbar";

export default function Profile() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Navbar />
      <Card
        sx={{ maxWidth: 345 }}
        className="card_name"
        style={{ marginTop: "40px" }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </CardActions>
      </Card>
    </>
  );
}
