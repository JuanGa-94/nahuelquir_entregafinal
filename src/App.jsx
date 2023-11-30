import { useState, useEffect } from 'react';
import './App.css';
import CargarTarea from './components/input';
import ListaDeTareas from './components/TaskList';
import Busqueda from './components/SearchBar';

function getTareasGuardadas() {
  const tareasGuardadas = window.localStorage.getItem("tareas");
  const tareas = JSON.parse(tareasGuardadas);
  return tareas ? tareas : [];
};

function App() {

  const [tareas, setTareas] = useState(getTareasGuardadas());
  const [copiaTareas, setCopiaTareas] = useState(tareas);
  const [busquedaTareas, setBusquedaTareas] = useState("");

  //Nueva tarea 
  const controlAgregarTarea = (descripcion) => {
    const nuevaTarea = {
      id: self.crypto.randomUUID(),
      descripcion: descripcion,
      hecho: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setCopiaTareas([...copiaTareas, nuevaTarea])
  };

  useEffect(() => {
    window.localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //borrar tarea
  const controlBorrarTarea = (id) => {

    const tareasFiltradas = tareas.filter(t => t.id !== id);
    setTareas([...tareasFiltradas]);
    setCopiaTareas([...tareasFiltradas]);
  };

  //modificar hecha 
  const controlTareaHecha = (id) => {
    const tareaModificada = tareas.map(t =>
      t.id === id ? { ...t, hecho: !t.hecho } : t);
    setTareas([...tareaModificada]);
    setCopiaTareas([...tareaModificada]);
  };

  //Búsqueda
  const controlBusquedaQuery = (query) => {
    setBusquedaTareas(query);
    const resultadoBusqueda = tareas.filter(t => t.descripcion.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setCopiaTareas(resultadoBusqueda);

  }

  //Pendientes
  const pendientes = copiaTareas.filter(p => p.hecho === false).length;

  return (
    <>
      <header>
        <h1>¿Qué tengo que hacer?</h1>
      </header>
      <section>

        <CargarTarea onAgregarTarea={(descripcion) => controlAgregarTarea(descripcion)} />
        <ListaDeTareas
          tareas={copiaTareas}
          onBorrarTarea={(id) => controlBorrarTarea(id)}
          onTareaHecha={(id) => controlTareaHecha(id)} />
      </section>


      <aside>
        <h2>Tareas pendientes</h2>
        <p className='tPendientes'>{pendientes}</p>
        <Busqueda onBusqueda={query => controlBusquedaQuery(query)} />
      </aside>
    </>
  )
}

export default App;

