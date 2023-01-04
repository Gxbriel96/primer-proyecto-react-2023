import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Criptomonedas from "./Criptomonedas"



function App() {
  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL
  
  useEffect(() => {
    //PETICIÓN CON FECTH
    /* fetch(`${API_URL}assets`) 
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data)
      })
      .catch(()=> {
        console.error("La petición falló")
      }) */
     //PETICIÓN CON AXIOS A UNA API
     axios.get(`${API_URL}assets`) 
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(()=> {
        console.error("La petición falló")
      })

  }, [])
  
  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      
      <ol>
        {
          criptos.map(({id, name, priceUsd}) => (
            //<li key={id}>Nombre: {name} Precio: {priceUsd}</li>
            <Criptomonedas id={id} name={name} priceUsd= {priceUsd} />
          ))
        }
      </ol>

    </>
  )
}

export default App
