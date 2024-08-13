import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import TypewriterText from './TypewriterText';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <div className='h-screen w-full'>
      <div className='h-[80%] min-h-[700px] md:min-h-[650px] w-[100%] lg:h-[55%] lg:min-h-[470px] bg-customColor pt-14 pl-[12%] pr-[12%] pb-20'>
        <Typography variant="h2" gutterBottom>
          <TypewriterText text="About Us" />
        </Typography>
        <Typography variant="body1" className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <img src='/1.jpg' className='w-[350px] h-[269px] flex-1 mb-12 mx-auto lg:mx-0' />
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl mb-5 opacity-65'>
              <TypewriterText text="Our Mission" />
            </h1>
            <TypewriterText text="At MovieDB, our mission is to bring movie enthusiasts closer to the magic of cinema by providing an extensive and accessible collection of films from around the world. We strive to be the go-to platform for movie lovers, offering not only a rich database of movies but also insightful reviews, trailers, and recommendations to enhance your movie-watching experience." />
          </div>
        </Typography>
      </div>

      <div className='h-[80%] min-h-[700px] md:min-h-[600px] w-[100%] lg:h-[45%] lg:min-h-[470px] bg-customColorr pt-14 pl-[12%] pr-[12%] pb-20'>
        <Typography variant="body1" className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <h1 className='text-3xl mb-5 opacity-65'>
              <TypewriterText text="The Journey" />
            </h1>
            <TypewriterText text="Founded in 2020 by a group of passionate film buffs, MovieDB started as a small project aimed at cataloging our favorite films. Over the years, it has evolved into a comprehensive database, housing information on thousands of movies, from timeless classics to the latest blockbusters. Our journey has been fueled by our love for cinema and our desire to create a platform that reflects the diversity and creativity of the film industry." />
          </div>
          <div className='flex-1'>
            <img src='/2.jpg' className='w-[350px] h-[250px] flex-1 mt-12 mx-auto' />
          </div>
        </Typography>
      </div>

      <div className='h-[80%] min-h-[700px] md:min-h-[600px] w-[100%] lg:h-[45%] lg:min-h-[470px] bg-customColor pt-14 pl-[12%] pr-[12%] pb-20'>
        <Typography variant="body1" className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <img src='/3.jpg' className='w-[350px] h-[250px] flex-1 mb-12 mx-auto lg:mx-0' />
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl mb-5 opacity-65'>
              <TypewriterText text="Our Team" />
            </h1>
            <TypewriterText text="The MovieDB team is a diverse group of professionals united by a shared passion for movies. Our team includes film critics, data analysts, software engineers, and creative writers who work tirelessly to ensure that MovieDB remains a reliable and user-friendly resource. We believe that great movies deserve to be celebrated, and our team is dedicated to making sure that every film on our platform gets the recognition it deserves." />
          </div>
        </Typography>
      </div>

      <div className='h-[80%] min-h-[700px] md:min-h-[600px] w-[100%] lg:h-[45%] lg:min-h-[470px] bg-customColorr pt-14 pl-[12%] pr-[12%] pb-20'>
        <Typography variant="body1" className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <h1 className='text-3xl mb-5 opacity-65'>
              <TypewriterText text="Community Engagement" />
            </h1>
            <TypewriterText text="At MovieDB, we believe that movies are best enjoyed when shared. That's why we've built a vibrant community where movie lovers can connect, share their thoughts, and discuss their favorite films. Our forums, comment sections, and social media channels provide a space for meaningful conversations about movies. We encourage our users to contribute to the database by submitting reviews, trivia, and even corrections, helping us to create a more accurate and inclusive platform." />
          </div>
          <div className='flex-1'>
            <img src='/4.jpg' className='w-[350px] h-[250px] flex-1 mt-12 mx-auto ' />
          </div>
        </Typography>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
