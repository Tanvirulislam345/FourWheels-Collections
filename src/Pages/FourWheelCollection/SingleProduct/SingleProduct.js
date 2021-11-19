import { Button, Card, CardMedia, Container, Grid, Paper, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        const url = `https://murmuring-mesa-67343.herokuapp.com/ourcollection/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProduct(data));

    }, [carId]);
    return (

        <Container>
            <Card sx={{ my: 4, borderRadius: 5 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <CardMedia
                            component="img"
                            sx={{ width: '100%', height: '100%', borderRadius: 5 }}
                            image={singleProduct.image}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper elevation={3} sx={{ mb: 3, p: 3, borderRadius: 5 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'red' }}>
                                {singleProduct.model}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                {singleProduct.description}
                            </Typography>
                            <Link to={`/purchase/${singleProduct._id}`}
                                style={{ textDecoration: 'none', color: 'gray' }}
                            >
                                <Button variant="contained"
                                    sx={{ width: '100%', mt: 3, borderRadius: 5, backgroundColor: '#33333A' }}>
                                    Add to Card
                                </Button>
                            </Link>
                        </Paper>
                        <Table aria-label="simple table">
                            <TableHead elevation={3}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Model</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.model}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Size</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.size}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Top spreed</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.topspreed}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Purpose</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.purpose}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Body Style</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.bodystyle}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                    <TableCell sx={{ color: 'gray' }}>{singleProduct.price}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Grid>
                </Grid>
            </Card>
        </Container>

    );
};

export default SingleProduct;