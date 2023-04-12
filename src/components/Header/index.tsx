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
import logo from "../../assets/Rectangle 26.svg";
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
    <ListItemText onClick={() => navigate("user-profile")} className={styles.menuLinks} color="inherit">
      Porfile
    </ListItemText>
  ) : (
    <ListItemText onClick={() => navigate("login")} className={styles.menuLinks} color="inherit">
      Connexion
    </ListItemText>
  );

  return (
    <Box>
      <AppBar className={styles.container} position="static" sx={{ background: "black" }}>
        <Toolbar sx={{ display: { xs: "flex", md: "flex" }, flexWrap: "wrap" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img onClick={() => navigate("/")} className={styles.logo} src={logo} alt="" />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button onClick={() => navigate("teams")} className={styles.menuLinks} color="inherit">
              Les teams
            </Button>
            <Button onClick={() => navigate("old-projects")} className={styles.menuLinks} color="inherit">
              Projet passes
            </Button>
            <Button onClick={() => navigate("contact")} className={styles.menuLinks} color="inherit">
              Contact
            </Button>
            <Button onClick={() => navigate("projectEventManager")} className={styles.menuLinks} color="inherit">
              Outil
            </Button>
            {userLinks}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
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
          <ListItem button>{userLinks}</ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
