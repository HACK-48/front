import { Paper } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  color: string;
  children?: ReactNode;
};

const ProfileCard = ({ children, color }: Props) => {
  return (
    <Paper
      sx={{
        boxShadow: `0 4px 11px ${color}`,
        borderRadius: "0",
        textAlign: "left",
        p: 4,
      }}
    >
      {children}
    </Paper>
  );
};

export default ProfileCard;
