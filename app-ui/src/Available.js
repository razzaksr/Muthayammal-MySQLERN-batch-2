import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { callDelete, callDownload, callView } from "./Apicalls"
import { Button } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useNavigate } from "react-router-dom";
const Available=()=>{
    // const[tempList,setTempList]=useState(
    //     [
    //     {
    //         'app_id':13001,
    //         'app_name':'Netflix',
    //         'app_vendor':'youtube inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13002,
    //         'app_name':'Netflix',
    //         'app_vendor':'youtube inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13003,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13004,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13005,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13006,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13007,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13008,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },
    //     {
    //         'app_id':13009,
    //         'app_name':'Netflix',
    //         'app_vendor':'netflix inc',
    //         'app_downloads':400000,
    //         'app_ratings':4.5,
    //         'app_category':'Entertainment'
    //     },

    // ])

    const[tempList,setTempList]=useState([])

    const nav=useNavigate()

    const callAxios=async()=>{
        const myList = await callView()
        setTempList(myList.message)
    }

    useEffect(()=>{
        callAxios()
    },[tempList])
    
    const[found,setFound]=useState({
        "app_id":0
    })

    const columns=[
        {
            field:'app_id',
            headerName:"App Id",
            width:200
        },
        {
            field:'app_name',
            headerName:"App Name",
            width:200
        },
        {
            field:'app_vendor',
            headerName:"App Vendor",
            width:200
        },
        {
            field:'app_category',
            headerName:"App Category",
            width:200
        },
        {
            field:'app_downloads',
            headerName:"App Downloads",
            width:200
        },
        {
            field:'app_ratings',
            headerName:"App Ratings",
            width:200
        },
    ]

    const[info,setInfo]=useState("")

    return(
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                    <div className="col-lg-8 col-12 col-md-7 rounded-2 card shadow-lg p-5">
                        <h1 className="card-title text-center text-primary">Available Apps</h1>
                        <DataGrid
                            onRowSelectionModelChange={(one)=>{
                                setInfo("")
                                var collected=tempList.filter((each)=>{
                                    return each.app_id==one
                                })
                                alert(JSON.stringify(collected[0]))
                                // setOpenRead(true)
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
                            getRowId={(hai)=>hai.app_id}
                            pageSize={7}
                            pageSizeOptions={[3]}
                        />
                        {
                            (found.app_id!=0)?
                            <>
                                <div className="mt-2 row justify-content-around">
                                    <Button onClick={async()=>{
                                        // alert(JSON.stringify(found)+" to be donwloaded")
                                        const gather = await callDownload(found.app_name)
                                        setInfo(gather.message)
                                        nav("/available")
                                    }} className="col-3" variant="contained">
                                        <CloudDownloadIcon/>{info}
                                    </Button>
                                    <Button color="error" onClick={async()=>{
                                        // alert(JSON.stringify(found)+" to be deleted")
                                        const rec = await callDelete(found.app_id)
                                        setInfo(rec.message)
                                        nav("/")
                                    }} className="col-3" variant="contained">
                                        <DeleteOutlineIcon/>{info}
                                    </Button>
                                </div>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Available