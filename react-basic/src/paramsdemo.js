import { useParams } from "react-router-dom"

const ParamsDemo=()=>{
    const{container}=useParams()
    return(
        <>
            <h1>ReceivedData is {container}</h1>
        </>
    )
}
export default ParamsDemo