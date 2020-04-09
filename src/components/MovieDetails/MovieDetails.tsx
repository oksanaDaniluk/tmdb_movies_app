import React, {
  FC,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getMoviesDetails } from '../../api';
import { MovieDetailsCard } from '../MovieDetailsCard/MovieDetailsCard';

type Props = RouteComponentProps<{movieId: string}>;

export const MovieDetailsPage: FC<Props> = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState<Details | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const id = Number(match.params.movieId);

  const loadMoviesDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getMoviesDetails(id);

      setMovieDetails(result);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [id, setIsLoading, setError, setMovieDetails]);

  useEffect(() => {
    loadMoviesDetails();
  }, [loadMoviesDetails]);

  if (error) {
    return (
      <p>
        Something went wrong, try to reload
      </p>
    );
  }

  if (isLoading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <MovieDetailsCard movie={movieDetails as Details} />
  );
};
