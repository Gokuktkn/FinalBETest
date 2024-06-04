import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      <h2>Most Popular Movies</h2>
      <div className="movies">
        {movies.map(movie => (
          <div key={movie.id} className="movie" onClick={() => onMovieClick(movie)}>
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.duration} {movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList