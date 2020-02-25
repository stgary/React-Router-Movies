import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Movie from "./Movie";
import MovieCard from "./MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([])
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
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { id, title, director, metascore, stars } = movie;
  return (
  <div>
    <MovieCard 
      id={id}
      title={title}
      director={director}
      metascore={metascore}
      stars={stars}
    />
    <Movie 
      id={id}
      title={title}
      director={director}
      metascore={metascore}
      stars={stars}
    />
  </div>
  );
}

export default MovieList;
