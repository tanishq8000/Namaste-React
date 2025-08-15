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
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>{bio}</h4>
      </div>
    );
  }
}

export default UserClass;
