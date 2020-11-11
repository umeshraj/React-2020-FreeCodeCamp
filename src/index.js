import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "A Wealth of Pigeons: A Cartoon Collection";
  const author = "Steve Martin";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>

      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
