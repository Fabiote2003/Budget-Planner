import React from "react"
import Header from "../components/Header"
import { useState, useEffect } from "react"
import iconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from "../components/Modal";
import ListadoGastos from "../components/ListadoGastos";
import Filtros from "../components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem("presupuesto")) || 0);
  const [esValido, setEsValido] = useState(false);
  const [listaGastos, setListaGastos] = useState(JSON.parse(localStorage.getItem("gastos")) || []);
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})
  const [filtro, setFiltro] = useState("")
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  function deleteExpense (id) {
    const gastoActualizado = listaGastos.filter((gasto) => gasto.id != id);
    setListaGastos(gastoActualizado)
  }

  useEffect(() => {
    if(filtro) {
      //Filtrar Gastos por categoria
      const gastosFiltrado = listaGastos.filter(gasto => gasto.category === filtro);
      setGastosFiltrados(gastosFiltrado);
    }
  }, [filtro])

  useEffect(() => {
    if(Object.keys(gasto).length > 0) {
      setModal(true)
    }
  }, [gasto])

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto)
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if(presupuestoLS > 0) {
      setEsValido(true)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(listaGastos))
  }, [listaGastos])

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
      listaGastos={listaGastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setEsValido={setEsValido}
      esValido = {esValido}
      setListaGastos={setListaGastos}

      />
      {modal && <Modal setModal={setModal} 
      listaGastos={listaGastos} 
      setListaGastos={setListaGastos}
      gasto={gasto}
      setGasto={setGasto}
      
      />
      }
      {esValido && (
        <>
          <main className="main-container">
            <Filtros filtro={filtro} setFiltro={setFiltro}/>
            <ListadoGastos listaGastos={listaGastos} deleteExpense={deleteExpense}
            setGasto={setGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="new-expense"
          onClick={() => setModal(true)}
          >
              <img src={iconoNuevoGasto} alt="icono de nuevo gasto" />
          </div>
        </>
      )}
    </div>
    
  )
}

export default App
