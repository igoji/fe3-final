import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistById } from '../Components/utils/global.context';
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});
  
  const {state, dispatch} = useDentistStates()
  console.log( state )

  useEffect(() => {

    const getData = async ()=>{
      let dentistsData =  await getDentistById(id)
      setDentistSelected(dentistsData)
    }
    getData()
  
  }, [id]);


  return (
    <>
      <h1>Detalle del dentista </h1>
      <div>

    <table>
  <tr>
    <th>Nombre</th>
    <th>Email</th>
    <th>Telefono</th>
    <th>Sitio Web</th>
  </tr>
  <tr className>
    <td> {dentistSelected.name}</td>
    <td> {dentistSelected.email}</td>
    <td> {dentistSelected.phone}</td> 
    <td> {dentistSelected.website}</td>
    </tr>
    </table> 


      <div className='buttonBottom'>
      <button onClick={()=> dispatch( {type:"ADD_FAVORITES", payload: dentistSelected } )}>Agregar a favoritos⭐</button>
      </div>
      </div>
    </>
  )
}

export default Detail