import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useGetReviews = () => {
  const { id } = useParams();
  const URLReviews = `https://api.themoviedb.org/3/movie/${id}/reviews`;

  const [arrayReviews, setArrayReviews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getByReviews() {
      setIsLoading(true);
      try {
        const moviesByFilm = await axios.get(URLReviews, {
          params: {
            api_key: '4255b1252c36a3414584989077cdd509',
          },
        });
        setArrayReviews([...moviesByFilm.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getByReviews();
  }, []);
  return { arrayReviews, error, isLoading };
};
