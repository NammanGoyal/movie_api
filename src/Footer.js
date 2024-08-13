// Footer.js
import React from 'react';
import { Container, Box, Typography, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '300px',
        backgroundColor: 'black', 
        color: 'white', 
        padding: '20px 0', 
        paddingTop: '40px',
        
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap' 
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="div">
              My Awesome Company
            </Typography>
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} My Awesome Company. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="div">
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2" color="inherit">
                contact@mycompany.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2" color="inherit">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2" color="inherit">
                1234 Elm Street, Springfield, USA
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="div">
              Follow Us
            </Typography>
            <Box display="flex" mt={1}>
              <IconButton component={Link} href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton component={Link} href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton component={Link} href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
