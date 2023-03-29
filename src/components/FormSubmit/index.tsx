import { Button } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const FormSubmit = ({ children }: Props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ width: "100%", borderRadius: "0", boxShadow: "0", textTransform: "none", background: "#000", mb: 1 }}
    >
      {children}
    </Button>
  );
};

export default FormSubmit;
