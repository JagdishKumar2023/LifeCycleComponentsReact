import React from "react";

export default class CounterUpDate extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidUpdate(pP, pS, sS) {
    console.warn("method Called", pS);
  }
  render() {
    return (
      <div>
        <h1>componentsDidUpdat life cycle Method</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update Counter {this.state.counter}
        </button>
      </div>
    );
  }
}
