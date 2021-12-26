import React from "react";
import classes from "./MeetupDetails.module.css";

type propType = {
  image: string;
  title: string;
  address: string;
  description: string;
};

const MeetupDetail: React.FC<propType> = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
