import React from "react";
export class User extends React.Component {
  render() {
    console.warn("Render method", this.props);
    return (
      <div>
        <h1>User Components{this.props.name}</h1>
      </div>
    );
  }
}
