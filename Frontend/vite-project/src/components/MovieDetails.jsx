import React from 'react';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details">
      <div className="movie-details-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.duration} {movie.year}</p>
        <p>{movie.description}</p>
        <button className="play-button">Play Movie</button>
      </div>
    </div>
  );
}

export default MovieDetails;