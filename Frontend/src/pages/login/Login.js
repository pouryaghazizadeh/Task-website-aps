import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    navigate("/");
  };

  return (
    <Container>
      <Box
        component="form"
        style={{ marginTop: 100 }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h4" sx={{ m: 5 }}>
          Login Here
        </Typography>
        <TextField
          sx={{ display: "block", m: 2 }}
          required
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          sx={{ display: "block", m: 2 }}
          required
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ display: "block", m: 2 }}
          required
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outlined"
          size="small"
          type="submit"
          sx={{ fontSize: 20, m: 3 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
