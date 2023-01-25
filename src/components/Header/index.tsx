import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "../NavBar";
import Hero from "../Hero";

const Header = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};

export default Header;
