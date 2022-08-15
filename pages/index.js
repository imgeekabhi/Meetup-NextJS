import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
    address: "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
    description:
      "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London.",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.thegeographicalcure.com/wp-content/uploads/2022/04/Depositphotos_210765948_XL-1024x683.jpg",
    address: "London SE4 7PJ, United Kingdom",
    description:
      "Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
