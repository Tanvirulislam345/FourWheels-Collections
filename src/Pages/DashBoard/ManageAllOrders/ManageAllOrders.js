import { Box, Button, Card, Container, Grid, Paper, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-mesa-67343.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

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
    const handleUpdate = id => {
        const uri = `https://murmuring-mesa-67343.herokuapp.com/booking/${id}`;
        console.log(uri);
        fetch(uri, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved purchased car succefully');
                }
            });
    }
    return (
        <Box className="manageAllOrder">
            <Container className="App" sx={{ flexGrow: 1, py: 5 }} >
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', my: 2 }}>
                    Manage All <span style={{ color: 'red' }}>Orders</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        orders.map(order => (
                            <Grid item xs={12} sm={6} md={4}
                                key={order._id}
                            >
                                <Card sx={{ pb: 3, borderRadius: 5 }}>
                                    <Paper elevation={3} sx={{ mb: 3, borderRadius: 5 }}>
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
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>Status</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', border: 'none', color: 'orange' }}>{order.status}</TableCell>
                                        </TableRow>

                                    </Paper>

                                    <TableRow sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                        <Paper elevation={3}
                                            sx={{ borderRadius: 5, backgroundColor: 'green' }}
                                            onClick={() => handleUpdate(order._id)}
                                        >
                                            <Button sx={{ fontWeight: 'bold', border: 'none', p: 1, px: 3, color: 'white' }}>Approved</Button>
                                        </Paper>
                                        <Paper elevation={3}
                                            sx={{ borderRadius: 5, backgroundColor: 'red' }}
                                            onClick={() => handleDelete(order._id)}
                                        >
                                            <Button sx={{ fontWeight: 'bold', border: 'none', p: 1, px: 3, color: 'white' }}>Cencel</Button>
                                        </Paper>
                                    </TableRow>
                                </Card>
                            </Grid>


                        ))
                    }
                </Grid>
            </Container >


        </Box>

    );
};

export default ManageAllOrders;