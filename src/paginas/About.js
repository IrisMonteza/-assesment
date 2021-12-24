import NavBar from "../components/NavBar";
import imagen from "../assets/user.png";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
function About() {
  const [name, setName] = React.useState("elizabethmv11.im@gmail.com");
  // const [Descripcion, setDescripcion] = React.useState(
  //   "elizabethmv11.im@gmail.com"
  // );
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh" /*, background: "black"*/,
        margin: "auto",
      }}
    >
      <Box sx={{ display: "flex", p: 1, m: 1 }}>
        <NavBar />
      </Box>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src={`${imagen}`}
              sx={{
                width: 128,
                height: 128,
                // width: "8rem",
                // height: "8rem",
                mb: "1em",
              }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>IRIS ELIZABETH MONTEZA VALLEJOS</h3>
                </Typography>
                <Typography gutterBottom>
                  ¡Hola! soy Ingeniera de Sistemas y Computación. Me gusta el
                  desarrollo Web Frontend, me gustaria especializarme en ello.
                  Soy una persona emprendedora, me gustan los retos y esforzarme
                  para lograrlos. Espero sacar el máximo provecho al bootcamp y
                  dar la talla.
                </Typography>
                <Typography>
                  <b>En este bootcamp apredí:</b>
                </Typography>
                <Typography>
                  A buscar información de manera más rapida
                </Typography>
                <Typography>
                  A separar mis tiempos para lograr cada tarea
                </Typography>
                <Typography>
                  Que tecnologías necesito para superarme en este mundo de la
                  programación.
                </Typography>
                <Typography>
                  <b>Correo:</b> elizabethmv11.im@gmail.com
                </Typography>
                <Typography>
                  <b>Link Github:</b> https://github.com/IrisMonteza
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default About;
