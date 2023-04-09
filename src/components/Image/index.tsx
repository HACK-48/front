import { Box, BoxProps } from "@mui/material";

const Image = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        aspectRatio: "1",
        width: "100%",
        ...sx,
      }}
      {...props}
      component="img"
    />
  );
};

export default Image;
