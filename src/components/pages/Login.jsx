import { Button, Typography } from "@mui/material"
import { useSnackbar } from "notistack"

export const Login = () => {
 const {enqueueSnackbar} = useSnackbar()

 const handleClick = () => {
  enqueueSnackbar("empezamos los cambios", {
    variant:"success",
    anchorOrigin: {
      vertical:"top",
      horizontal: "right"
    }
  })
 }
  return (
    <>
      <Typography>logins</Typography>
      <Button variant="contained" onClick={handleClick} >Open</Button>
    </>
  )
}
