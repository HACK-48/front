import React from "react";
import classes from "./classes.module.scss";
import image from "../../assets/contact_image.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div className={classes.container}>
      <img src={image} alt="contact logo" />
      <h1>Nous contacter</h1>
      <div className={classes.info}>
        <div className={`${classes.contactCard} ${classes.adresse}`}>
          <span>
            <LocationOnIcon className={classes.icons} htmlColor="white" />
          </span>
          <div>
            <h3>Adresse</h3>
            <p>Sophie lafitte</p>
          </div>
        </div>
        <div className={`${classes.contactCard} ${classes.phone}`}>
          <span>
            <LocalPhoneIcon className={classes.icons} htmlColor="white" />
          </span>
          <div>
            <h3>Numéro de téléphone</h3>
            <a href="tel:+33632123289">+33 6 21 23 28 49</a>
          </div>
        </div>
        <div className={`${classes.contactCard} ${classes.mail}`}>
          <span>
            <EmailIcon className={classes.icons} htmlColor="white" />
          </span>
          <div>
            <h3>Email</h3>
            <a href="mailto:hackathon@mail.com">hackathon@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
