import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material"
import { useState } from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { openAccount } from "./warehouse";

const Signup=()=>{

    const[profile,setProfile]=useState({
        "firstName":"",
        "lastName":"",
        "userName":"",
        "contact":0,
        "email":"",
        "pass":"",
        "conpass":""
    })

    const myCollect=(eve)=>{
        eve.preventDefault()
        const{name,value}=eve.target
        setProfile((exists)=>{
            return{
                ...exists,
                [name]:value
            }
        })
    }

    const resetting=()=>{
        setProfile(()=>{
            return{
                "firstName":"",
                "lastName":"",
                "userName":"",
                "contact":0,
                "email":"",
                "pass":"",
                "conpass":""
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                <Typography variant="h4" color="primary" align="center">
                    SignUP with MEC
                </Typography>
                    <div className="col-md-8 col-12">
                        <div className="card p-5 shadow-lg">
                            <div className="row justify-content-between">
                                <div className="col-md-6 mt-md-0 mt-2 col-sm-12 col-12">
                                    <TextField
                                        onChange={myCollect}
                                        name="firstName"
                                        label="First name"
                                        value={profile.firstName}
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle color="success" />
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="col-md-6 mt-md-0 mt-2 col-sm-12 col-12">
                                    <TextField
                                        name="lastName"
                                        onChange={myCollect}
                                        value={profile.lastName}
                                        label="Last name"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle color="success" />
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <TextField
                                name="userName"
                                className="mt-2"
                                onChange={myCollect}
                                value={profile.userName}
                                label="Username"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonPinIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="contact"
                                value={profile.contact}
                                onChange={myCollect}
                                className="mt-2"
                                label="Mobile number"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneAndroidIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="email"
                                value={profile.email}
                                onChange={myCollect}
                                className="mt-2"
                                label="Email Address"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AttachEmailIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <div className="row justify-content-between mt-2">
                                <div className="col-md-6 mt-md-0 mt-2 col-sm-12 col-12">
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="pass">Choose Password</InputLabel>
                                        <OutlinedInput
                                            value={profile.pass}
                                            onChange={myCollect}
                                            id="pass"
                                            name="pass"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    color="success"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Choose Password"
                                        />
                                    </FormControl>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-2 col-sm-12 col-12">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="conpass">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            value={profile.conpass}
                                            onChange={myCollect}
                                            id="conpass"
                                            name="conpass"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    color="success" 
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Confirm Password"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="mt-2 row justify-content-evenly">
                                <Button color="success" onClick={()=>{
                                    // alert(JSON.stringify(profile))
                                    openAccount(profile)
                                    resetting()
                                }} className="col-3" variant="outlined" startIcon={<CloudDoneIcon />}>
                                    SignUp
                                </Button>
                                <Button color="error" onClick={()=>{
                                    resetting()
                                }} className="col-3" variant="outlined" startIcon={<CancelScheduleSendIcon />}>
                                    Cancel
                                </Button>
                            </div>
                            {/* <textarea className="mt-2 form-control" name="address" /> */}

                            {/* <Select
                                className="mt-2"
                                label="Age"
                                >
                                <MenuItem value="select department">Select</MenuItem>
                                <MenuItem value="cse">CSE</MenuItem>
                                <MenuItem value="ai&ds">AI&DS</MenuItem>
                                <MenuItem value="Cyber">Cyber</MenuItem>
                            </Select> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup