import { Box, Container, Grid, Typography } from "@mui/material";
import RoundButton from "../../components/RoundButton";
import Image from "../../components/Image";
import classes from "./classes.module.scss";

const Home = () => {
  return (
    <Box sx={{ background: "#111", color: "#fff", py: "90px" }}>
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.text}>
          <Typography variant="subtitle1">
            1ère édition de{" "}
            <Typography component="span" variant="subtitle2">
              Hack48
            </Typography>
          </Typography>
          <Typography variant="subtitle1" mb="60px">
            Le 15 et 16 Septembre 2023
          </Typography>
          <Typography variant="h2" component="h1" mb="46px">
            Hackathon limité, créativité illimitée : voyez les contraintes comme des opportunités
          </Typography>
          <RoundButton variant="contained" color="primary">
            Rejoindre l'aventure
          </RoundButton>
        </Box>
        <Box>
          <Image />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
