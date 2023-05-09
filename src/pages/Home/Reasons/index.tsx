import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import RoundButton from "../../../components/RoundButton";
import Image from "../../../components/Image";
import classes from "./classes.module.scss";
import logo from "../../../assets/images/Logo Hack48.svg";
import { useNavigate } from "react-router-dom";

const Reasons = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "#333",
        color: "#fff",
        pb: "90px",
        pt: "36px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        {/* TODO : get resized logo */}
        <Image src={logo} alt="logo hack'48" sx={{ width: "60px", mb: 1, borderRadius: "none" }} />
        <Typography variant="h2" mb={5} sx={{ maxWidth: "735px" }} mx="auto">
          Trois bonnes raisons de participer à HACK48
        </Typography>
        <Box className={classes.wrapper}>
          <Card sx={{ background: "#282828", color: "#fff", mb: 4, mx: "auto" }}>
            <CardContent sx={{ minWidth: "100%", maxWidth: "350px" }}>
              <Typography variant="h1" component="p" my={5}>
                #01
              </Typography>
              <Typography variant="body1" component="p" my={5}>
                Alors, préparez-vous pour le hackathon de 48 heures qui arrive à grands pas ! Pendant deux jours
                intenses, vous êtes invités à participer à cet événement épique.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#282828", color: "#fff", mb: 4, mx: "auto" }}>
            <CardContent sx={{ minWidth: "100%", maxWidth: "350px" }}>
              <Typography variant="h1" component="p" my={5}>
                #02
              </Typography>
              <Typography variant="body1" component="p" my={5}>
                Alors, préparez-vous pour le hackathon de 48 heures qui arrive à grands pas ! Pendant deux jours
                intenses, vous êtes invités à participer à cet événement épique.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#282828", color: "#fff", mb: 4, mx: "auto" }}>
            <CardContent sx={{ minWidth: "100%", maxWidth: "350px" }}>
              <Typography variant="h1" component="p" my={5}>
                #03
              </Typography>
              <Typography variant="body1" component="p" my={5}>
                Alors, préparez-vous pour le hackathon de 48 heures qui arrive à grands pas ! Pendant deux jours
                intenses, vous êtes invités à participer à cet événement épique.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <RoundButton
            sx={{
              background: "#4D7ABD",
              color: "#fff",

              ":hover": {
                background: "#1E4784",
              },
            }}
            onClick={() => navigate("/old-projects")}
          >
            Voir les projets passés
          </RoundButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Reasons;
