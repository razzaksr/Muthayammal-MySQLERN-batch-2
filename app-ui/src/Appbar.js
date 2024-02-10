import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import AppsIcon from '@mui/icons-material/Apps';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Appbar=()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    
    const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    };
      
    const navi=useNavigate()
    return(
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    MEC App Store
                    </Typography>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    onClose={handleClose}
                    >
                    {/* {menuItems.map((item) => (
                        <MenuItem key={item.label} onClick={() => handleMenuItemClick(item.link)}>
                        {item.label}
                        </MenuItem>
                    ))} */}
                        <MenuItem onClick={()=>{
                            navi("/publish")
                            handleClose();
                        }}>
                            Publish
                            <PreviewIcon/>
                        </MenuItem>
                        <MenuItem onClick={()=>{
                            navi("/available")
                            handleClose();
                        }}>
                            Apps
                            <AppsIcon/>
                        </MenuItem>
                        <MenuItem onClick={()=>{
                            navi("/filter")
                            handleClose();
                        }}>
                            Filter
                            <FilterAltIcon/>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

        </>
    )
}
export default Appbar