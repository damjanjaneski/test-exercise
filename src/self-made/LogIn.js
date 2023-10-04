import { TextField, Grid, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [inputText, setInputText] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const users = [
    {
      name: "Damjan",
      username: "Damjan@gmail.com",
      password: "12345",
    },
    {
      name: "Bojan",
      username: "Bojan@gmail.com",
      password: "54321",
    },
    {
      name: "Ana",
      username: "Ana@gmail.com",
      password: "33333",
    },
    {
      name: "Marija",
      username: "Marija@gmail.com",
      password: "55555",
    },
  ];

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputText({ ...inputText, [name]: value });
  };

  const validateFields = () => {
    const newErrors = {};

    if (inputText.username === "") {
      newErrors.username = true;
    }

    if (inputText.password === "") {
      newErrors.password = true;
    }

    setErrors(newErrors);
  };

  const logIn = () => {
    const loggedUser = JSON.parse(localStorage.getItem("users")).filter(
      (user) =>
        user.username === inputText.username &&
        user.password === inputText.password
    )[0];
    if (loggedUser) {
      navigate("/homepage");
    } else {
      setFailedLogin(true);
    }
  };

  const handleSubmit = () => {
    validateFields();
    logIn();
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: "50px",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{ marginBottom: "15px" }} variant="h4">
          Log-In form
        </Typography>
        <Grid sx={{ marginBottom: "15px", textAlign: "center" }} item md={12}>
          <TextField
            name="username"
            label="Username"
            value={inputText.username}
            onChange={handleChange}
            error={errors.username}
          />
        </Grid>
        <Grid sx={{ textAlign: "center" }} item md={12}>
          <TextField
            name="password"
            label="Password"
            value={inputText.passowrd}
            onChange={handleChange}
            error={errors.password}
            type="password"
          />
        </Grid>
        <Grid sx={{ textAlign: "center", marginTop: "20px" }} item md={12}>
          <Button onClick={handleSubmit}>Log in</Button>
        </Grid>
        {failedLogin ? <p>Incorrect username or password!</p> : ""}
      </Grid>
    </Box>
  );
}
