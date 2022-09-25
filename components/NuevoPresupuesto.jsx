import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje';
const nuevoPresupuesto = ({presupuesto, setPresupuesto, setEsValido}) => {
  
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(presupuesto > 0 ) {
      setEsValido(true)
      return;
    }
    
    setMensaje('Presupuesto no valido')
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  }

  return (
    <div className='new-budget'>
       <form className='budget-form'
       onSubmit={handleSubmit}>
          <label>Define Budget</label>
          <input type="number" 
          placeholder='Enter your budget'
          value={presupuesto}
          onChange={e => setPresupuesto(Number(e.target.value))}
          />
          <button type="submit">ADD</button>
       </form>
      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
    </div>
  )
}

export default nuevoPresupuesto