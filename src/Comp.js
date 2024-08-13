import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './tailwind.css';
import './Comp.css'
import { Button, Typography, Container } from '@mui/material';
import Movies from './Movies';
import Searchs from './Searchs';
import Footer from './Footer';

function Comp() {
  return (
    <div className='h-screen '>
      

      <div className='w-full max-w-7xl mx-auto h-1/2 bg-slate-600 pl-20 pt-20 opacity-65 absolute z-1 left-1/2 transform -translate-x-1/2'>
        
        
      </div>
      <div className="w-full max-w-7xl mx-auto h-1/2 bg-[url('../public/5.jpg')] pl-20 pt-20 sm:bg-[url('../public/5.jpg')] bg-cover">
        <Searchs/>
      
        </div>
      
      <div className='bg-customColor'>
      <Typography variant="h5" gutterBottom className='pt-10 pl-5'>
        Popular
      </Typography>
      
      <Movies category='popular'/>
      <br></br>
      </div>
      <div className='bg-customColorr pb-10'>
      <Typography variant="h5" gutterBottom className='pl-5 pt-10'>
        Trending
      </Typography>
      <Movies category='trending'/>
      </div>
      <Footer/>
    </div>
  );
}

export default Comp; 
