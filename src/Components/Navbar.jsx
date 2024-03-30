import React from 'react'
import { Link } from "react-router-dom"
import { useDentistStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useDentistStates()

  return (
    <div>
    <nav className={state.darkMode ? 'dark' : 'nav' }>
      <ul  >
        <Link to="/">Home</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contacto">Contacto</Link>
      </ul>
      {state.darkMode ? <button onClick={() => dispatch({ type: "CHANGE_MODE" })}>☀️</button>: 
      <button onClick={() => dispatch({ type: "CHANGE_MODE" })}>🌑</button> }
    </nav>
    </div>
  )
}

export default Navbar