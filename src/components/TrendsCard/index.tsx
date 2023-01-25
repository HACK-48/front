import React from "react";
import classes from "./classes.module.scss";

interface TrendsCardProps {
  title: string;
  image: string;
  description: string;
}
const TrendsCard = (props: TrendsCardProps) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <img src={props.image} />
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default TrendsCard;
