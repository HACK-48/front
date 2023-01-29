import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "auto" }}>
      <Paper sx={{ mt: 5, p: 2, boxShadow: 5 }}>
        <Typography sx={{ py: 2 }} variant="h6" component="div" align="center">
          Footer
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
