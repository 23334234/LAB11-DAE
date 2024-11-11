import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  const ordenarAscendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => a.fecha - b.fecha);
    setTareas(tareasOrdenadas);
  };
  
  const ordenarDescendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => b.fecha - a.fecha);
    setTareas(tareasOrdenadas);
  };
  
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} />
      <div className="text-center mb-3">
        <button className="btn btn-secondary mr-2" onClick={ordenarAscendente}>
          Ordenar Ascendente
        </button>
        <button className="btn btn-secondary" onClick={ordenarDescendente}>
          Ordenar Descendente
        </button>
      </div>
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );    
}

export default App;
