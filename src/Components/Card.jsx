import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context'


const Card = ({ dentist }) => {

  const {state, dispatch} = useDentistStates()

  return (
    <div className="card">

<div>
      <img
        src="public/images/doctor.jpg"
        style={{ width: "100%", height: 200, objectFit: "cover" }}
      />
      <h2>{dentist.name}</h2>
      <h3>{dentist.username}</h3>

      <Link to={`/dentista/${dentist.id}`}>Ver detalle</Link>

      <div>
      {location.pathname === "/favs" ? 
      <button onClick={()=> dispatch( {type:"REMOVE_BY_ID", payload: dentist.id } )}>🗑️</button>: 
      <button onClick={()=> dispatch( {type:"ADD_FAVORITES", payload: dentist } )}>⭐</button>}
      </div>

    </div>
    </div>
  );
};

export default Card;
