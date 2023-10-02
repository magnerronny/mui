import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Register",
    path: "/register",
  },
];

export const NavBar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ mr: 3, display:{xs:'block',sm:"none" } }}
              onClick={() => setOpen(true)}
              color="inherit"
              size="large"
              
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Box sx={{display:{ xs: "none", sm:"block" }}}>
              {navLinks.map((item) => (
                <Button
                  key={item.title}
                  color="inherit"
                  component={NavLink}
                  to={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={Open} anchor="left" 
        sx={{ mr: 3, display:{xs:'block',sm:"none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpen = {setOpen} />
      </Drawer>
    </>
  );
};
