import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  sentence: string;
  imageUrl: string;
};

const ToolCard = ({ sentence, imageUrl }: Props) => {
  return (
    <Card
      sx={{ margin: "3rem", width: 315, height: 442, boxShadow: "none" }}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      className="text-center"
    >
      <CardContent>
        <Typography component="p" variant="body1">
          {sentence}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
