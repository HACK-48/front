import { Box, Container, Typography } from "@mui/material";
import RoundButton from "../../../components/RoundButton";

const Banner = () => {
  return (
    <Box sx={{ background: "#5E4A98", color: "#fff", textAlign: "center", py: "36px" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" mb={2}>
          Prochain Hackathon
        </Typography>
        <Typography variant="subtitle1" mb={4}>
          Le 15 et 16 septembre 2023
        </Typography>
        <RoundButton
          sx={{
            color: "#fff",
            background: "#8E75D5",
          }}
        >
          Je participe !
        </RoundButton>
      </Container>
    </Box>
  );
};

export default Banner;
