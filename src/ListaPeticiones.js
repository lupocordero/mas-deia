import React from "react";

function ListaPeticiones(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { ListaPeticiones };
