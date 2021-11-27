import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
            <Container sx={{ py: 3 }}>
                <TableContainer component={Paper} sx={{ p: 2, backgroundColor: '#212F3D' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Name</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Email</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Phone</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Model</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Price</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Status</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Approved</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Cancel</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow>
                                    {/* <TableCell>Desc</TableCell> */}
                                    <TableCell sx={{ color: 'gray' }}>{order.userName}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{order.email}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{order.phone}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{order.model}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{order.price}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{order.status}</TableCell>
                                    <TableCell>
                                        {/* <Paper elevation={3}
                                            sx={{ borderRadius: 5, backgroundColor: 'green' }}
                                            onClick={() => handleUpdate(order._id)}
                                        >
                                            <Button sx={{ fontWeight: 'bold', border: 'none', p: 1, px: 3, color: 'white' }}>Approved</Button>
                                        </Paper> */}
                                        <Button variant="contained"
                                            onClick={() => handleUpdate(order._id)}
                                            sx={{ width: '100%', borderRadius: 5, backgroundColor: '#33333A', color: 'green' }}>
                                            approve
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained"
                                            onClick={() => handleDelete(order._id)}
                                            sx={{ width: '100%', borderRadius: 5, backgroundColor: '#33333A', color: 'red' }}>
                                            cancel
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>

    );
};

export default ManageAllOrders;