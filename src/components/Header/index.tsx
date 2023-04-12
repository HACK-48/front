import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles.module.scss";
import logo from "../../assets/Logo-Hack48.svg";
import { redirect, useNavigate } from "react-router-dom";

interface IProps {
  isAuth?: boolean;
}

const Header = ({ isAuth = true }: IProps) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const userLinks = isAuth ? (
    <Button
      onClick={() => navigate("user-profile")}
      className={styles.menuLinks}
      color="inherit"
    >
      Profil
    </Button>
  ) : (
    <Button
      onClick={() => navigate("login")}
      className={styles.menuLinks}
      color="inherit"
    >
      Connexion
    </Button>
  );

  const userLinksMobile = isAuth ? (
    <ListItem
      onClick={() => navigate("user-profile")}
      //className={styles.menuLinks}
      button
    >
      <ListItemText primary="Profil" />
    </ListItem>
  ) : (
    <ListItem
      onClick={() => navigate("login")}
      // className={styles.menuLinks}
      button
    >
      <ListItemText primary="Connexion" />
    </ListItem>
  );

  return (
    <Box>
      <AppBar
        className={styles.container}
        position="static"
        sx={{ background: "black" }}
      >
        <Toolbar sx={{ display: { xs: "flex", md: "flex" }, flexWrap: "wrap" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              onClick={() => navigate("/")}
              className={styles.logo}
              src={logo}
              alt=""
            />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("teams")}
              className={styles.menuLinks}
              color="inherit"
            >
              Les teams
            </Button>
            <Button
              onClick={() => navigate("old-projects")}
              className={styles.menuLinks}
              color="inherit"
            >
              Projet passés
            </Button>
            <Button
              onClick={() => navigate("contact")}
              className={styles.menuLinks}
              color="inherit"
            >
              Contact
            </Button>
            {userLinks}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.menuButton}
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={() => navigate("teams")}>
            <ListItemText primary="Les teams" />
          </ListItem>
          <ListItem button onClick={() => navigate("old-projects")}>
            <ListItemText primary="Projet passes" />
          </ListItem>
          <ListItem button onClick={() => navigate("contact")}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={() => navigate("projectEventManager")}>
            <ListItemText primary="Outil" />
          </ListItem>
          {userLinksMobile}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
