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
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>A Wealth of Pigeons: A Cartoon Collection</h1>

      <h4>Steve Martin</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
