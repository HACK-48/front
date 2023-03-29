import { Box, TextField, Typography } from "@mui/material";
import { ReactNode } from "react";


type Props = {
  label: string;
  required?: boolean;
  helperText?: ReactNode;
  error?: boolean;
  register?: any;
};

const FormText = ({ label, helperText, error, register, required = false }: Props) => {
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
        multiline
        rows={8}
        InputProps={{
          sx: {
            borderRadius: "0",
          },
        }}
        FormHelperTextProps={{
          sx: {
            ml: 0,
          },
        }}
        helperText={helperText}
        {...register}
        error={error}
      />
    </Box>
  );
};

export default FormText;
