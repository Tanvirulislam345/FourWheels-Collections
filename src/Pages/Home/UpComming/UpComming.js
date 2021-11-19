import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Primium from '../Premium/Premium';


const UpComming = () => {

    return (
        <Box sx={{ flexGrow: 1, py: 5, backgroundColor: '#FBEEE6' }}>
            <Container>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Primium></Primium>
                    </Grid>
                    <Grid item sm={12} md={6} sx={{ my: 'auto', display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: '400px' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                Our <span style={{ color: 'red' }}>UpComming Cars </span> <br /> Launch Tommorow
                            </Typography>
                            <Typography color="text.secondary" sx={{ my: 3, width: '85%' }}>
                                It's like driving a car at night. You never see further than your headlights, but you can make the whole trip that way.
                            </Typography>
                            <Button variant="contained" sx={{ mb: 5 }}>Get Offer</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default UpComming;