import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material"
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import { callPublish } from "./Apicalls";

const Publish=()=>{

    const[app,setApp]=useState({
        "appName":"",
        "appVendor":"",
        "appCategory":""
    })

    const[category,setCategory]=useState("Select category")

    const handleChange=(event)=>{
        setCategory(event.target.value)
    }

    const collect=(event)=>{
        const{name,value}=event.target
        setApp((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const[info,setInfo]=useState("")
    const[infoStyle,setInfoStyle]=useState({})

    const toBePublished=async()=>{
        app.appCategory=category
        console.log(app)
        const res = await callPublish(app)
        if(res.message){
            setInfo(res.message)
            setInfoStyle({
                color:'red'
            })
        }
        toBeReset()
    }

    const toBeReset=()=>{
        setApp(()=>{
            return{
                "appName":"",
                "appVendor":"",
                "appCategory":""
            }
        })
        setCategory("")
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                    <div className="col-lg-8 col-12 col-md-7 rounded-2 card shadow-lg p-5">
                        <p style={infoStyle} className="text-end">{info}</p>
                        <h1 className="card-title text-center text-primary">New App to Publish</h1>
                        <FormControl className="mb-2 form-control" variant="outlined">
                            <InputLabel htmlFor="appName">App Name</InputLabel>
                            <OutlinedInput
                                id="appName"
                                name="appName"
                                value={app.appName}
                                onChange={collect}
                                startAdornment={
                                <InputAdornment position="start">
                                    <FlutterDashIcon color="primary"/>
                                </InputAdornment>
                                }
                                label="App Name"
                            />
                        </FormControl>
                        <FormControl className="mb-2 form-control" variant="outlined">
                            <InputLabel htmlFor="appVendor">App Vendor</InputLabel>
                            <OutlinedInput
                                id="appVendor"
                                name="appVendor"
                                value={app.appVendor}
                                onChange={collect}
                                startAdornment={
                                <InputAdornment position="start">
                                    <StoreIcon color="primary"/>
                                </InputAdornment>
                                }
                                label="App Vendor"
                            />
                        </FormControl>
                        <FormControl className="form-control mb-2">
                            <InputLabel id="appCategory">App Category</InputLabel>
                            <Select
                                startAdornment={
                                <InputAdornment position="start">
                                    <CategoryIcon color="primary"/>
                                </InputAdornment>
                                }
                                value={category}
                                labelId="appCategory"
                                id="appCategory"
                                label="App category"
                                onChange={handleChange}
                            >
                                <MenuItem value="Select category">Select Category</MenuItem>
                                <MenuItem value="Games">Games</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                                <MenuItem value="Entertainment">Entertainment</MenuItem>
                                <MenuItem value="Education">Education</MenuItem>
                            </Select>
                        </FormControl>
                        <div className="mt-2 row justify-content-around">
                            <Button onClick={toBePublished} className="col-4 col-md-3" variant="contained" endIcon={<CloudUploadIcon />}>
                                Publish
                            </Button>
                            <Button onClick={toBeReset} color="error" className="col-4 col-md-3" variant="contained" endIcon={<CancelScheduleSendIcon />}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Publish