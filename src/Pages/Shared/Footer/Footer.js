import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import playstore1 from '../../../images/icon/playstore1.png';
import image3 from '../../../images/icon/images3.png';


const Footer = () => {
    /*  backgroundColor: '#F63E7B' 2DF3F3 B1FAA7    D6D8D8*/
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#212F3C', color: 'white' }}>
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#DBDDE0' }}>
                            FourWhile
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div" sx={{ fontWeight: 'bold', color: 'gray', my: 1 }}>
                            Best car dealer In Bangladesh
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div" sx={{ mb: 2, color: 'gray' }}>
                            H#000 (5th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </Typography>
                        <img src={playstore1} alt="" width="50%" />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#DBDDE0' }}>
                            Company
                        </Typography>
                        <p style={{ color: 'gray' }}>About</p>
                        <p style={{ color: 'gray' }}>Project</p>
                        <p style={{ color: 'gray' }}>Our Team</p>
                        <p style={{ color: 'gray' }}>Terms Conditions</p>
                        <p style={{ color: 'gray' }}>Submit Listing</p>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#DBDDE0' }}>
                            Quick links
                        </Typography>
                        <p style={{ color: 'gray' }}>Home</p>
                        <p style={{ color: 'gray' }}>Rentals</p>
                        <p style={{ color: 'gray' }}>Sales</p>
                        <p style={{ color: 'gray' }}>Contact</p>
                        <p style={{ color: 'gray' }}>Our blog</p>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={image3} alt="" width="100%" height="80%" />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                    <Typography variant="caption" sx={{ color: '#515A5A' }}>
                        Fourwhile @2021 All right reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;