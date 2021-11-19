import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://murmuring-mesa-67343.herokuapp.com/ourcollection', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Product added succefully');
                    reset();
                }
            })
    };
    return (
        <Paper elevation={3} sx={{ flexGrow: 1 }} className="addProduct">
            <Grid item xs={12} sm={12} md={7}>
                <Box sx={{ py: 5 }} className="App form">
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                        Add a new Product
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("model")} required
                            placeholder="Model name" /> <br />
                        <input {...register("topspreed")} required
                            placeholder="Car Top Spreed" /> <br />
                        <input {...register("bodystyle")} required
                            placeholder="Car body style" /> <br />
                        <input {...register("size")} required
                            placeholder="Car Size" /> <br />
                        <input {...register("purpose")} required
                            placeholder="Car Purpose" /> <br />
                        <input {...register("price")} required
                            placeholder="Car Price" /> <br />
                        <input {...register("image")} required
                            placeholder="Car image URL" /> <br />
                        <input {...register("description")} required
                            placeholder="Car Description" /> <br />

                        <input type="submit" className="submitBtn" />
                    </form>
                </Box>
            </Grid>
        </Paper >
    );
};

export default AddProducts;