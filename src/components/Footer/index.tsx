import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "auto", p: 2, boxShadow: 2 }}>
      <Typography sx={{ py: 2 }} variant="h6" component="div" align="center">
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
