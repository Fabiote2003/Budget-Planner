import React from 'react'
import iconoAhorro from '../src/img/icono_ahorro.svg'
import iconoSalud from '../src/img/icono_salud.svg'
import iconoOcio from '../src/img/icono_ocio.svg'
import iconoSuscripcion from '../src/img/icono_suscripciones.svg'
import iconoCasa from '../src/img/icono_casa.svg'
import iconoGastosVarios from '../src/img/icono_gastos.svg'
import iconoComida from '../src/img/icono_comida.svg'
import editarIcono from '../src/img/bx-edit-alt.svg'
import eliminarIcono from '../src/img/bx-trash.svg'

const gastoDiccionario = {
  Saving : iconoAhorro,
  Food: iconoComida,
  Home: iconoCasa,
  Leisure: iconoOcio,
  Health: iconoSalud,
  "Miscellaneous expenses": iconoGastosVarios,
  Suscriptions: iconoSuscripcion,
}

const Gasto = ({gasto, deleteExpense, setGasto}) => {
  const {name, amount, category, fecha, id} = gasto
  
  

  return (
        <div className='expense-item '>
            <div className='expense-image'>
              <img src={gastoDiccionario[category]} alt="Icono de gasto"/>
            </div>
            <div className="expense-info">
              <p className='expense-info__category'>{category}</p>
              <p className='expense-info__name'>{name}</p>
              <p><span>Added on: </span>{fecha}</p>
            </div>
            <p className='expense-amount'>${amount}</p>
            <div className='expense-item__buttons'>
              <button className='edit-button' title='Edit' onClick={() => setGasto(gasto)}><img src={editarIcono}></img></button>
              <button className='delete-button' title='Delete' onClick={()=> deleteExpense(id)}><img src={eliminarIcono}></img></button>
              
            </div>
        </div>
  )
}

export default Gasto