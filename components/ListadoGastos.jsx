import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({listaGastos, deleteExpense, setGasto, filtro, gastosFiltrados}) => {
  const gastosHTML = listaGastos.map((gasto) => 
    <Gasto gasto={gasto} key={gasto.id} deleteExpense={deleteExpense} setGasto={setGasto}/>
   )
  return (
    <div className='expenses-container'>
      

        {
        filtro ? (
          <>
            {gastosFiltrados.length > 0 ? <h1 className='expenses-container-title'>Expenses List</h1> : <h1 className='expenses-container-title'>There are no expenses</h1>}
            {
            gastosFiltrados.map((gasto) => 
            <Gasto gasto={gasto} key={gasto.id} deleteExpense={deleteExpense} setGasto={setGasto}/>
            )}
          </>
        ) 
       : (
        <>
            {listaGastos.length > 0 ? <h1 className='expenses-container-title'>Expenses List</h1> : <h1 className='expenses-container-title'>Add Expenses</h1>}
            {gastosHTML}
         </>
        ) 
        }
        
    </div>
  )
}

export default ListadoGastos