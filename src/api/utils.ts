import { TOP_RATED_MOVIES_URL, BASE_URL, API_KEY } from './constants';

export const getMovies = async <T>(): Promise<T> => {
  const response = await fetch(TOP_RATED_MOVIES_URL);
  const result = await response.json();

  return result;
};

export const getMoviesDetails = async (id: number) => {
  const response = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`);

  const result = await response.json();

  return result;
};
