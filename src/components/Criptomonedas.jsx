import { Link } from "react-router-dom"
import "./Criptomonedas.css"
const Criptomonedas = ({id, name, priceUsd, symbol, changePercent24Hr}) => {
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info-cripto">
                <p>
                    <span>precio: </span>
                    <span> {parseFloat(priceUsd).toFixed(4)}</span>
                </p>
                <p>
                    <span>Código: </span>
                    <span>{symbol}</span>
                </p>
                <p>
                    <span>Variación24h: </span>
                    <span className={changePercent24Hr > 0? "positivo":"negativo"}>{parseFloat(changePercent24Hr).toFixed(3)}%</span>
                </p>
                <Link to={`/criptomonedas/${id}`}  >Ver detalles</Link>
            </div>
        </div>
    )
}

export default Criptomonedas
