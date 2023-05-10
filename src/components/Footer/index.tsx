import { Box, Container, Typography, Link, List, ListItem, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/Logo-Hack48.svg";
import logoYnov from "../../assets/images/Rectangle 49.png";
import logoSophia from "../../assets/images/Rectangle 50.png";
import logoFood from "../../assets/images/Rectangle 51.png";

const Footer = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ mt: "auto", background: "black" }}>
      <Container maxWidth="xl" sx={{ mb: 2 }}>
        <Box
          mb={5}
          sx={{
            position: "relative",
            ...(matches && {
              display: "flex",
            }),
          }}
        >
          <Box
            sx={{
              display: "flex",
              ...(!matches && {
                mt: 2,
                justifyContent: "center",
              }),
            }}
          >
            {matches && <img src={logo} alt="logo" />}
            <List
              sx={{
                ...(!matches && {
                  display: "flex",
                }),
              }}
            >
              <ListItem>
                <Link
                  component={RouterLink}
                  to={"/"}
                  sx={{ textDecoration: "none", color: "white", whiteSpace: "nowrap" }}
                >
                  A propos
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  component={RouterLink}
                  to={"/contact"}
                  sx={{ textDecoration: "none", color: "white", whiteSpace: "nowrap" }}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  component={RouterLink}
                  to={"/teams"}
                  sx={{ textDecoration: "none", color: "white", whiteSpace: "nowrap" }}
                >
                  Team
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              ...(matches && {
                position: "absolute",
                inset: "auto 0",
                top: "16px",
              }),
            }}
          >
            <img src={logoYnov} alt="logoYnov" />
            <img src={logoSophia} alt="logoSophia" />
            <img src={logoFood} alt="logoFood" />
          </Box>
        </Box>
        <Typography sx={{ textAlign: "center", background: "black", color: "white" }}>
          Copyright 2023 - Site crée par Hack’48 - Mentions Légales
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
