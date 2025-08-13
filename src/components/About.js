import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>This application is all about Online Food Delivery</h2>
        <UserClass name={"First"} location={"Bengaluru"} />
        <UserClass name={"Second"} location={"Bengaluru"} />
        <UserClass name={"Third"} location={"Bengaluru"} />
      </div>
    );
  }
}

export default AboutClass;
