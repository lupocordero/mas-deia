//import './App.css';
import React from "react";
import { ContadorPeticion } from "./ContadorPeticion";
import { BusquedaPeticion } from "./BusquedaPeticion";
import { ListaPeticiones } from "./ListaPeticiones";
import { Peticion } from "./Peticion";
import { BotonPeticion } from "./BotonPeticion";

const peticiones = [
  { text: "Recojer cacas de perro", completed: false },
  { text: "Prohibir quemas", completed: false },
  { text: "Añadir botes de basura", completed: false },
];

function App() {
  return (
    <>
      <ContadorPeticion />
      <BusquedaPeticion />
      <ListaPeticiones>
        {peticiones.map(peticion => (
          <Peticion key={peticion.text} text={peticion.text} />
        ))}
      </ListaPeticiones>
      <BotonPeticion />
    </>
  );
}

export default App;
