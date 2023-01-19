
const CriptoInfo = ({cripto})=>{
    return(
        <>
            <h1>Soy la criptomoneda {cripto.name}</h1>
            
            <div className="info-cripto">
                <p>
                    <span>Precio: </span>
                    <span> {parseFloat(cripto.priceUsd).toFixed(4)}</span>
                </p>
                <p>
                    <span>Código: </span>
                    <span>{cripto.symbol}</span>
                </p>
                <p>
                    <span>Variación24h: </span>
                    <span className={cripto.changePercent24Hr > 0? "positivo":"negativo"}>{parseFloat(cripto.changePercent24Hr).toFixed(3)}%</span>
                </p>
                <p>
                    <span>Inventario actual: </span>
                    <span>{Math.trunc(cripto.supply)}</span>
                </p>

            </div>
        </>
    )
}

export default CriptoInfo
