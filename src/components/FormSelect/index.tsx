import { Box, MenuItem, Select, Typography } from "@mui/material";

type Props = {
  label: string;
  options: readonly any[];
  required?: boolean;
  register?: any;
};

const FormSelect = ({ label, options, register, required = false }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <Typography mb={1} component="label" variant="body1">
        {label} {required && "*"}
      </Typography>
      <Select
        {...register}
        defaultValue=""
        sx={{
          borderRadius: 0,
          "> div": {
            py: 1,
          },
        }}
      >
        {options.map(([key, label]) => (
          <MenuItem key={key} value={key}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default FormSelect;
