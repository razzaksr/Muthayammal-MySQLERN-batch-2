import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { fetchAll } from "./warehouse"
import ReadOne from "./readone"

const ViewList=()=>{

    const[tempList,setTempList]=useState([])
    const[openRead,setOpenRead]=useState(false)
    const[found,setFound]=useState({})

    useEffect(()=>{
        const t = fetchAll()
        setTempList(t)
    },[])

    const columns=[
        {
            field:'firstName',
            headerName:"First Name",
            width:200
        },
        {
            field:'lastName',
            headerName:"Last Name",
            width:200
        },
        {
            field:'userName',
            headerName:"User name",
            width:200
        },
        {
            field:'contact',
            headerName:"Phone Number",
            width:200
        },
        {
            field:'email',
            headerName:"Email",
            width:200
        },
    ]

    return(
        <>
            {openRead?<><ReadOne picked={found}/></>
            :
            <DataGrid
                onRowSelectionModelChange={(one)=>{
                    var collected=tempList.filter((each)=>{
                        return each.userName==one
                    })
                    //alert(JSON.stringify(collected[0]))
                    setOpenRead(true)
                    setFound(collected[0])
                }}
                columns={columns}
                rows={tempList}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 3,
                    },
                },
                }}
                getRowId={(hai)=>hai.userName}
                pageSize={7}
                pageSizeOptions={[3]}
            />
            }
        </>
    )
}
export default ViewList