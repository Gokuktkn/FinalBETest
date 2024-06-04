import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      <h2>Most Popular Movies</h2>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.ID} className="movie" onClick={() => onMovieClick(movie)}>
            <img src={movie.image} alt={movie.name} />
            <div className="movie-info">
              <h3>{movie.name}</h3>
              <p>{movie.time} min {movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
