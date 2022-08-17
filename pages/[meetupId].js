import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
const MeetupDetails = ({ meetupData }) => {
  // const router = useRouter();
  // const id = router.query.meetupId;

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://as_simform:xeVxxhmpHU4TpTVW@cluster0.ze4ag0i.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  //fetch api

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://as_simform:xeVxxhmpHU4TpTVW@cluster0.ze4ag0i.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
