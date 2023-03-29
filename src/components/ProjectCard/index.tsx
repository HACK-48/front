import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import styles from "./styles.module.scss";

interface IProps {
  title?: string;
  description?: string;
  img?: string;
  link?: string;
}
const ProjectCard = ({
    title = '',
    description = '',
    img = '',
    link
}: IProps) => {
  return (
    <>
      <CardContent className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Card title
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              description
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              <img src="" alt="" />
              image here
            </Typography>
          </Grid>
        </Grid>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </>
  );
};

export default ProjectCard;
