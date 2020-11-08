import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>This is Umesh and this is my first component</h4>;
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
