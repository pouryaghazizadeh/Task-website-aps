// import React from "react";
// import { Link } from "react-router-dom";
// export default function NavBar() {
//   return (
//     <div className="navbar">
//       {/* becuse dont work src local in react I use require in page  */}
//       <img src={require("../images/logoaps.png")} alt="logo" />
//       <ul>
//         <li>
//           <Link to="/">Home...</Link>
//         </li>
//         <li>
//           <Link to="/todos">Todos</Link>
//         </li>
//         <li>
//           <Link to="/course">Courses</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import { makeStyles } from "@mui/material";

const pages = ["Home", "Todos", "Course"];

const useStyle = styled(AppBar)((theme) => {
  return {
    logo: {
      flexGrow: 1,
      width: 100,
      height: 80,
      backGround: "pink",
    },
  };
});

const ResponsiveAppBar = () => {
  const classes = useStyle;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <img
          className={classes.logo}
          sx={{ flexGrow: 1 }}
          src={require("../images/logoaps.png")}
          alt="logo"
          width={100}
          height={80}
        />
        <Box>
          <Typography>
            <Link to="/">Home</Link>
          </Typography>
          <Typography>
            <Link to="/todos">Todos</Link>
          </Typography>
          <Typography>
            <Link to="/course">Course</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    // <AppBar position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    //       >
    //         <img
    //           src={require("../images/logoaps.png")}
    //           alt="logo"
    //           width={100}
    //           height={80}
    //         />
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    //       ></Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         <Button
    //           onClick={handleCloseNavMenu}
    //           sx={{ my: 2, color: "white", display: "none" }}
    //         >
    //           <Link href="/" component="h2" variant="h6" underline="none">
    //             Home
    //           </Link>
    //         </Button>
    //         <Button
    //           onClick={handleCloseNavMenu}
    //           sx={{ my: 2, color: "white", display: "none" }}
    //         >
    //           <Link href="/todos" component="h2" variant="h6" underline="none">
    //             {" "}
    //             Todos
    //           </Link>
    //         </Button>
    //         <Button
    //           onClick={handleCloseNavMenu}
    //           sx={{ my: 2, color: "white", display: "none" }}
    //         >
    //           <Link
    //             href="/course"
    //             component="h6"
    //             variant="body2"
    //             underline="none"
    //           >
    //             Course
    //           </Link>
    //         </Button>
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Menu
    //           sx={{ mt: "45px" }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         ></Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
};
export default ResponsiveAppBar;
