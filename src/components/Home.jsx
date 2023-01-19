import { Link } from "react-router-dom"

const Home = () =>{
    return (
        <>
            <h1>Bienvenido a EDmarket</h1>
            <p>En esta página se observa el homepage</p>
            <Link to="/criptomonedas">Ver Criptos</Link>
        </>
    )
}

export default Home