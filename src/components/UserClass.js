import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      count1: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count1 : {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Web Application Developer</h4>
      </div>
    );
  }
}

export default UserClass;
