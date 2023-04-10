import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E72170",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    subtitle1: {
      fontSize: "26px",
      fontWeight: "200",
      lineHeight: "1",
      marginBottom: "8px",
    },
    subtitle2: {
      fontSize: "26px",
      fontWeight: "900",
      lineHeight: "1",
      marginBottom: "8px",
    },
    h1: {
      lineHeight: "1.3",
      fontWeight: "900",
      fontSize: "63px",
    },
    h2: {
      lineHeight: "1.3",
      fontWeight: "900",
      fontSize: "40px",
    },
    body2: {
      lineHeight: "1.3",
      fontWeight: "700",
      fontSize: "20px",
    },
  },
});

export default theme;
