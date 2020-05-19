import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = props => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className='movie-wrapper'>
      <NavLink to={`/movies/${movie.id}`}>
        <MovieCard 
          title={title}
          director={director}
          metascore={metascore}
          stars={stars}/>
      </NavLink>
    </div>
  );
}

export default MovieList;
