import NuevoPresupuesto from './NuevoPresupuesto' 
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({presupuesto, setPresupuesto, setEsValido, esValido, listaGastos, setListaGastos}) => {

  return (
    <header className='header'>
        <h1 className='header__title'>BUDGET PLANNER</h1>
        {esValido ? (
          <ControlPresupuesto 
            listaGastos={listaGastos}
            presupuesto={presupuesto}
            setListaGastos={setListaGastos}
            setPresupuesto={setPresupuesto}
            setEsValido={setEsValido}
          />
        ) : (
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setEsValido={setEsValido}
              />
            )
        }
    </header>
  )
}

export default Header