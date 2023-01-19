import { useParams } from "react-router-dom"
import usePetition from "../hooks/usePetition"
import CriptoHistory from "./CriptoHistory"
import CriptoInfo from "./CriptoInfo"


const CriptoPage = () =>{

    const params = useParams()
    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=m1`)

    
    if (cargandoCripto || cargandoHistory) return <h1>cargando...</h1>
    return(
        <>
            {cripto && <CriptoInfo cripto={cripto} />}  
            {history && <CriptoHistory history={history} />}
        </>
    )
}

/**
 * JSON.stringify() es un método para convertir a string
 */
export default CriptoPage
