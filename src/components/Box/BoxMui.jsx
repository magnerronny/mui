import { Menu } from "@mui/icons-material"
import { Button, Grid } from "@mui/material"

export const BoxMui = () => {
  return (
      <Grid container spacing={2} sx={{mt:3, borderColor: "green", borderRadius:2, border:3, p:2 }}>
        <Grid item xs={6}>
          buenos dias amiguitos
        </Grid>
        <Grid item xs={6}>
          segundo dias
        </Grid>
        <Grid item xs={12} sx={{textAlign:"center"}}>
          <Button variant="outlined" color="error" endIcon = {<Menu/>} >Tercer dia</Button>
        </Grid>
      </Grid>
  )
}
