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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { uiState } from "../redux/store/ui.store";
import { setLoader } from "../redux/store/ui.store";

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
  const { loading } = useAppSelector(uiState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoader(true));
    document.cookie = "name=sujan";
    document.cookie = "expires=3600";
  }, []);

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

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   console.log(context.req.cookies);
//   return {
//     props: {
//       meetups: [],
//     },
//   };
// };

export default HomePage;
