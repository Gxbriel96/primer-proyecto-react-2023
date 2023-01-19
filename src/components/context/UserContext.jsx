
import { createContext, useEffect, useState } from "react";

//Creando mi primer context
const UserContext = createContext()

const UserContextProvider = ({children}) =>{
    const [usuario, setUsuario] = useState({})
    
    useEffect(()=>{
        setUsuario({
            name: "Gabriel Garcías",
            registered: "18/Julio/2022"
        })
    }, [])
    
    return(
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}