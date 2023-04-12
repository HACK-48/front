import { Box, Container, Typography } from "@mui/material";
import RoundButton from "../../../components/RoundButton";
import Image from "../../../components/Image";
import classes from "./classes.module.scss";
import img from "../../../assets/images/Photo header.png";

const Hero = () => {
  return (
    <Box sx={{ background: "#111", color: "#fff", py: "90px" }}>
      <Container maxWidth="xl">
        <div className={classes.grid}>
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
              Hackathon limité, créativité illimitée : voyez les contraintes
              comme des opportunités
            </Typography>
            <RoundButton
              href="/old-projects"
              variant="contained"
              color="primary"
            >
              Rejoindre l'aventure
            </RoundButton>
          </Box>
          <Image src={img} alt="arduino" className={classes.img} />
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
