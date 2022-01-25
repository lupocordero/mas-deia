import React from "react";
import "./ListaTodos.css";

function ListaTodos(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { ListaTodos };
