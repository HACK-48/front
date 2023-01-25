import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import classes from "./classes.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>SLOGAN</h1>
      <h2 className={classes.subtitle}>Meessage</h2>
      <div className={classes.buttonContainer}>
        <Button variant="contained">Voir les challenges</Button>
        <Button variant="contained">
          <KeyboardArrowDownIcon />
        </Button>
        <Button variant="contained">Voir une équipe</Button>
      </div>
    </div>
  );
};

export default Hero;
