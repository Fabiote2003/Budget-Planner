import React, { useState, useEffect} from 'react'
import iconoCerrarModal from '../src/img/cerrar.svg'
import Mensaje from './Mensaje';
const Modal = ({setModal, listaGastos, setListaGastos, gasto, setGasto}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const formulario = document.querySelector('#formulario')
  const modalContainer = document.querySelector(".modal");
  const [mensaje, setMensaje] = useState('')
  
  useEffect(() => {
    if(Object.keys(gasto).length > 0) {
      setName(gasto.name);
      setAmount(gasto.amount)
      setCategory(gasto.category)
    }
  }, [gasto])
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
}


const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha);
  const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
  }
  return fechaNueva.toLocaleDateString('en-EN', opciones);
}

  function handleSubmit(e) {
    e.preventDefault();
    if([name, amount, category].includes("")) {
      setMensaje('Todos los campos deben ser completados')      
      return;
    }

    const objetoGasto = {
      name, 
      amount, 
      category,
      id: generarId(),
      fecha: formatearFecha(Date.now())
    }

    if(gasto.id) {
      objetoGasto.fecha = gasto.fecha;
      objetoGasto.id = gasto.id;
      const gastosActualizados = listaGastos.map(gastoElemento => gasto.id == gastoElemento.id ? objetoGasto : gastoElemento);
      setListaGastos(gastosActualizados);
      
    }else {
      setListaGastos([...listaGastos, objetoGasto])
    }

    

    
   


    formulario.classList.add('slide-out-top')
    
    setTimeout(() => {
      modalContainer.classList.add('slide-out-bck-center')
    }, 300);
    setTimeout(() => {
      setModal(false);
      setGasto({})
    }, 500);
    
    
  }

  function eliminarModal() {
    setModal(false);
    setGasto({});
  }

  return (
    <div className='modal'>
         <div className="cerrar" onClick={() => eliminarModal()}  title="Close">
              <img src={iconoCerrarModal} alt="icono de nuevo gasto" />
          </div>
          
          <form className="formulario bounce-in-top" id='formulario' onSubmit={handleSubmit}>
            <p className='formulario__title'>{gasto.id ? 'UPDATE EXPENDITURE' : 'NEW EXPENDITURE'}</p>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='form-field'>
              <label htmlFor='nombreGasto'>Expense Name</label>
              <input type="text" id='nombreGasto'
              placeholder='Enter name of expense'
              value={name}
              onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-field'>
              <label htmlFor='cantidadGasto'>Amount</label>
              <input type="number" id='cantidadGasto'
              placeholder='Enter amount of money'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className='form-field'>
            <label>Category</label>
            <select id="categoría" 
            onChange={(e) => setCategory(e.target.value)}
            value={category}>
              <option value="">-- Select --</option>
              <option value="Saving">-- Saving --</option>
              <option value="Food">-- Food --</option>
              <option value="Home">-- Home --</option>
              <option value="Leisure">-- Leisure --</option>
              <option value="Health">-- Health --</option>
              <option value="Miscellaneous expenses">-- Miscellaneous expenses --</option>
              <option value="Suscriptions">-- Suscriptions --</option>
            </select>
            </div> 
            
          <button className='form__submit-button' title='Add' type='submit'>{gasto.id ? 'UPDATE' : 'ADD'}</button>
          
          </form>
    </div>
  )
}

export default Modal