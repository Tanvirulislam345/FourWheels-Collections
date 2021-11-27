import { Card, CardMedia, Container, Grid, Paper, TableCell, TableRow, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://murmuring-mesa-67343.herokuapp.com/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    const handleDelete = id => {
        const proced = window.confirm('Are you want to cancel this booking ?');
        if (proced) {
            const uri = `https://murmuring-mesa-67343.herokuapp.com/booking/${id}`;
            console.log(uri);
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('cancel your booking successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }
    return (
        <Box className="myOrdersStyle">
            <Container className="App" sx={{ flexGrow: 1, py: 3 }} >
                {
                    orders.map(order => (
                        <Card sx={{ mb: 3, borderRadius: 5 }}
                            key={order._id}
                        >
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '100%', height: '100%', borderRadius: 5 }}
                                        image={order.image}
                                        alt="green iguana"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} sx={{ mb: 2 }}>
                                    <Paper elevation={3} sx={{ m: 3, ml: 0, borderRadius: 5 }}>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>Model </TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray' }}>{order.model}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>price </TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray' }}>{order.price}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>User :</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray' }}>{order.userName}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>Email :</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray' }}>{order.email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>Phone :</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray' }}>{order.phone}</TableCell>
                                        </TableRow>

                                    </Paper>

                                    <TableRow sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <Paper elevation={3} sx={{ borderRadius: 5, me: 5 }}>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', p: 1 }}>Status</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'gray', p: 1 }}>{order.status}</TableCell>
                                        </Paper>
                                        <Paper elevation={3}
                                            sx={{ borderRadius: 5, backgroundColor: 'red' }}
                                            onClick={() => handleDelete(order._id)}
                                        >
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', p: 1, px: 3 }}>Cencel</TableCell>
                                        </Paper>
                                    </TableRow>
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                }
            </Container >
        </Box>

    );
};

export default MyOrders;