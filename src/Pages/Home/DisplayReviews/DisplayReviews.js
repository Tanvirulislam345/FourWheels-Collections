import React, { useEffect, useState } from 'react';
import './DisplayReviews.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, Container, Rating } from '@mui/material';

const DisplayReviews = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-mesa-67343.herokuapp.com/customerReview')
            .then(res => res.json())
            .then(data => setCustomers(data));
    }, []);

    return (
        <Box className="reviewsStyle">
            <Container sx={{ flexGrow: 1, py: 5 }} >
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', textAlign: 'start', color: 'white', mr: 'auto', display: 'inline' }}>
                        FourWheel <span style={{ color: 'red' }}>Customers</span>
                    </Typography>
                    <CardActions>
                        <Button size="small" sx={{ color: 'white' }}>See More</Button>
                    </CardActions>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {

                        customers.map(customer => (
                            <Grid item xs={12} sm={6} md={4}
                                key={customer._id}
                            >
                                <Card sx={{ p: 3 }} className="App">
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100px', height: '100px', borderRadius: '100%', my: 2 }}
                                            image={customer.image}
                                            alt="green iguana"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                            {customer.name}
                                        </Typography>
                                        <Rating name="half-rating-read"
                                            defaultValue={customer.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                            {customer.quote}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default DisplayReviews;