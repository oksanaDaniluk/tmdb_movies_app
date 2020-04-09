import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { getMovies } from '../../api/utils';
import { MoviesList } from '../MoviesList/MoviesList';
import './MainPage.scss';

export const MainPage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { results } = await getMovies();

      setMovies(results);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [setMovies, setError]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const searchFilmByQuery = useMemo(() => movies.filter(
    movie => movie.title.toLowerCase().includes(query)
    || movie.overview.toLowerCase().includes(query),
  ), [movies, query]);

  if (isLoading) {
    return (
      <p className="container">Loading...</p>
    );
  }

  return (
    <>
      <section className="container container_search">
        <form className="row" id="form__search">
          <div className="col-12">
            <div className="input-group">
              <input
                autoComplete="off"
                type="search"
                id="input_query"
                value={query}
                onChange={handleQuery}
                placeholder="search"
                className="form-control"
              />
            </div>
          </div>
        </form>
      </section>
      <main>
        {!error
          ? (<MoviesList movies={searchFilmByQuery} />)
          : (<p>Something went wrong, try to reload</p>)}
      </main>
    </>
  );
};
