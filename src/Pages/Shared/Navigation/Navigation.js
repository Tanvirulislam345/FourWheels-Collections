import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Container,
    IconButton,
    Button
} from "@mui/material";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import NavMenu from '../NavMenu/NavMenu';
import logo2 from '../../../images/icon/logo1.png';

const Navigation = () => {
    const { user } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" style={{ backgroundColor: '#212F3D ' }}>
            <Container>
                <CssBaseline />
                <Toolbar>

                    {isMobile ? <>
                        <Box>
                            <IconButton
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
/* onClick={() => setOpenDrawer(!openDrawer)} */>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                                        Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/collections' style={{ textDecoration: 'none', color: 'black' }}>
                                        Collection
                                    </Link>
                                </MenuItem>
                                {
                                    user?.email &&
                                    <MenuItem onClick={handleClose}>
                                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}>
                                            Dashboard
                                        </Link>
                                    </MenuItem>
                                }
                            </Menu>
                        </Box>
                        {/* <Typography variant="h4" sx={{ fontWeight: 'bold', mr: 'auto' }}>
                            FourWheel
                        </Typography> */}
                        <img src={logo2} alt="" style={{ marginRight: 'auto' }} width="90px" />
                        {
                            user?.email ?

                                <NavMenu></NavMenu>
                                // <Button color="inherit"
                                //     onClick={userSignOut}
                                // >
                                //     {user.displayName}
                                // </Button>

                                :
                                <Link to="/signin" style={{ paddingLeft: '20px', textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                                    LogIn
                                </Link>
                        }
                    </>
                        : <>
                            <img src={logo2} alt="" style={{ marginRight: 'auto', backgroundColor: 'white' }} height="62px" width="130px" />

                            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link to='/collections' style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Collection</Button>
                            </Link>
                            {
                                user?.email &&
                                <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                            }

                            {
                                user?.email ?
                                    // <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                                    //     <Button color="inherit"
                                    //         onClick={userSignOut}
                                    //     >
                                    //         {user.displayName}
                                    //     </Button>
                                    // </Link>
                                    <NavMenu></NavMenu>

                                    :
                                    <Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }
                        </>
                    }
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navigation;

