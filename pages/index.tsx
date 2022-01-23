import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { AppProps } from "next/dist/shared/lib/router/router";
import {
  GetServerSideProps,
  GetStaticProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import { SERVER_URL } from "../constant/app.constant";

type meetType = {
  _id: string;
  title: string;
  image: string;
  address: string;
  description: string;
};

interface propType extends AppProps {
  meetups: Array<meetType>;
}

const HomePage: React.FC<propType> = (props) => {
  return (
    <React.Fragment>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(`${SERVER_URL}/api/meetups`, {
    method: "GET",
  });
  const meetups = await response.json();
  return {
    props: {
      meetups,
    },
    revalidate: 100,
  };
};

export default HomePage;
