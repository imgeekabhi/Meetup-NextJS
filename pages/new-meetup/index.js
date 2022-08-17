import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Meetup Form</title>
        <meta
          name="description"
          content="Here you can add amazing new meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
