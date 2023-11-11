import {
  Outlet,
  useNavigate,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SingleFilm() {
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

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(location.state.from);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {error !== '' && <p>Something went wrong: {error.message}</p>}
      <button onClick={handleClick}>Go back</button>
      <div>
        <img src="" alt="" />
        <h2>
          {arrayFilmDetails.title}({arrayFilmDetails.release_date?.slice(0, 4)})
        </h2>
        <h3>Overview</h3>
        <p>{arrayFilmDetails.overview}</p>
        <h4>Genres</h4>
        {arrayFilmDetails?.genres?.map(genr => (
          <p key={genr.id}>{genr.name}</p>
        ))}
      </div>
      <div>film-{id}</div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
}
