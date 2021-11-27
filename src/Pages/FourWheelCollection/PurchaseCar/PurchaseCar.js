import { Container, Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PurchaseCar = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { carId } = useParams();
    const history = useHistory();

    useEffect(() => {
        const url = `https://murmuring-mesa-67343.herokuapp.com/ourcollection/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProduct(data));

    }, [carId]);


    const onSubmit = data => {
        const newData = {
            ...data,
            image: `${singleProduct.image}`,
            status: 'panding'
        }
        axios.post('https://murmuring-mesa-67343.herokuapp.com/booking', newData)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Product added succefully');
                    reset();
                    history.push('/collections');
                }
            })
    };


    return (
        <Box sx={{ backgroundColor: '#273746', py: 3 }}>

            <Container>
                {
                    singleProduct?.model ?
                        <Paper elevation={3} sx={{ py: 5, borderRadius: 5 }} className="App form2">
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'gray', mb: 5 }}>
                                Buy Car Form
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={{ xs: 2, md: 3 }}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <input {...register("model")} required
                                            defaultValue={singleProduct.model} /> <br />
                                        <input {...register("topSpreed")} required
                                            defaultValue={singleProduct.topspreed} /> <br />
                                        <input {...register("bodyStyle")} required
                                            defaultValue={singleProduct.bodystyle} /> <br />
                                        <input {...register("size")} required
                                            defaultValue={singleProduct.size} /> <br />
                                        <input {...register("purpose")} required
                                            defaultValue={singleProduct.purpose} /> <br />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <input {...register("price")} required
                                            defaultValue={singleProduct.price} /> <br />
                                        <input type="email" {...register("email")} required
                                            defaultValue={user.email} /> <br />
                                        <input {...register("userName")} required
                                            defaultValue={user.displayName} /> <br />
                                        <input type="number" {...register("phone")} required
                                            defaultValue="017..." /> <br />
                                        <input type="submit" className="submitBtn" />
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                        :
                        <Box className="App">
                            <CircularProgress />
                        </Box>

                }
            </Container>
        </Box>
    );
};

export default PurchaseCar;