import { Typography } from "@mui/material";

type Props = {
  text: string;
  color: string | null;
};

export default function MainTitle({ text, color }: Props) {
  const colors = ["#3A86FE", "#FB5507", "#FF006E", "#8338EB", "#FFBE0C"];

  function randNb() {
    return Math.floor(Math.random() * 4);
  }

  return (
    <div
      style={{
        borderBottom: `2px solid ${color ?? colors[randNb()]}`,
        width: "fit-content",
        minHeight: "3rem",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <Typography component="h2" variant="body2" style={{ fontSize: "1.5rem", paddingRight: "3rem" }}>
        {text}
      </Typography>
    </div>
  );
}
