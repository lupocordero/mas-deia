import React from "react"
import { TodoContext } from "../TodoContext";
import "./ContadorTodo.css";

function ContadorTodo() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return <h2 className="TodoCounter"> {completedTodos} de {totalTodos} Tareas completadas</h2>;
}

export {ContadorTodo};
