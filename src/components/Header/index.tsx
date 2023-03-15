import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles.module.scss";
import logo from "../../assets/Rectangle 26.svg";
import { redirect, useNavigate } from "react-router-dom";

interface IProps {
  isAuth?: boolean;
}

const Header = ({ isAuth = false }: IProps) => {
  const navigate = useNavigate();

  const userLinks = isAuth ? (
    <Button
      onClick={() => navigate("user-profile")}
      className={styles.menuLinks}
      color="inherit"
    >
      Porfile
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

  return (
    <AppBar
      className={styles.container}
      position="static"
      sx={{ mb: 5, background: "black" }}
    >
      <Toolbar>
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* This is a placeholder don't know if it will be replaced by logo */}
          <img
            onClick={() => navigate("/")}
            className={styles.logo}
            src={logo}
            alt=""
          />
        </Typography>
        <Button
          onClick={() => navigate("teams")}
          className={styles.menuLinks}
          color="inherit"
        >
          Les teams
        </Button>
        <Button
          onClick={() => navigate("old-porjects")}
          className={styles.menuLinks}
          color="inherit"
        >
          Projet passes
        </Button>
        <Button
          onClick={() => navigate("contact")}
          className={styles.menuLinks}
          color="inherit"
        >
          Contact
        </Button>
        {userLinks}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
