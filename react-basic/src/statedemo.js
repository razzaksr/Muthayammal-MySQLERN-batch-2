import { useState } from "react"

const StateDemo=()=>{

    // useState>> const[variablename,setVariablenamefunction]=useState(initialization
    const[hai,setHai]=useState(0)

    // JSX
    return(
        <>
            <label>Number of Hits {hai}</label>
            <button onDoubleClick={()=>{
                setHai(0)
            }} onClick={()=>{
                setHai(hai+1)
            }}>Hit</button>
        </>
    )
}

export default StateDemo