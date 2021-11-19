import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, Box, Container, Rating } from '@mui/material';

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
            <Container sx={{ flexGrow: 1 }} >
                <Typography className="App" variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', py: 5, color: 'white' }}>
                    FourWheel  <span style={{ color: 'red' }}>ManageProduct</span>
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ p: 2, mb: 3, borderRadius: 5 }}>
                    {
                        collections.map(collection => (
                            <Grid item xs={12} sm={6} md={4}
                                key={collection._id}
                            >
                                <Paper elevation={3} sx={{ p: 1, borderRadius: 5 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '100%', height: '150px', borderRadius: 5 }}
                                        image={collection.image}
                                        alt="green iguana"
                                    />
                                    <Box className="App"
                                        sx={{ my: 1 }}>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={4}
                                            precision={0.5}
                                            readOnly />
                                    </Box>

                                    <Typography variant="h6"
                                        sx={{ fontWeight: 'bold', color: 'red', my: 1 }}>
                                        {collection.model}
                                    </Typography>
                                    <Typography variant="body1"
                                        sx={{ fontWeight: 'bold' }}>
                                        Price : <small>{collection.price}</small>
                                    </Typography>

                                    <Button variant="contained"
                                        onClick={() => handleDelete(collection._id)}
                                        sx={{ width: '100%', mt: 3, borderRadius: 5, backgroundColor: '#33333A' }}>
                                        delete
                                    </Button>

                                </Paper>
                            </Grid>
                        ))}
                </Grid>

            </Container>
        </Box>

    );
};

export default ManageProduct;