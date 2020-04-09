/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { BASE_POSTER_URL } from '../../api/constants';
import './Movie.scss';

interface Props{
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const {
    id,
    poster_path,
  } = movie;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <Link
        className="card h-100"
        to={`/movies/${id}`}
      >
        <Image src={`${BASE_POSTER_URL}${poster_path}`} size="big" rounded />
        <div className="card-body text-center">
          <div className="rating-group">
            <span>{movie.vote_average}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none" viewBox="0 0 13 12">
              <path fill="#FFDE6A" d="M5.792.356a.515.515 0 0 1 .98 0l1.13 3.477a.515.515 0 0 0 .49.356h3.656c.499 0 .707.639.303.932l-2.958 2.15a.515.515 0 0 0-.187.575l1.13 3.477a.515.515 0 0 1-.793.576L6.585 9.75a.515.515 0 0 0-.606 0L3.022 11.9a.515.515 0 0 1-.793-.577l1.13-3.477a.515.515 0 0 0-.188-.576L.213 5.121a.515.515 0 0 1 .303-.932h3.656a.515.515 0 0 0 .49-.356L5.792.356z" />
            </svg>
          </div>
          <h5 className="card-title">{movie.title}</h5>
        </div>
      </Link>
    </div>
  );
};
