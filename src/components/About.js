import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
      <div className="bg-gray-50 p-10 text-center font-sans mt-24">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">About Us</h1>

        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1>( Logged in as : {loggedInUser} )</h1>;
          }}
        </UserContext.Consumer>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          This is a page about our application and the amazing team behind it.
        </p>

        <div className="flex flex-wrap justify-center gap-8 p-5">
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
