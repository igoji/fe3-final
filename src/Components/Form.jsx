import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
  })
  console.log(datos);

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()

    const emailValido = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


    if(datos.nombre.length > 5 && emailValido(datos.email)){
      setEnviado(true)
      setError(false)
    }else{
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Nombre   
          <input type="text" value={datos.nombre} onChange={(e) => setDatos({...datos, nombre: e.target.value})} />
        </label>
        <label>Email   
          <input type="email" value={datos.email} onChange={(e) => setDatos({...datos, email: e.target.value})} />
        </label>
        <button>Enviar</button>

      </form>

      {error && <p style={{color:"red"}}>Por favor verifique su información nuevamente</p>}

      {enviado && <p>Gracias {datos.nombre}, te contactaremos cuando antes vía mail!</p>}

    </div>
  );
};

export default Form;
