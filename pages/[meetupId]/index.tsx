import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { SERVER_URL } from "../../constant/app.constant";

interface IMeetup {
  _id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

type propType = {
  meetup: IMeetup;
};

const MeetupDetails: React.FC<propType> = (props) => {
  const router = useRouter();

  // fallback page to display in dynamic page generation
  if (router.isFallback) {
    return <h4>Loading.....</h4>;
  }

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
  const response = await fetch(`${SERVER_URL}/api/meetups?limit=3`, {
    method: "GET",
  });
  const meetups: Array<IMeetup> = await response.json();
  const meetupPaths = meetups.map((meet) => {
    return {
      params: { meetupId: meet._id.toString() },
    };
  });
  return {
    fallback: true,
    paths: meetupPaths,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const _id = context.params?.meetupId;
  const response = await fetch(`${SERVER_URL}/api/meetup?_id=${_id}`, {
    method: "GET",
  });
  const meetup: IMeetup = await response.json();
  if (!meetup._id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      meetup,
    },
  };
};

export default MeetupDetails;
