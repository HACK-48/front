import React from "react";
import malus1 from "../../../assets/MalusCardImages/malus1.png";
import malus2 from "../../../assets/MalusCardImages/malus2.png";
import malus3 from "../../../assets/MalusCardImages/malus3.png";
import axios from "axios";
import MainTitle from "../../../components/MainTitle";
import ToolCard from "../../../components/ToolCardComponent";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../conf";

export default function TeamToolSection() {
  const url = "teamProjectManagement/6411beea15035f8d5cec5619";
  const images = [malus1, malus2, malus3];
  const token = localStorage.getItem("token");

  const [malusSentences, setMalusSentences] = React.useState<string[]>([]);

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
    <div className="main-container">
      <MainTitle text="Donnez un malus à l'équipe de votre choix :" color={null}></MainTitle>
      <Typography component="p" variant="h5">
        Choisissez un malus
      </Typography>
      <div className="card-container">
        {malusSentences.map((element: string, index: number) => {
          return <ToolCard sentence={element} imageUrl={images[index]}></ToolCard>;
        })}
      </div>
    </div>
  );
}
