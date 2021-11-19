import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.put('https://murmuring-mesa-67343.herokuapp.com/users/admin', data)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('succefully create an admin');
                    reset();
                }
            })

    };
    return (
        <Box sx={{ flexGrow: 1 }} className="makeAdmin" >
            <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={3} sx={{ py: 5, mb: 3 }} className="App form">
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Make An Admin
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email")}
                            required
                            placeholder="Enter your name" /> <br />


                        <input type="submit" className="submitBtn" /* value="make admin" */ />
                    </form>
                    {/* {
                user.email && <Alert severity="success">Register successfull</Alert>

            } */}
                </Paper>
            </Grid>
        </Box >
    );
};

export default MakeAdmin;