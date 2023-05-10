import React from "react";
import team_light_blue from "../../../assets/svg/TeamIllustrations/team_light_blue.svg";
import team_orange from "../../../assets/svg/TeamIllustrations/team_orange.svg";
import team_pink from "../../../assets/svg/TeamIllustrations/team_pink.svg";
import team_violet from "../../../assets/svg/TeamIllustrations/team_violet.svg";
import team_yellow from "../../../assets/svg/TeamIllustrations/team_yellow.svg";
import axios from "axios";
import TeamCard from "../../../components/TeamCardComponent";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { API_URL } from "../../../conf";

export default function ChooseTeamSection() {
  const teamIllustrations = [team_light_blue, team_orange, team_pink, team_violet, team_yellow];

  const matches = useMediaQuery("(min-width:900px)");

  const [teams, setTeams] = React.useState([]);
  const [commonColor, setCommonColor] = React.useState<number[]>([]);
  const url = `${API_URL}/teams/`;
  const color = ["#3A86FE", "#FB5507", "#FF006E", "#8338EB", "#FFBE0C"];

  React.useEffect(() => {
    (async () => {
      try {
        let commonColors = [] as number[];

        const resp = await axios.get(url);
        setTeams(resp.data.Resp.data);

        resp.data.Resp.data.forEach((_: any) => {
          commonColors.push(randNb());
        });

        setCommonColor(commonColors);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function randNb() {
    return Math.floor(Math.random() * 4);
  }

  return (
    <Box sx={{ my: 5 }}>
      <Typography component="p" variant="h5" mb={5}>
        Choisissez une team
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          ...(!matches && { flexDirection: "column", alignItems: "center" }),
          "& > *": {
            width: "480px",
            flexGrow: "1",
          },
        }}
      >
        {teams.map((team: any, index: number) => {
          return (
            <TeamCard
              key={team.id}
              teamName={team.name}
              teamIllustration={teamIllustrations[commonColor[index]]}
              color={color[commonColor[index]]}
            ></TeamCard>
          );
        })}
      </Box>
    </Box>
  );
}
