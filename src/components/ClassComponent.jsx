import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    console.log("inside contructor...");
    super();
    this.state = {
      fname: "kaniska lunia",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      fname: "Sonu",
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
  }

  render() {
    console.log("inside render...");
    return (
      <div>
        <p>My name is {this.state.fname}</p>
      </div>
    );
  }
}

export default ClassComponent;
