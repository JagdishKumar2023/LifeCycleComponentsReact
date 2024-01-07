// import React, { useState } from "react";
// import ClassComponent from "./components/ClassComponent";
// import { User } from "./components/User";
// import { CounterUpDate } from "./components/CounterUpDate";
// import CounterUpDate from "./components/CounterUpDate";
import Home from "./components/Home";
import CounterValue from "./components/CounterValue";

const App = () => {
  // const [name, setName] = React.useState(" Anil");

  return (
    <div className="App">
      {/* <CounterUpDate /> */}
      <CounterValue />
      <Home />
      {/* <User name={name} /> */}
      {/* <button onClick={() => setName(" sidhu")}>UpDate Name</button> */}
    </div>
  );
};

// basic knowlegde of life cycle methods .

// class App extends React.Component {
//   constructor() {
//     super();
//     // console.warn("contructor");
//     this.state = {
//       data: " Anil",
//     };
//   }

//   render() {
//     // console.warn("render");
//     return <h1>Hello world{this.state.data}</h1>;
//   }
// }

export default App;
