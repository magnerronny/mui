// import { Drafts, Menu } from "@mui/icons-material"
import { Box,List, ListItem, ListItemButton,ListItemText } from "@mui/material"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
export const NavListDrawer = ({navLinks, setOpen}) => {
  return (
    <>
      <Box sx={{width:250, bgcolor:"blue"}}>
        
        <nav>
          <List>
            {
              navLinks.map((item) => {
                return (
                  <ListItem disablePadding key = {item.title}>
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary ={item.title} />
                    </ListItemButton>
                  </ListItem>
                )
              })
            }
          </List>
        </nav>
      </Box>
    </>
    )
}

NavListDrawer.propTypes = {
  navLinks: PropTypes.array,
  setOpen: PropTypes.func
}