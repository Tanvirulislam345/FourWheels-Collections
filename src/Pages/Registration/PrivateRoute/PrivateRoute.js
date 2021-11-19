import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Box className="App">
            <CircularProgress />
        </Box>
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) => user?.email ? children : <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: location }
                    }}
                ></Redirect>}
            >
            </Route>
        );
    }
};

export default PrivateRoute;