import { Alert, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({});
    const { user, registerUser, loading } = useAuth();
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
            const newSingUpInfo = { ...signUpInfo };
            newSingUpInfo[field] = value;
            setSignUpInfo(newSingUpInfo);
        }
        const handleSignUp = e => {
            e.preventDefault();
            registerUser(signUpInfo.email, signUpInfo.password, signUpInfo.displayName, history);
        }

        return (
            <Box sx={{ flexGrow: 1 }} className="signUpStyle" >
                <Grid item xs={12} sm={12} md={7}>
                    <Paper elevation={3} sx={{ py: 5, mb: 3 }} className="App">
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Register
                        </Typography>
                        <form onSubmit={handleSignUp}>
                            <TextField id="standard-basic-name"
                                sx={{ width: '90%', p: 1 }}
                                variant="outlined"
                                label="Your Name"
                                type="text"
                                name="displayName"
                                onBlur={handleOnBlur}
                            />
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
                            >Register</Button>
                        </form>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Are you already register? <Link to='/signin'
                                style={{ textDecoration: 'none' }}
                            >
                                please login
                            </Link>
                        </Typography>
                        {
                            user.email && <Alert severity="success">Register successfull</Alert>

                        }
                    </Paper>
                </Grid>
            </Box >
        );
    }
};

export default SignUp;