import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state, dispatch } = useDentistStates();

  return (
    <>
      <h1>Favoritos</h1>  
      <div className={state.darkMode ? 'card-grid-dark' : 'card-grid' }>
      {state.favs.map((dentist) => {
        return <Card dentist={dentist} key={dentist.id} />
      })}

      </div>
      <div className='buttonBottom'>
      {state.favs.length > 0 ? 
      <button onClick={()=> dispatch( {type:"REMOVE_ALL"} )}>🗑️ Borrar todos los favoritos</button> : 
      <p>No hay favoritos.</p>}
      </div>

    </>
  );
};

export default Favs;
