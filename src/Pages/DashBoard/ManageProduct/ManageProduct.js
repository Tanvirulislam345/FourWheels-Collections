import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Box, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ManageProduct = () => {
    const [collections, setCollections] = useState([]);
    // console.log(date);

    useEffect(() => {
        fetch('https://murmuring-mesa-67343.herokuapp.com/ourcollection')
            .then(res => res.json())
            .then(data => setCollections(data));
    }, []);


    const handleDelete = id => {
        const proced = window.confirm('Are you sure to delete this product ?');
        if (proced) {
            const uri = `https://murmuring-mesa-67343.herokuapp.com/ourcollection/${id}`;
            console.log(uri);
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Product successfully deleted');
                        const remainingOrder = collections.filter(order => order._id !== id);
                        setCollections(remainingOrder);
                    }
                });
        }
    }
    return (
        <Box className="manageProduct">
            <Container sx={{ flexGrow: 1, py: 2 }} >
                <TableContainer component={Paper} sx={{ p: 2, backgroundColor: '#212F3D' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: '#F2D7D5' }}>Model</TableCell>
                                <TableCell sx={{ color: '#F2D7D5' }}>Price</TableCell>
                                <TableCell sx={{ color: '#F2D7D5' }}>Top Spreed</TableCell>
                                <TableCell sx={{ color: '#F2D7D5' }}>Body</TableCell>
                                <TableCell sx={{ color: '#F2D7D5' }}>Size</TableCell>
                                <TableCell align="center" sx={{ color: '#F2D7D5' }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {collections.map((collection) => (
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>{collection.model}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{collection.price}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{collection.topspreed}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{collection.bodystyle}</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{collection.size}</TableCell>
                                    <TableCell>
                                        <Button variant="contained"
                                            onClick={() => handleDelete(collection._id)}
                                            sx={{ width: '100%', borderRadius: 5, backgroundColor: '#33333A' }}>
                                            delete
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

export default ManageProduct;