import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cast.css'; 
import { useParams } from 'react-router-dom';

const API_KEY = '81a7b2c2e8e3f4799b2fa65d6665ab54';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const CastCarousel = () => {
    const { id } = useParams(); 
  const [cast, setCast] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchCast();
  }, [id]);

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
    <div className="cast-container">
      <button className="scroll-button left" onClick={scrollLeft}>❮</button>
      <div className="cast-list" ref={containerRef}>
        {cast.map((member) => (
          <div key={member.id} className="cast-item">
            <div className="cast-image">
              {member.profile_path ? (
                <img src={`${IMAGE_BASE_URL}${member.profile_path}`} alt={member.name} className="cast-image" />
              ) : (
                <div className="no-image">No image available</div>
              )}
            </div>
            <div className='cont-cast'>
              <p className="cast-title">{member.name}<br></br>
              {member.character}
              </p>
            <div/>
            
              
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>❯</button>
    </div>
  );
};

export default CastCarousel;
