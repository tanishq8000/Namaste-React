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
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          This is a page about our application and the amazing team behind it.
        </p>

        <div className="team-container">
          <UserClass
            name={"Tanishq Khandelwal (from About Us)"}
            location={"Bengaluru"}
          />
          <UserClass name={"Elon Musk"} location={"Mars"} />
        </div>
      </div>
    );
  }
}

export default AboutClass;
