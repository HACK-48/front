import React from "react";
import malus1 from "../../../assets/MalusCardImages/malus1.png";
import malus2 from "../../../assets/MalusCardImages/malus2.png";
import malus3 from "../../../assets/MalusCardImages/malus3.png";
import axios from "axios";
import MainTitle from "../../../components/MainTitle";
import ToolCard from "../../../components/ToolCardComponent";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../conf";

export default function TeamToolSection() {
  const matches = useMediaQuery("(min-width:900px)");
  const url = "teamProjectManagement/6459f2888cecff2c88b3831a";
  const images = [malus1, malus2, malus3];
  const token = localStorage.getItem("token");

  const [malusSentences, setMalusSentences] = React.useState<string[]>([
    "Pause café : Vous ne pouvez pas continuer à travailler sans votre café.",
    "Accro au téléphone : Pendant la prochaine heure vous ne pouvez pas lâcher votre téléphone.",
    "Crunch : La deadline est plus tôt que prévue. - 1h de travail.",
  ]);

  React.useEffect(() => {
    (async () => {
      try {
        const instance = axios.create({
          baseURL: API_URL,
          timeout: 1000,
          headers: { Authorization: "Bearer " + token },
        });

        const resp = await instance.get(url);
        setMalusSentences(resp.data.Resp.data.map((_: any) => _.projectManagementEventId.sentence));
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Box sx={{ my: 5 }}>
      <MainTitle text="Donnez un malus à l'équipe de votre choix :" color={null}></MainTitle>
      <Typography component="p" variant="h5" mb={5}>
        Choisissez un malus
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          ...(!matches && { flexDirection: "column", alignItems: "center" }),
        }}
      >
        {malusSentences.map((element: string, index: number) => {
          return <ToolCard key={element} sentence={element} imageUrl={images[index]}></ToolCard>;
        })}
      </Box>
    </Box>
  );
}
