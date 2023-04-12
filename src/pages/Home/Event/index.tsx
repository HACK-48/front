import { Box, Container, Typography } from "@mui/material";
import Image from "../../../components/Image";
import classes from "./classes.module.scss";
import RoundButton from "../../../components/RoundButton";
import img from "../../../assets/images/Photo event.png";

const Event = () => {
  return (
    <Box sx={{ py: "90px" }}>
      <Container maxWidth="xl">
        <div className={classes.grid}>
          <div>
            <Typography variant="h2" mb={3}>
              Evènements
            </Typography>
            <Typography variant="body2" mb={5}>
              Rejoignez-nous pour relever le défi lors de notre prochain
              hackathon !
            </Typography>
            <Typography variant="body1" mb={5}>
              Êtes-vous prêts à relever le défi de la programmation ? Êtes-vous
              prêts à innover, à créer et à surpasser vos limites ?
            </Typography>
            <Typography variant="body1" mb={5}>
              Alors, préparez-vous pour le hackathon de 48 heures qui arrive à
              grands pas ! Pendant deux jours intenses, vous travaillerez en
              équipe pour créer un projet original à partir de contraintes
              mystérieuses. Peu importe votre filière ou votre niveau
              d'expérience en programmation, vous êtes invités à participer à
              cet événement épique. Rejoignez-nous pour vivre une expérience
              unique en son genre - avec des défis stimulants, des opportunités
              de networking et une chance de montrer votre créativité et vos
              compétences en programmation.
            </Typography>
            <Typography variant="body1" mb={5}>
              Mais attention - le temps presse, les contraintes sont serrées et
              la compétition sera féroce. Êtes-vous prêts à relever le défi ? Le
              hackathon de 48 heures est sur le point de commencer - êtes-vous
              prêts à coder ?
            </Typography>
          </div>
          <Image src={img} alt="space" className={classes.img} />
        </div>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <RoundButton
            sx={{
              background: "#333",
              color: "#fff",

              ":hover": {
                background: "#111",
              },
            }}
            href="/old-projects"
          >
            Voir les projets passés
          </RoundButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Event;
