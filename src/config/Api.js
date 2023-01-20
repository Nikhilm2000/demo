
import {TMDB_BASE_URL, TMDB_API_KEY} from './constants';

export const getMovies = async (query, page) => {
  const url =
    TMDB_BASE_URL +
    'search/movie' +
    '?query=' +
    query +
    '&page=' +
    page +
    '&api_key=' +
    TMDB_API_KEY;
  results = await fetch(url);
  results = await results.json();
  return 'errors' in results ? [] : results.results;
};


export const fetchPopularMovies = (pages = 100) =>{
  const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=61c4700e5033fdf25cc1b92c86b23872&language=en-US&page=1";
useEffect(() => {
  fetchPopular();
},[]);
const fetchPopular = async () => {
  const data = await fetch(url);
  const movies = await data.json();
  console.log(movies);
};
}
 