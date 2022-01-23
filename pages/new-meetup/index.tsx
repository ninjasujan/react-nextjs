import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage: React.FC<{}> = (props) => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: any) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
