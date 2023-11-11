import {
  Outlet,
  useNavigate,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGetSingleFilm } from 'components/hooks/useGetSingleFilm';

export default function SingleFilm() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(location.state.from);
  };
  const { arrayFilmDetails, error, isLoading } = useGetSingleFilm();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {error !== '' && <p>Something went wrong: {error.message}</p>}
      <button onClick={handleClick}>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${arrayFilmDetails.poster_path}`}
          alt={`${arrayFilmDetails.title} poster`}
          width={200}
        />
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
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
}
