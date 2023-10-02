import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { NavListDrawer } from "./NavListDrawer"
import { useState } from "react"
import { Menu } from "@mui/icons-material";

export const NavBar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)} >Open Drawer</Button>

      <Box sx={{flexGrow:1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{mr:3}}
              onClick={ () => setOpen(true)}
              color="inherit"
              size="large"
            >
              <Menu/>
            </IconButton>
            <Typography variant="h6" component={"div"} sx={{flexGrow:1}}>News</Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        open = {Open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer/>
      </Drawer>
      cambios
    </>
  )
}
