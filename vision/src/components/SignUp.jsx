import React, { useRef, useState } from "react";
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

const theme = createTheme();

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const signup = useAuth();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
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
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

//   return (
//     <div id="main">

//       <div>Currently logged in as: {currentUser?.email} </div>

//       <div id="fields">
//         <input ref={emailRef} placeholder="Email" />
//         <input ref={passwordRef} type="password" placeholder="Password" />
//       </div>

//       <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
//       <button disabled={loading || currentUser} onClick={handleLogin}>Log In</button>
//       <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>

//     </div>
//   );
// }
