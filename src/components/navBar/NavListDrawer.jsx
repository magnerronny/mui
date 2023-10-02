import { Drafts, Menu } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const NavListDrawer = () => {
  return (
    <>
      <Box sx={{width:250, bgcolor:"blue"}}>
        <nav>
          <List>
            <ListItem>
              <ListItemIcon>
                <Menu/>
              </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Drafts/>
              </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </nav>
        <Divider/>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary ="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary ="Spam" />
              </ListItemButton>
            </ListItem>

          </List>
        </nav>
      </Box>
    </>
    )
}
