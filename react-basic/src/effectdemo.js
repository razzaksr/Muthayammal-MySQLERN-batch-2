import { useEffect, useState } from "react"

const EffectDemo=()=>{

    const[data,setData]=useState({
        "proName":"Lenova Thinkpad",
        "proPrice":43000
    })

    const myLoad=()=>{
        setData(()=>{
            return{
                "proName":"Dell Studio",
                "proPrice":78000
            }
        })
    }

    const[base,setBase]=useState(0)

    // useEffect(functioncall,[when])
    useEffect(()=>{
        myLoad()
    },[base])

    return(
        <>
            <h1>{data.proName}</h1>
            <h1>{data.proPrice}</h1>
            <button onClick={()=>{
                setBase(base+1)
            }}>{base}</button>
        </>
    )
}

export default EffectDemo
