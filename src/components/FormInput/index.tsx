import { Box, TextField, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  label: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  helperText?: ReactNode;
  error?: boolean;
  register?: any;
};

const FormInput = ({
  label,
  helperText,
  error,
  register,
  type = "text",
  required = false,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography mb={1} component="label" variant="body1">
        {label} {required && "*"}
      </Typography>
      <TextField
        InputProps={{
          sx: {
            borderRadius: "0",
            input: {
              py: 1,
            },
          },
        }}
        FormHelperTextProps={{
          sx: {
            ml: 0,
          },
        }}
        type={type}
        helperText={helperText}
        {...register}
        error={error}
      />
    </Box>
  );
};

export default FormInput;
