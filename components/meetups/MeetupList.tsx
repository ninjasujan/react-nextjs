import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

type arryType = {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
};

type propType = {
  meetups: Array<arryType>;
};

const MeetupList: React.FC<propType> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
