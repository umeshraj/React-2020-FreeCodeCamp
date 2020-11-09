import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91gGvLMWwhL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>A Wealth of Pigeons: A Cartoon Collection</h1>;

const Author = () => <h4>Steve Martin</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
