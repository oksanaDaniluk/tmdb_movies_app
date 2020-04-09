import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import { BASE_POSTER_URL } from '../../api/constants';
import './MovieDetailsCard.scss';

interface Props {
  movie: Details;
}

export const MovieDetailsCard: FC<Props> = ({ movie }) => {
  return (
    <main className="row">
      <div className="container container-of-details">
        <section className="col-12 col-md-6 col-lg-5">
          <div className="card-image">
            <Image
              src={`${BASE_POSTER_URL}${movie.poster_path}`}
              alt="movie_img"
              className="movie_img"
            />
          </div>
        </section>
        <section className="card-info col-12 col-md-6 col-lg-7">
          <h4 className="card-title">{movie.title}</h4>
          <div className="">
            <div className="row">
              <div className="col-8 metadata">
                <span>
                  {movie.vote_average}
                  {' '}
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none" viewBox="0 0 13 12">
                    <path fill="#FFDE6A" d="M5.792.356a.515.515 0 0 1 .98 0l1.13 3.477a.515.515 0 0 0 .49.356h3.656c.499 0 .707.639.303.932l-2.958 2.15a.515.515 0 0 0-.187.575l1.13 3.477a.515.515 0 0 1-.793.576L6.585 9.75a.515.515 0 0 0-.606 0L3.022 11.9a.515.515 0 0 1-.793-.577l1.13-3.477a.515.515 0 0 0-.188-.576L.213 5.121a.515.515 0 0 1 .303-.932h3.656a.515.515 0 0 0 .49-.356L5.792.356z" />
                  </svg>
                </span>
              </div>
              <div className="col-8 metadata">
                Release:
                {' '}
                {movie.release_date ? movie.release_date.split('-').reverse().join('.') : 'not relized'}
              </div>
              <div className="col-8 metadata">
                <span>
                  Genres:
                  {' '}
                  {movie.genres ? movie.genres.map((genre: Genre) => genre.name.toLowerCase()).join(', ') : 'uncnown'}
                </span>
              </div>
              <div className="col-8 metadata">
                Runtime
                {' '}
                {Math.trunc(movie.runtime / 60)}
                :
                {movie.runtime % 60}
              </div>
              <div className="col-8 metadata">
                <span>
                  Homepage:
                  {' '}
                </span>
                <a href={movie.homepage}>{movie.title}</a>
              </div>
            </div>
          </div>
          <p
            className="text-justify"
            style={{ fontSize: '14px' }}
          >
            {movie.overview}
          </p>
        </section>
      </div>
    </main>
  );
};
