import styled from "@emotion/styled"
import { Box, Button, Paper, Typography } from "@mui/material"

export const Practice = () => {
  const Cambio = styled("img")({
    width:200,
    height:"100%",
    objectFit:"cover",
    objectPosition:"center"
  })
  return (
    <>
      <Paper 
        elevation={6} 
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt:4,
        }}
      >
        <Cambio 
          src="https://via.placeholder.com/200" 
          alt="imagen con styled"
        />
        <Box sx={{flexGrow:1, display:"grid", gap:2 }}>
          <Typography variant="h4">Producto Name</Typography>
          <Typography variant="body1">Producto Description</Typography>
          <Button variant="contained">Add Card</Button>
        </Box>
        <Box sx={{mr:2}} component={"p"}>
          $.19.99
        </Box>
      </Paper>
    </>
  )
}
 