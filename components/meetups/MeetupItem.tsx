import React from "react";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

type propType = {
  image: string;
  address: string;
  title: string;
  id: string;
};

const MeetupItem: React.FC<propType> = (props) => {
  const router = useRouter();

  const showMeetHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showMeetHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
