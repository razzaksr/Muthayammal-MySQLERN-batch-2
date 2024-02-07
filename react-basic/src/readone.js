import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { useState } from "react"

const ReadOne=(props)=>{
    const[profile,setProfile]=useState({
        "firstName":props.picked.firstName,
        "lastName":props.picked.lastName,
        "userName":props.picked.userName,
        "contact":props.picked.contact,
        "email":props.picked.email,
        "pass":props.picked.pass,
    })

    
    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">
                        <Card className="bg-dark text-center text-light">
                            <CardHeader
                                avatar={
                                <Avatar className="bg-light text-dark">
                                    R
                                </Avatar>
                                }
                                title="Profile Information"
                            />
                            <CardContent>
                                <Typography variant="h4" align="center">
                                    {profile.firstName} {profile.lastName}
                                </Typography>
                            </CardContent>
                            <CardContent className="row justify-content-evenly">
                                <Typography variant="h4" className="col">
                                    {profile.contact}
                                </Typography>
                                <Typography variant="h4" className="col">
                                    {profile.email}
                                </Typography>
                            </CardContent>
                            <CardContent className="row justify-content-around">
                                <IconButton className="col-1 text-dark bg-light">
                                    <EditLocationAltIcon />
                                </IconButton>
                                <IconButton className="col-1 text-dark bg-light">
                                    <BackspaceIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReadOne