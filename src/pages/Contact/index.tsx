import image from "../../assets/contact_image.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Card, CardContent, Grid, Typography, Link } from "@mui/material";
import { blue } from "@mui/material/colors";

const Contact = () => {
  return (
    <Box sx={{ display: "grid" }}>
      <Box component="img" sx={{ justifySelf: "center" }} src={image} alt="homme d'affaire marche sur un chemin" />
      <Typography my={4} textAlign="center" variant="h4" color="initial">
        Contactez nous
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="elevation" sx={{ height: "100%", backgroundColor: blue[50] }}>
            <CardContent sx={{ textAlign: "center" }}>
              <InstagramIcon sx={{ fontSize: "72px", m: 4 }} />
              <Typography gutterBottom variant="h5" color="initial">
                Notre Instagram
              </Typography>
              <Typography variant="body1">
                <Link href="https://www.instagram.com/hack48_/" target="_blank">
                  hack48_
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elevation" sx={{ height: "100%", backgroundColor: blue[50] }}>
            <CardContent sx={{ textAlign: "center" }}>
              <EmailIcon sx={{ fontSize: "72px", m: 4 }} />
              <Typography gutterBottom variant="h5" color="initial">
                Mail support
              </Typography>
              <Typography variant="body1">hack48placeholder.mail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elevation" sx={{ height: "100%", backgroundColor: blue[50] }}>
            <CardContent sx={{ textAlign: "center" }}>
              <AccountCircleIcon sx={{ fontSize: "72px", m: 4 }} />
              <Typography gutterBottom variant="h5" color="initial">
                Placeholder
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magni sint mollitia!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
