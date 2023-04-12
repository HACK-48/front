import React from "react";
import malus1 from "../../../assets/MalusCardImages/malus1.png";
import malus2 from "../../../assets/MalusCardImages/malus2.png";
import malus3 from "../../../assets/MalusCardImages/malus3.png";
import axios from "axios";
import MainTitle from "../../../components/MainTitle";
import ToolCard from "../../../components/ToolCardComponent";
import { Typography } from "@mui/material";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmVjNjE2NjdmNjk1ZWUxZGI5MjBjNyIsImlhdCI6MTY4MTI4OTQ4MSwiZXhwIjoxNjgxMzAwMjgxfQ.YnFn4lrmDkdNEBhXkZEBHeLqIlGrg34VET4Zp9JECDM";

export default function TeamToolSection() {
  const url = "teamProjectManagement/6411beea15035f8d5cec5619";
  const [malusSentences, setMalusSentences] = React.useState<string[]>([]);
  const images = [malus1, malus2, malus3];

  React.useEffect(() => {
    (async () => {
      try {
        const instance = axios.create({
          baseURL: "http://localhost:8080/api/v1/",
          timeout: 1000,
          headers: { Authorization: "Bearer " + token },
        });

        const resp = await instance.get(url);
        setMalusSentences(
          resp.data.Resp.data.map(
            (_: any) => _.projectManagementEventId.sentence
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="main-container">
      <MainTitle
        text="Donnez un malus à l'équipe de votre choix :"
        color={null}
      ></MainTitle>
      {/* <p className="font-link">Choisissez un malus </p> */}
      <Typography component="p" variant="body1" fontWeight={500}>
        Choisissez un malus
      </Typography>
      <div className="card-container">
        {malusSentences.map((element: string, index: number) => {
          return (
            <ToolCard sentence={element} imageUrl={images[index]}></ToolCard>
          );
        })}
      </div>
    </div>
  );
}
