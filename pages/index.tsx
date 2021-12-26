import MeetupList from "../components/meetups/MeetupList";
import { AppProps } from "next/dist/shared/lib/router/router";
import { GetStaticProps } from "next";

type meetType = {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
};

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

interface propType extends AppProps {
  meetups: Array<meetType>;
}

function HomePage(props: propType) {
  return <MeetupList meetups={props.meetups} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
