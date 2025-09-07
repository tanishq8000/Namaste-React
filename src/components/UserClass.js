import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "child did mount");
    const data = await fetch("https://api.github.com/users/tanishq8000");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "child render");

    return (
      <div className="bg-white rounded-xl shadow-lg p-8 m-5 text-center max-w-sm min-h-[400px] flex flex-col justify-center items-center font-sans transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
        <img
          src={avatar_url}
          className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover mb-5"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Name : {name}
        </h2>
        <h3 className="text-lg font-normal text-gray-600 mb-1">
          Location : {location}
        </h3>
        <h4 className="text-sm text-gray-500 leading-normal mt-2">{bio}</h4>
      </div>
    );
  }
}

export default UserClass;
