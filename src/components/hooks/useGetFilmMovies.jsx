import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export const useGetFilmMovies = () => {
  const [arrayFilmMovies, setArrayFilmMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    async function getByFilm() {
      setIsLoading(true);
      try {
        const moviesByFilm = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              query: searchParams.get('query'),
              api_key: '4255b1252c36a3414584989077cdd509',
            },
          }
        );
        setArrayFilmMovies([...moviesByFilm.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getByFilm();
  }, [searchParams.get('query')]);
  return { arrayFilmMovies, error, isLoading };
};
