import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { getDentist } from '../Components/utils/global.context';
import { useDentistStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistStates()

  const [dentists, setDentists] = useState([])

  useEffect(() => {

    const getData = async ()=>{
      let dentistsData =  await getDentist()
      setDentists(dentistsData)
    }
    getData()
  

  }, []);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className={state.darkMode ? 'card-grid-dark' : 'card-grid' }>
      {dentists.map((dentist) => {
        return <Card dentist={dentist} key={dentist.id} />;
      })}
      </div>
    </main>
  )
}

export default Home