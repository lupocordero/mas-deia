import React from "react";
import "./BotonTodo.css";


function BotonTodo(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <>
    
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +  
    </button>
    </>
  );
}

export { BotonTodo };
