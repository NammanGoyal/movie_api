import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer';
import { Backdrop, CircularProgress } from '@mui/material';
import Cast from './Cast'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const API_KEY = '81a7b2c2e8e3f4799b2fa65d6665ab54';
const BASE_URL = 'https://api.themoviedb.org/3';

const Moviedetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`);
        
        setTimeout(() => {
          setMovie(response.data);
          setLoading(false); 
        }, 500);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false); 
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const fetchMovieRating = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc&${API_KEY}`);
        
        setTimeout(() => {
          setMovie(response.data);
          setLoading(false); 
        }, 500);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false); 
      }
    };

    fetchMovieRating();
  }, [id]);

  if (loading) {
    return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    );
  }

  if (!movie) {
    return <div>Error loading movie details.</div>;
  }

  return (
    <div className='h-screen'>
      <div className='flex flex-col xl:flex-row md:flex-row lg:flex-row sm:flex-col justify-start bg-gray-800 h-[110%] xl:h-1/2 lg:h-1/2 md:h-[55%]  w-full max-w-[1550px] mx-auto min-h-[400px]'>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-[215px] h-[315px] m-[40px]'/>
        </div>
        <span className='bg-yellow-400 h-1 w-[94%] mx-auto md:h-[94%] md:w-1 md:mx-0 md:mt-auto md:mb-auto'></span>
        <div className='mt-[40px] text-white ml-[13px] md:max-w-[55%] lg:max-w-[70%] xl:ml-[60px] mr-5'>
          <h2 className='text-3xl'>{movie.original_title} <p className='inline opacity-60'>({movie.release_date.substring(0,4)})</p></h2>
            <div className="mb-4 ml-1">
            {movie.genres && movie.genres.map((genre) => (
              <span key={genre.id} className='mr-2'>{genre.name}</span>
            ))}
          </div>
          
          <div  className='inline-block w-[75px] h-[75px] mb-3' >
          <CircularProgressbar className='text-white' text={`${movie.vote_average*10}%`} />
          </div>
          <h1 className='text-2xl opacity-75 mb-1'>Overview</h1>
          <p> {movie.overview}</p>
          <p  className='mt-3'>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          
        </div>
      </div>
      <h1 className='text-3xl mt-10 ml-6 mb-5 opacity-55'>Cast</h1>
      <Cast movieId='id'/>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Moviedetails;
