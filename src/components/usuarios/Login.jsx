import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css" 
const Login =()=>{

    const navigation = useNavigate()
    //Estado setear usuarios
    const [user, setUser]= useState({
        email: "",
        password: ""
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) =>{
        //sentencia para evitar la recarga que viene por default
        e.preventDefault() 
        setCargando(true)
        //como buena práctica hay que setear null en el error
        setError(null)
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            //localStorage.setItem("nombre de la key", valor que se quiere guardar)
            localStorage.setItem("tokenEDmarket", data.data.token)
            setCargando(false)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })

    }

    if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/"/>
    return(
        
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <div className="field-container">
                <form onSubmit={submit} className="form">
                    <div className="field">
                        
                        <input required onChange={(e)=>{
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} type="email" name="email" placeholder="Correo Electrónico"/>
                    </div>
                    <div className="field">
                        
                        <input required onChange={(e)=>{
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} type="password" name="password" placeholder="Contraseña" />
                    </div>
                    <div className="submit">
                        <input 
                        type="submit" 
                        value={cargando ? "cargando...": "Ingresar"} />
                    </div>
                </form>
            </div>
            <span className="error"> {error}</span>
        </div>
    )
}

export default Login
