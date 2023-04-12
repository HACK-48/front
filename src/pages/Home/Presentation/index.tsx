import { Box, Container, Typography } from "@mui/material";
import classes from "./classes.module.scss";
import VideoPlayer from "../../../components/VideoPlayer";

const Presentation = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        color: "#111",
        py: "90px",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2">Présentation du Hackathon</Typography>
        <Typography variant="body1" mb={5}>
          Des contraintes pour plus de créativité, voilà l'esprit de notre
          hackathon !
        </Typography>
        <div className={classes.grid}>
          {/* This is a temporary element */}
          {/* <Box className={classes.video} /> */}
          <VideoPlayer
            src="https://www.youtube.com/embed/7oDjB9v0zMs"
            title="placeholder"
          />
          <div>
            <Typography variant="body1" my={5}>
              Le hackathon de 48 heures est un événement où les participants
              travaillent en équipe pour créer un projet original en deux jours.
              Tout le monde est invité à participer, quels que soient leur
              domaine d'études ou leur niveau de compétence. Pendant le
              hackathon, des contraintes seront mises en place pour inciter les
              participants à sortir de leur zone de confort et à utiliser des
              outils qu'ils ne maîtrisent peut-être pas encore.
            </Typography>
            <Typography variant="body1">
              Le hackathon est une excellente occasion d'apprendre à travailler
              sous pression, de travailler en équipe et de relever des défis.
              Vous aurez également l'opportunité de rencontrer des gens
              formidables et de développer vos compétences en programmation.
              Alors, préparez-vous à travailler dur, à faire preuve de
              créativité et à découvrir de nouvelles idées dans ce hackathon
              avec contraintes pour toutes les filières !"
            </Typography>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Presentation;
