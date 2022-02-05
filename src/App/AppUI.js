import React from "react";
import { TodoContext } from "../TodoContext";
import { ContadorTodo } from "../ContadorTodo";
import { BusquedaTodo } from "../BusquedaTodo";
import { ListaTodos } from "../ListaTodos";
import { Todo } from "../Todo";
import { BotonTodo } from "../BotonTodo";
import { Modal } from "../Popup"

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);

  return (
    <>
      <ContadorTodo />
      <BusquedaTodo />
          <ListaTodos>
          {error && <p>Error</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primera tarea</p>}
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
        {!!openModal && (
          <Modal>
          <p> Tele </p>
        </Modal>
        )}
      <BotonTodo setOpenModal={setOpenModal}/>
    </>
  );
}

export { AppUI };
