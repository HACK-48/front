import React from 'react';
import classes from './classes.module.scss';

const Contact = () => {
  return (
    <div className={classes.container}>
        <h1>Nous contacter</h1>
        <div className='info'>
            <div>
                <h3>Adresse</h3>
                <p>Sophie lafitte</p>
            </div>
            <div>
                <h3>Numéro de téléphone</h3>
                <a href="tel:+33632123289">+33 63 21 23 28 49</a>
            </div>
        </div>
    </div>
  )
}

export default Contact;