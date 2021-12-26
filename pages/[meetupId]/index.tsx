import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

type propType = {
  meetup: {
    image: string;
    title: string;
    address: string;
    description: string;
  };
};

const MeetupDetails: React.FC<propType> = (props) => {
  return (
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const meetupId = context.params?.meetupId;

  return {
    props: {
      meetup: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
        id: meetupId,
      },
    },
  };
};

export default MeetupDetails;
