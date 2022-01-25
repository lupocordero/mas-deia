import React from "react";
import "./ContadorTodo.css";

function ContadorTodo({total, completed}) {
  return <h2 className="TodoCounter"> {completed} de {total} Tareas completadas</h2>;
}

export {ContadorTodo};
