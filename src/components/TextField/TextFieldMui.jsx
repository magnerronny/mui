import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";

export const TextFieldMui = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: ""
  });


  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido"
      })
      return
    }
    setError({
      error: false,
      message: ""
    })
    console.log("muti bien")
  }
  return (
    <>
      <Box component={"form"} onSubmit={handleSubmit} >
        <TextField
          id="email"
          label="email"
          type="email"
          variant="outlined"
          fullWidth
          helperText={ error.message }
          error={error.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{mt:2}}
        >
          Registrarme
        </Button>

      </Box>
      
    </>
  )
}
