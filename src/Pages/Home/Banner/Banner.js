import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    return (
        <Box className="bannerStyle" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            width: '100%'
        }}>
            <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                Buying a new Car
            </Typography>
            <Typography variant="body1" gutterBottom component="div" sx={{ px: 5 }}>
                Self-driving cars are the natural extension of active safety and obviously something we should do
            </Typography>
            <Box>
                <Link to="/signup" style={{ textDecoration: 'none', }}>
                    <Button variant="contained" sx={{ m: 2, px: 4, py: 1, backgroundColor: '#FA9779' }}>SignUp</Button>
                </Link>
                <Link to="/collections" style={{ textDecoration: 'none', }}>
                    <Button variant="contained" sx={{ m: 2, px: 4, py: 1, }}>Buy Now</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Banner;