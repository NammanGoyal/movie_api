import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import Footer from '../Footer';

const ContactPage = () => {
  return (
    <div>
    <Container className='pt-[30px] mb-[20%]'>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      
    </Container>
    <Footer/>
    </div>
  );
};

export default ContactPage;
