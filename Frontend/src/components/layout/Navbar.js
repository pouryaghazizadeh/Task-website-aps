import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Container } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ marginBottom: 5 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              style={{ flexGrow: 1 }}
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              AP Signals
            </Typography>
            <div>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/todoList">
                TodoList
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
