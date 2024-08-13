import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container className='pt-[30px]'>
      <Typography variant="h2" gutterBottom>
        Welcome to the Movie Database
      </Typography>
      <Typography variant="body1">
        Discover the most popular and trending movies here!
      </Typography>
      <Button variant="contained" color="primary" href="/movies">
        Explore Movies
      </Button>
    </Container>
  );
};

export default Home;