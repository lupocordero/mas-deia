import React from "react";
import { ContadorTodo } from "../ContadorTodo";
import { BusquedaTodo } from "../BusquedaTodo";
import { ListaTodos } from "../ListaTodos";
import { Todo } from "../Todo";
import { BotonTodo } from "../BotonTodo";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <ContadorTodo total={totalTodos} completed={completedTodos} />
      <BusquedaTodo searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListaTodos>
        {searchedTodos.map((todo) => (
          <Todo
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ListaTodos>
      <BotonTodo />
    </>
  );
}

export { AppUI };
