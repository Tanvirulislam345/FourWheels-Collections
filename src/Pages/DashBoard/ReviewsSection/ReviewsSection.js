import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './ReviewsSections.css';

const ReviewsSection = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://murmuring-mesa-67343.herokuapp.com/customerReview', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('servicess added succefully');
                    reset();
                }
            })
    };

    return (
        <Box sx={{ flexGrow: 1 }} className="addReview" >
            <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={3} sx={{ py: 5, mb: 3 }} className="App form">
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Make your Reviews
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} required
                            placeholder="Enter your name" /> <br />
                        <input {...register("image")} required
                            placeholder="Enter your image url" /><br />
                        <input type="number" {...register("rating")} required
                            placeholder="Enter a rating out of 5" /><br />
                        <input {...register("quote")} required
                            placeholder="Enter your comment" /><br />

                        <input type="submit" className="submitBtn" />
                    </form>
                    {/* {
                    user.email && <Alert severity="success">Register successfull</Alert>

                } */}
                </Paper>
            </Grid>
        </Box >
    );
};

export default ReviewsSection;