import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "A Wealth of Pigeons: A Cartoon Collection",
    author: "Steve Martin",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
    title: "Humans",
    author: "Brandon Stanton",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg",
    title: "The Deep End (Diary of a Wimpy Kid Book 15)",
    author: "Jeff Kinney",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = (e) => {
    // alert("Hello, world");
    console.log(e.target);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
