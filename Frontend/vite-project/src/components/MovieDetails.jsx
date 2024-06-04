import React from 'react';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details">
      <button className="close" onClick={onClose}>X</button>
      <img src={movie.image} alt={movie.name} />
      <div className="movie-info">
        <h2>{movie.name}</h2>
        <p>{movie.time} min {movie.year}</p>
        <p>{movie.introduce}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
