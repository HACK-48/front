import image from "../../assets/contact_image.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Link,
  Container,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import ContactForm from "../../components/ContactForm";
import logoInstagram from "../../assets/instagram-circle.png";
import logoTiktok from "../../assets/tiktok-circle.png";

const Contact = () => {
  return (
    <Container maxWidth="xl" sx={{ my: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h4" component="h2" fontWeight={700}>
              Suivez-nous
            </Typography>
            <Box>
              <Link sx={{ mr: 2 }} href="https://www.instagram.com/hack48_/">
                <img src={logoInstagram} alt="logo instagram" />
              </Link>
              <Link href="https://www.tiktok.com/@hack48ynov?_t=8bQhASfK9d0&_r=1">
                <img src={logoTiktok} alt="logo tiktok" />
              </Link>
            </Box>
            <Typography variant="body1" sx={{ color: "grey" }}>
              Copyright 2023 - Site crée par Hack’48 - Mentions Légales
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
