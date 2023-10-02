import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const CardMui = () => {
  return (
    <>
      <Card sx={{mt:3}}>
        <CardMedia 
          component={"img"} 
          image ="https://via.placeholder.com/300x200" 
          height={200}
          alt="una descripcion"
        />

        <CardContent>
          <Typography variant="h4">Card Title</Typography>
          <Typography
            variant="body2"
            component={"p"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur at expedita ducimus veniam excepturi velit quaerat earum quia repudiandae, magni facere voluptate commodi in quas. Repellat dignissimos neque tempore!
            Ullam eos ad ea ducimus repellendus nam illo vel et autem consequuntur. Ipsam sapiente maxime earum ullam repudiandae voluptates? Omnis saepe, cupiditate maiores animi iusto distinctio debitis excepturi necessitatibus culpa?
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" >share</Button>
          <Button variant="outlined" color="error" > lear more</Button>
        </CardActions>
      </Card>
    </>
  )
}
