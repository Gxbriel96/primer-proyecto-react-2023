import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import "./main.css"
import Home from "./components/Home"
import Error404 from "./components/Error404"
import Cuadricula from "./components/Cuadricula"
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './components/usuarios/Perfil'
import {UserContextProvider} from "./components/context/UserContext"
import Login from './components/usuarios/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>} />
                    <Route path='perfil' element={<Perfil/>} />
                </Route>
                <Route path='/criptomonedas' element={<App/>} >
                    <Route index element={<Cuadricula/>} />
                    <Route path=':id' element={<CriptoPage/>} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>

)
