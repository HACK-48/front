import { Button, ButtonProps } from "@mui/material";

const RoundButton = ({ children, sx = {}, ...props }: ButtonProps) => {
  return (
    <Button
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
