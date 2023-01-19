import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) =>{
    const [data, setData] = useState()
    const API_Assets_URL = import.meta.env.VITE_API_URL
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()
    useEffect(()=>{
      setCargando(true)
      axios.get(`${API_Assets_URL}${endpoint}`)
      .then((data)=>{
        setData(data.data.data)
        setCargando(false)
      })
      .catch((e)=>{
        console.error(e)
        setCargando(false)
        setError(e)
      })
    }, [])
    
    return [data, cargando, error]
}

export default usePetition;
