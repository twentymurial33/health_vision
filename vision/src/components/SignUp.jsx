import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import IconButton from "@mui/material/IconButton";
import "./SignUp.css";
import { useAuth } from "../AuthContext";
import { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";

const theme = createTheme();
const styles = {
  largeIcon: {
    width: 100,
    height: 100,
    fontSize: "large",
  },
};

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  // const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;
    signup(email, password, fullName)
      .then((ref) => {
        setLoading(false);
        // history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

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
          <h1>Black_Fahari @2022</h1>
          <IconButton>
            <FitnessCenterIcon fontSize="large" styles={{ color: "#21130d" }} />
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
