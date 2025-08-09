import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <h2>This application is all about Online Food Delivery</h2>
      <UserClass
        name={"Tanishq Khandelwal (class props)"}
        location={"Bengaluru"}
      />
    </div>
  );
};

export default About;
