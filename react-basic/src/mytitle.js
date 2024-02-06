import { useNavigate } from "react-router-dom"

const Title=()=>{
    return(
        <h1>Razak Mohamed S</h1>
    )
}

export const Designation=()=>{
    const navi=useNavigate()
    return(
        <>
            <h1 style={textDesign}>L&D Manager</h1>
            <h1>CTO</h1>
            <button onClick={()=>{
                // navi("/skill")
                navi("/")
            }}>
                Home
            </button>
        </>
    )
}

const textDesign={
    color:'red',
    backgroundColor:'blue',
    fontSize:'35px'
}

export const MyImage=()=>{
    return(
        <img style={{height:'100px',width:'200px'}} src="JD.png" alt="mypic"/>
    )
}

export default Title
// export {Designation,MyImage}