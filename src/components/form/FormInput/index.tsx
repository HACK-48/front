import { TextField, Typography } from "@mui/material";

type Props = {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  register?: any;
  onChange?: (...args: any) => void;
};

const FormInput = ({ label, required, helperText, error, register }: Props) => {
  return (
    <>
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
        helperText={helperText}
        {...register}
        error={error}
      />
    </>
  );
};

export default FormInput;
