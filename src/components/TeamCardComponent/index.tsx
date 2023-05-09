import { Card, CardContent, Typography } from "@mui/material";
import MainTitle from "../MainTitle";

type Props = {
  teamName: string;
  teamIllustration: string;
  color: string;
};

const TeamCard = ({ teamName, teamIllustration, color }: Props) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: 1,
        py: 5,
      }}
    >
      <CardContent
        sx={{
          background: `url(${teamIllustration}) no-repeat bottom left 280px / contain`,
        }}
      >
        <MainTitle text={teamName} color={color}></MainTitle>
        <Typography component="p" variant="body1" sx={{ maxWidth: "280px" }}>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
