import React from "react";
import "./BotonTodo.css";


function BotonTodo(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { BotonTodo };
