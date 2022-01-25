//import './App.css';
import React from "react";
import { ContadorTodo } from "./ContadorTodo";
import { BusquedaTodo } from "./BusquedaTodo";
import { ListaTodos } from "./ListaTodos";
import { Todo } from "./Todo";
import { BotonTodo } from "./BotonTodo";

const defaulttodos = [
  { text: "Recojer cacas de perro", completed: false },
  { text: "Prohibir quemas", completed: false },
  { text: "Añadir botes de basura", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaulttodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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

export default App;
