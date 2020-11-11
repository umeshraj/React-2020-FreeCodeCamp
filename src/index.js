import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Vars
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "A Wealth of Pigeons: A Cartoon Collection",
    author: "Steve Martin",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
    title: "Humans",
    author: "Brandon Stanton",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>Hello, world!</h1>;
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
