import React from "react";
import "./BotonTodo.css";


function BotonTodo(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Acá se abre el modal")}
    >
      +
    </button>
  );
}

export { BotonTodo };
