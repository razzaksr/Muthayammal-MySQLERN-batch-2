import { AccountCircle } from "@mui/icons-material"
import { InputAdornment, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material"

const Signup=()=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                <Typography variant="h4" color="primary" align="center">
                    SignUP with MEC
                </Typography>
                    <div className="col-md-8 col-12">
                        <div className="card p-5 shadow-lg">
                            <div className="d-flex justify-content-between">
                                <TextField
                                    name="firstName"
                                    className="col-md-6 mt-md-0 mt-2 col-12"
                                    label="First name"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle color="success" />
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    name="lastName"
                                    className="col-md-6 mt-md-0 mt-2 col-12"
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
                            <textarea className="mt-2 form-control" name="address" />
                            <Select
                                className="mt-2"
                                label="Age"
                                >
                                <MenuItem value="select department">Select</MenuItem>
                                <MenuItem value="cse">CSE</MenuItem>
                                <MenuItem value="ai&ds">AI&DS</MenuItem>
                                <MenuItem value="Cyber">Cyber</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup