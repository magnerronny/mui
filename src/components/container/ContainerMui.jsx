import { Button, Container, Typography } from "@mui/material"

export const ContainerMui = () => {
  return (
    <Container sx={{border:3, borderColor:'green', borderRadius:4, boxShadow:9 , padding:2, textAlign:"center", width:{sm:'200px', md: '600px', lg: '1100px'} }} >
      <Typography gutterBottom  variant="h3" component={"h1"} sx={{fontWeight:'semi-bold', fontSize:"4"}} >
        Hellos
      </Typography>
      <Button variant="contained" sx={{position:'relative'}}>
        Container Mui
      </Button>
    </Container>
  )
}
