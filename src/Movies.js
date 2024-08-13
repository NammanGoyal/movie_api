import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Movies.css'; 

const API_KEY = '81a7b2c2e8e3f4799b2fa65d6665ab54';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = ({ category = 'popular' }) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          category === 'trending'
            ? `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
            : `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
        
        const response = await axios.get(url);
        const moviesData = response.data.results;
        setMovies(moviesData);

        const imagesPromises = moviesData.map(async (movie) => {
          try {
            const imagesResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/images?api_key=${API_KEY}`);
            return { id: movie.id, images: imagesResponse.data };
          } catch (error) {
            console.error(`Error fetching images for movie ${movie.id}:`, error);
            return { id: movie.id, images: null };
          }
        });

        const imagesResults = await Promise.all(imagesPromises);
        const imagesMap = {};
        imagesResults.forEach(({ id, images }) => {
          imagesMap[id] = images && images.posters.length > 0 ? `${IMAGE_BASE_URL}${images.posters[0].file_path}` : null;
        });

        setImages(imagesMap);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [category]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="movies-container">
      <button className="scroll-button left" onClick={scrollLeft}>❮</button>
      <div className="movies-list" ref={containerRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
            {images[movie.id] ? (
              <img src={images[movie.id]} alt={movie.title} className="movie-image" />
            ) : (
              <div className="no-image">No image available</div>
            )}
            <div className='cont'>
              <p className="movie-title">{movie.title}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>❯</button>
    </div>
  );
};

export default Movies;
