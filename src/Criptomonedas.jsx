const Criptomonedas = ({id, name, priceUsd}) => {
    return(
        <li key={id}>Nombre: {name} Precio: {priceUsd} </li>
    )
}

export default Criptomonedas
