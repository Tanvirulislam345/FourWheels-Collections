import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, CardContent, CardActions, Card } from '@mui/material';
import { Link } from 'react-router-dom';

//#212F3D

const Collections = () => {
    const [collections, setCollections] = useState([]);
    // console.log(date);
    useEffect(() => {
        fetch('https://murmuring-mesa-67343.herokuapp.com/ourcollection')
            .then(res => res.json())
            .then(data => setCollections(data));
    }, []);

    return (
        <Box sx={{ backgroundColor: '#273746' }}>
            <Container className="App" sx={{ flexGrow: 1 }} >

                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', pt: 5, color: 'white' }}>
                    FourWheel <span style={{ color: '#FA9779' }}>Collection</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ py: 2 }}>
                    {
                        collections.map(collection => (
                            <Grid item xs={12} sm={6} md={4}
                                key={collection._id}
                            >
                                <Card sx={{ borderRadius: 5, backgroundColor: '#212F3D' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100%', height: '250px', borderRadiusTop: 5 }}
                                            image={collection.image}
                                            alt="green iguana"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
                                            {collection.model}
                                        </Typography>
                                        <Typography variant="body2" color="gray" sx={{ textAlign: 'justify' }}>
                                            {collection.description.slice(0, 200)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/product/${collection._id}`}
                                            style={{ textDecoration: 'none', color: 'gray' }}
                                        >
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

            </Container>
        </Box>


    );
};

export default Collections;
