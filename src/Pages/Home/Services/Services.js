import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './Service.css';

const Services = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-mesa-67343.herokuapp.com/ourcollection')
            .then(res => res.json())
            .then(data => setCollections(data));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#212F3D' }}>
            <Container className="App" sx={{ flexGrow: 1, pt: 5 }} >
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', my: 5, color: 'white' }}>
                    FourWheel <span style={{ color: '#FA9779' }}>Collection</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        collections.slice(0, 6).map(service => (
                            <Grid item xs={12} sm={6} md={4}
                                key={service._id}
                            >
                                <Box className="serviceCard">
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100%', height: '250px', borderRadius: 5 }}
                                            image={service.image}
                                            alt="green iguana"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
                                            {service.model}
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: 'justify', color: 'gray' }}>
                                            {service.description.slice(0, 200)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/product/${service._id}`}
                                            style={{ textDecoration: 'none', color: 'gray' }}
                                        >
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
                <Link to='/collections'
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <Button variant="contained" sx={{ mt: 5, mb: '100px' }}>
                        Explore more
                    </Button>
                </Link>
            </Container>
        </Box>
    );
};

export default Services;