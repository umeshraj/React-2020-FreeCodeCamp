import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <h4>This is Umesh and this is my first component</h4>
      <ul>
        <li>
          <a href="#">Hello, World!</a>
        </li>
      </ul>
      <img src="" alt="" />
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
