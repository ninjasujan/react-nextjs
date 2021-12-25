import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData: any) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
