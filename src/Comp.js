import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './tailwind.css';
import { Typography } from '@mui/material';
import Movies from './Movies';
import Searchs from './Searchs';
import Footer from './Footer';

function Comp() {
  return (
    <div className="h-screen">
      

      
      <div className="relative w-full max-w-7xl mx-auto h-1/2">
        
        <div className="absolute inset-0 bg-cover bg-[url('../public/5.jpg')] bg-center z-0"></div>
        
        
        <div className="absolute inset-0 bg-slate-600 opacity-70 z-10"></div>

        
        <div className="relative z-20 pt-20 pl-[5%]">
          <Searchs />
        </div>
      </div>

      
      <div className="bg-customColor">
        <Typography variant="h5" gutterBottom className="pt-10 pl-5">
          Popular
        </Typography>
        <Movies category="popular" />
        <br />
      </div>

      
      <div className="bg-customColorr pb-10">
        <Typography variant="h5" gutterBottom className="pl-5 pt-10">
          Trending
        </Typography>
        <Movies category="trending" />
      </div>

      
      <Footer />
    </div>
  );
}

export default Comp;
