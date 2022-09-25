import React from 'react'
import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from 'sweetalert2';

const ControlPresupuesto = ({presupuesto, listaGastos, setListaGastos, setPresupuesto, setEsValido}) => {
  
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0); 
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => { 
    
    let totalGastado = 0;
    for(let i = 0; i < listaGastos.length; i++) {
      totalGastado = listaGastos[i].amount + totalGastado;
    }
    setDisponible(presupuesto - totalGastado)
    setGastado(totalGastado);
    
  }, [listaGastos])
  
  useEffect(() => {
    
     setPorcentaje(gastado/presupuesto);
   
    
  }, [gastado])
  
  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        }
    )
  }

  //"RESET APP", "Are you sure you want to reset the application?", "question"
  function resetApp() {
    Swal.fire({ 
      title: "Are you sure you want to reset the application?",
      icon: "question",
      showDenyButton: true,
      denyButtonText: "NO",
      denyButtonColor:"#dc2626",
      confirmButtonText: "YES",
      confirmButtonColor: "green",
      width:"400px",
      height: "400px"
    }).then(response => {
      if(response.isConfirmed) {
        setListaGastos([]);
        setPresupuesto(0);
        setEsValido(false);
      }else {
        return;
      }
    })
    
  }


  return (
    <div className="control-budget">
        <div className='control-budget-graphic'>
          <CircularProgressbar value={gastado} maxValue={presupuesto} text={`${(porcentaje * 100).toFixed(2)}%`} styles={buildStyles({
            pathColor: disponible < 0 ? '#dc2626' : '#3b82f6',
            textColor: disponible < 0 ? '#dc2626' : '#3b82f6'
          })}/>
        </div>
        <div>
            <button className='reset-app__button' onClick={resetApp}>RESET APP</button>
            <p className='control-budget__item'><span>Budget: </span> {formatearPresupuesto(presupuesto)}</p>
            <p className={disponible < 0 ? 'negativo' : 'control-budget__item'}><span>Available: </span> {formatearPresupuesto(disponible)}</p>
            <p className='control-budget__item'><span>Spent: </span> {formatearPresupuesto(gastado)}</p>
        </div>
    </div>
  )
}

export default ControlPresupuesto