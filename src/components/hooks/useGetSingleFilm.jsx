import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetSingleFilm = () => {
  const { id } = useParams();
  const URLDetails = `https://api.themoviedb.org/3/movie/${id}`;

  const [arrayFilmDetails, setArrayFilmDetails] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getByFilmDetails() {
      setIsLoading(true);
      try {
        const moviesByFilmDetails = await axios.get(URLDetails, {
          params: {
            api_key: '4255b1252c36a3414584989077cdd509',
          },
        });
        setArrayFilmDetails(moviesByFilmDetails.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getByFilmDetails();
  }, [URLDetails]);

  return { arrayFilmDetails, error, isLoading };
};
