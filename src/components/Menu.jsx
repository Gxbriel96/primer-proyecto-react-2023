import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "./context/UserContext"

const Menu = () => {
    const navigation = useNavigate()
    const usuario = useContext(UserContext)
    
    return(
        
        <nav>
            
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/criptomonedas'>Lista de criptos</NavLink></li>
                <li><NavLink to='/perfil'>Perfil de {usuario.name} </NavLink></li>
                <li><a onClick={()=>{
                    localStorage.removeItem("tokenEDmarket")
                    navigation("/login") //Me envia al login al cerrar sesión
                }}>Cerrar Sesión</a></li>
            </ul>

        </nav>
    )
}

export default Menu