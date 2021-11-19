import { Alert, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const [signInInfo, setSignInInfo] = useState({});
    const { user, userSignIn, signInUsingGoogle, loading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    if (loading) {
        return <Box className="App">
            <CircularProgress />
        </Box>
    } else {

        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            // console.log(field, value);
            const newSingUpInfo = { ...signInInfo };
            newSingUpInfo[field] = value;
            setSignInInfo(newSingUpInfo);
        }
        const handleSignIn = e => {
            e.preventDefault();
            userSignIn(signInInfo.email, signInInfo.password, location, history);
        }

        return (
            <Box sx={{ flexGrow: 1 }} className="signUpStyle" >
                <Grid item xs={12} sm={12} md={7}>
                    <Paper elevation={3} sx={{ py: 5, mb: 3 }} className="App">
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Sign In
                        </Typography>
                        <form onSubmit={handleSignIn}>
                            <TextField id="standard-basic-email"
                                sx={{ width: '90%', p: 1 }}
                                variant="outlined"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField id="standard-basic-password"
                                sx={{ width: '90%', p: 1 }}
                                variant="outlined"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: '90%', m: 1, mt: 3 }}
                            >Log in</Button>
                        </form>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            New Users? <Link to='/signup'
                                style={{ textDecoration: 'none' }}
                            >
                                Please Sign Up
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', my: 2 }} gutterBottom component="div">
                            ---------OR-----------
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '90%', m: 1 }}

                            onClick={() => signInUsingGoogle(location, history)}
                        >
                            Login using google
                        </Button>
                        {
                            user.email && <Alert severity="success">Login successfull</Alert>

                        }
                    </Paper>
                </Grid>
            </Box >
        );
    }
};

export default SignIn;