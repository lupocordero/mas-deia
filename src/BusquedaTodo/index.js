import React from "react";
import { TodoContext } from "../TodoContext";
import "./BusquedaTodo.css";

function BusquedaTodo() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="añada tarea"
      onChange={onSearchValue}
      value={searchValue}
    />
  );
}

export { BusquedaTodo };
