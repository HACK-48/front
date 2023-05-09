import { Button, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

const RoundButton = ({ children, sx = {}, onClick, ...props }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: "60px",
        fontSize: "17px",
        fontWeight: "900",
        textTransform: "none",
        padding: "12px 32px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RoundButton;
