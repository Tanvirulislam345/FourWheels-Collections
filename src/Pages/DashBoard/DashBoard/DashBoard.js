import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import FourKPlusIcon from '@mui/icons-material/FourKPlus';
import PaidIcon from '@mui/icons-material/Paid';
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import useAuth from '../../../hooks/useAuth';
import Logout from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";
import ManageProduct from "../ManageProduct/ManageProduct";
import './DashBoard.css';

const drawerWidth = 240;

const DashBoard = (props) => {
    const { admin, userSignOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ backgroundColor: '#212F3D', height: '100vh' }}>
            <Toolbar />
            <List className="list">
                <ListItemButton className="listItem">
                    <ListItemIcon className="dashbordIcon">
                        <HomeIcon />
                    </ListItemIcon>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'gray' }}>
                        <ListItemText primary="Home" />
                    </Link>
                </ListItemButton>
                <Divider />

                <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton className="listItem">
                        <ListItemIcon className="dashbordIcon">
                            <LocalGroceryStoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="My orders" />
                    </ListItemButton>
                </Link>

                <Link to={`${url}/reviews`} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton className="listItem">
                        <ListItemIcon className="dashbordIcon">
                            <FourKPlusIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Reviews" />
                    </ListItemButton>
                </Link>
                {/* <Link to={`${url}/payment`} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton className="listItem">
                        <ListItemIcon className="dashbordIcon">
                            <PaidIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payment" />
                    </ListItemButton>
                </Link> */}
                <Divider />

                {
                    admin &&
                    <Box>
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton className="listItem">
                                <ListItemIcon className="dashbordIcon">
                                    <PersonAddAlt1Icon />
                                </ListItemIcon>
                                <ListItemText primary="Make A Admin" />
                            </ListItemButton>
                        </Link>

                        <Link to={`${url}/addProducts`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton className="listItem">
                                <ListItemIcon className="dashbordIcon">
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Products" />
                            </ListItemButton>
                        </Link>
                        <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton className="listItem">
                                <ListItemIcon className="dashbordIcon">
                                    <MenuBookIcon />
                                </ListItemIcon>
                                <ListItemText primary="ManageOrders" />
                            </ListItemButton>
                        </Link>
                        <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton className="listItem">
                                <ListItemIcon className="dashbordIcon">
                                    <MenuBookIcon />
                                </ListItemIcon>
                                <ListItemText primary="ManageProducts" />
                            </ListItemButton>
                        </Link>
                    </Box>}
                <Divider />
                <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton onClick={userSignOut} className="listItem">
                        <ListItemIcon className="dashbordIcon">
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </Link>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#212F3D' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Fourwheel Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <ReviewsSection></ReviewsSection>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard;