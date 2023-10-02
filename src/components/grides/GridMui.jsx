import { Grid } from "@mui/material"

export const GridMui = () => {
  return (
    <Grid container spacing={2} >
      <Grid item>
        1
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        2
      </Grid>
      <Grid item xs={6} textAlign={"center"}>
        3
      </Grid>
      <Grid item xs={6} textAlign={"center "}>
        4
      </Grid>
    </Grid>
  )
}
