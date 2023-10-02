import { Alert, AlertTitle, Box, Button, Collapse, } from "@mui/material"
import { useState } from "react"

export const Notificaciones = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Box sx={{display: "grid", gap:2 }}>
        <Alert severity="error">
          <AlertTitle>Errors</AlertTitle>
          This is an error alert — check it out!</Alert>

        <Collapse in={open}>
        <Alert severity="warning" action={
          <Button color="inherit" size="small" onClick={() => setOpen(false)} >undo</Button>  
        }>This is a warning alert — check it out!</Alert>
        </Collapse>

        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Box>
    </>
  )
}
