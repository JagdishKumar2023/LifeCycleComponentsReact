import { render } from "@testing-library/react";
import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
    };
  }

  static getDrivedStateFromProps(props, state) {
    {
      console.warn("hook", props, state);
      return {
        currentValue: props.data * 10,
      };
    }
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Current Value: {this.state.currentValue}</h1>
      </div>
    );
  }
}
