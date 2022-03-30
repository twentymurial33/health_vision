import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./SignUp.css";
import { useAuth } from "../AuthContext";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { useNavigate } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const theme = createTheme();

export default function SignUp({ signOut, user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("./HomePage", { replace: true });
      console.log(e);
    } catch {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Basketball_Fantasy</h1>
          <IconButton>
            <SportsBasketballIcon fontSize="large" style={{ color: "red" }} />
          </IconButton>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  ref={emailRef}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  ref={passwordRef}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid> */}

            <h1>Hello {user.username}</h1>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={signOut}
              // onClick={() => setIsLoggedIn(!isLoggedIn)}
              // sx={{ mt: 3, mb: 3 }}
            >
              {/* {isLoggedIn ? (
                <button style={{ color: "black" }}>Logout</button>
              ) : (
                <button>Login</button>
              )} */}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
