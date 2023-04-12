import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, Grid } from "@mui/material";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import rank1 from "../../assets/medaille_1.svg";
import rank2 from "../../assets/medaille_2.svg";
import rank3 from "../../assets/medaille_3.svg";

interface IProps {
  title?: string;
  description?: string;
  img?: string;
  link?: string;
  rank?: number;
}

const testDesc = ` Nisi laborum esse ex tempor. Fugiat nulla culpa mollit duis ut ut
eiusmod. Proident et sit deserunt labore do in nisi. Officia id
commodo magna elit laborum ipsum commodo elit nisi voluptate. Sint
nostrud et proident aliqua do ea ad adipisicing sunt laboris. Sint
et consectetur do sint labore cillum laboris cupidatat occaecat
fugiat Lorem adipisicing officia. In ea adipisicing minim velit
officia nulla. Quis est occaecat magna excepteur et ea fugiat
exercitation.`;

const ProjectCard = ({
  title = "Nom de l'equipe",
  description = testDesc,
  img = "https://picsum.photos/200/300",
  link = "/",
  rank = 1,
}: IProps) => {
  const navigate = useNavigate();

  const limitText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  const rankImg = (r: number) => {
    switch (r) {
      case 1:
        return rank1;
      case 2:
        return rank2;
      case 3:
        return rank3;
      default:
        return undefined;
    }
  };

  const currentRank = rankImg(rank);

  const srSet = `${img}?resize=200 200w, ${img}?resize=400 400w`;
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent className={styles.container}>
        <Grid className={styles.gridContainer} container spacing={2}>
          <Grid className={styles.firstGrid} item xs={12} md={8}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <div className={styles.titleContainer}>
                <img src={currentRank} alt="" />
                <h2>{title}</h2>
              </div>
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography
              className={styles.description}
              sx={{ mb: 1 }}
              color="text.secondary"
            >
              {limitText(description, 300)}
            </Typography>
            <CardActions className={styles.learnMore}>
              <Button onClick={() => navigate(link)} size="small">
                Voir plus
              </Button>
            </CardActions>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2">
              <CardMedia
                className={styles.media}
                component="img"
                image={img}
                srcSet={srSet}
                sizes="(max-width: 600px) 200px, 400px"
                alt="Paella dish"
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
