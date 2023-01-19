import { Navigate, Outlet } from "react-router-dom"
import Menu from "./components/Menu"

const App = () => {
    if (!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login"/>
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
        
    )
}

export default App