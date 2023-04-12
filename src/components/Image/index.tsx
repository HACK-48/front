import { Box, BoxProps } from "@mui/material";

const Image = ({ children, src, alt, sx, ...props }: BoxProps & { src: string; alt: string }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        aspectRatio: "1",
        width: "100%",
        ...sx,
      }}
      src={src}
      alt={alt}
      {...props}
      component="img"
    />
  );
};

export default Image;
