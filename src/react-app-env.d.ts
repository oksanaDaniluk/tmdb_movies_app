// / <reference types="react-scripts" />

interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: [];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface Genre {
  'id': number;
  'name': string;
}

interface ProductionCompanies {
  'id': number;
  'logo_path': null;
  'name': string;
  'origin_country': string;
}

interface ProductionCountries {
  'iso_3166_1': string;
  'name': string;
}

interface SpokenLanguages {
  'iso_639_1': string;
  'name': string;
}

interface Details extends Movie {
  'belongs_to_collection': null;
  'budget': number;
  'genres': Genre[];
  'homepage': string;
  'imdb_id': string;
  'production_companies': ProductionCompanies[];
  'production_countries': ProductionCountries[];
  'revenue': number;
  'runtime': number;
  'spoken_languages': SpokenLanguages[];
  'status': string;
  'tagline': string;
  'video': boolean;
  'vote_count': number;
}
