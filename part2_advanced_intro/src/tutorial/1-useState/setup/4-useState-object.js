import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello, world" });
    setMessage("Hello world");
  };

  // use state for each key
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState("random message");

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
