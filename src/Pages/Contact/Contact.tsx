import React from 'react';
import classes from './classes.module.scss';

const Contact = () => {
  return (
    <div className={classes.container}>
        <h1>Nous contacter</h1>
        <div className={classes.info}>
            <div className={`${classes.contactCard} ${classes.adresse}`}>
                <h3>Adresse</h3>
                <p>Sophie lafitte</p>
            </div>
            <div className={`${classes.contactCard} ${classes.phone}`}>
                <h3>Numéro de téléphone</h3>
                <a href="tel:+33632123289">+33 6 21 23 28 49</a>
            </div>
            <div className={`${classes.contactCard} ${classes.mail}`}>
                <h3>Email</h3>
                <a href="mailto:hackathon@mail.com">hackathon@mail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Contact;