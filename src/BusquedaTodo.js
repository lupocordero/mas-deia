import React from "react";
import "./BusquedaTodo.css";

function BusquedaTodo({ searchValue, setSearchValue }) {
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
