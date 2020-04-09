import React, { FC } from 'react';
import { MovieCard } from '../Movie/Movie';
import './MovieList.scss';

interface Props {
  movies: Movie[];
}

export const MoviesList: FC<Props> = ({ movies }) => (
  <div className="container">
    <ul className="row row-movies">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  </div>
);
