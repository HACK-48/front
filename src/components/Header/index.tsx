import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles.module.scss";
import logo from "../../assets/Rectangle 26.svg";
import { redirect, useNavigate } from "react-router-dom";

interface IProps {
  isAuth?: boolean;
}

const Header = ({ isAuth = false }: IProps) => {
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

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
    <Box>
      <AppBar
        className={styles.container}
        position="static"
        sx={{ mb: 5, background: "black" }}
      >
        <Toolbar sx={{ display: { xs: "flex", md: "flex" }, flexWrap: "wrap" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
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
          </Box>
        </Toolbar>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate("teams")}>Les teams</MenuItem>
          <MenuItem onClick={() => navigate("old-projects")}>
            Projet passes
          </MenuItem>
          <MenuItem onClick={() => navigate("contact")}>Contact</MenuItem>
          {userLinks}
        </Menu>
      </AppBar>
    </Box>
  );
};
 
export default Header;