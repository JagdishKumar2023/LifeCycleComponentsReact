import React from "react";
import Home from "./Home";

export default class CounterValue extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Get Drived stata form Props {this.state.data}</h1>
        <Home data={this.state.data} />
        <button
          onClick={() => {
            this.setState({ data: this.state.data + 1 });
          }}
        >
          Make ++{" "}
        </button>
      </div>
    );
  }
}
