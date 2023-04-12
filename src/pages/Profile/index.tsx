import { Box, Container, Typography } from "@mui/material";
import Image from "../../components/Image";
import img from "../../assets/images/Ellipse 6.png";
import ProfileCard from "./ProfileCard";
import classes from "./classes.module.scss";

const Profile = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        textAlign: "center",
        mb: "140px",
      }}
    >
      <Image
        src={img}
        alt="profile picture"
        sx={{
          width: "178px",
          mt: "140px",
          mb: "90px",
        }}
      />
      <Box className={classes.wrapper}>
        <Box
          sx={{
            flex: "1 1 100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className={classes.gap}
        >
          <ProfileCard color="#E72170">
            <Typography variant="h2" mb={4}>
              A propos de moi :
            </Typography>
            <Typography variant="body1" mb={4}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.
            </Typography>
          </ProfileCard>

          <ProfileCard color="#FCBD13">
            <Typography variant="h2" mb={4}>
              Participation
            </Typography>
            <Typography gutterBottom>Hackathon #1</Typography>
            <Typography gutterBottom>Hackathon #2</Typography>
            <Typography gutterBottom>Hackathon #3</Typography>
          </ProfileCard>
        </Box>
        <Box
          sx={{
            flex: "1 1 100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className={classes.gap}
        >
          <ProfileCard color="#4D7ABD">
            <Typography variant="h2" mb={4}>
              Je suis :
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "700",
              }}
            >
              Nom : <Typography component="span">Lenan</Typography>
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "700",
              }}
            >
              Prénom : <Typography component="span">Antoine</Typography>
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "700",
              }}
            >
              Age : <Typography component="span">22</Typography>
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "700",
              }}
            >
              Filière :{" "}
              <Typography component="span">Communication digitale</Typography>
            </Typography>
          </ProfileCard>
          <ProfileCard color="#5E4A98">
            <Typography variant="h2" mb={4}>
              Ma Team :
            </Typography>
            <Typography gutterBottom>#NomsPrénomFilièreChefdeProjet</Typography>
            <Typography gutterBottom>#NomsPrénomFilière</Typography>
            <Typography gutterBottom>#NomsPrénomFilière</Typography>
            <Typography gutterBottom>#NomsPrénomFilière</Typography>
            <Typography gutterBottom>#NomsPrénomFilière</Typography>
          </ProfileCard>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
