import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

// import { makeStyles } from "@mui/material";

const ResponsiveAppBar = () => {
  return (
    <AppBar color="default" sx={{ display: "flex" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          sx={{ flexGrow: 1 }}
          src={require("../images/logoaps.png")}
          alt="logo"
          width={100}
          height={80}
        />
        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: 100 }}
        >
          <Typography>
            <Link to="/">Home</Link>
          </Typography>
          <Typography>
            <Link to="/todos">Todos</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
