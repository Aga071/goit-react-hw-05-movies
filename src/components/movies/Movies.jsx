import { useGetFilmMovies } from 'components/hooks/useGetFilmMovies';
import HomeItem from 'components/home/HomeItem';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const { isLoading, error, arrayFilmMovies } = useGetFilmMovies(query);

  const handeleSubmit = event => {
    // event.preventDefault();
    setQuery(event.target.query.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handeleSubmit}>
      <input type="text" name="query" />
      <button type="submit">search</button>
      {error !== '' && <p>Something went wrong: {error.message}</p>}
      <ul>
        {arrayFilmMovies?.map(film => (
          <HomeItem
            key={film.id}
            film={film}
            goBack={`/movies?query=${searchParams.get('query')}`}
          />
        ))}
      </ul>
    </form>
  );
}
