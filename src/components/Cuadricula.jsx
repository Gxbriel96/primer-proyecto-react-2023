
import "./Cuadricula.css"
import Criptomonedas from "./Criptomonedas"
import usePetition from "./hooks/usePetition"



function Cuadricula() {
  
  const [criptos, cargandoCriptos, error] = usePetition("assets")
  
  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          
            <Criptomonedas 
              key={id} 
              name={name} 
              priceUsd= {priceUsd}
              symbol = {symbol}
              changePercent24Hr = {changePercent24Hr}
              id = {id}
            />
          ))
        }
      </div>

    </>
  )
}

export default Cuadricula
