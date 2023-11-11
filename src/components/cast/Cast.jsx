import { useGetCast } from 'components/hooks/useGetCast';

export default function Cast() {
  const { isLoading, error, arrayCast } = useGetCast();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(arrayCast);
  return (
    <div>
      {error !== '' && <p>Something went wrong: {error.message}</p>}

      <ul>
        {arrayCast?.map(cast => (
          <ul key={cast.id}>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                alt={`profile ${cast.name}"`}
                width={80}
              />
            </li>
            <li>{cast.name}</li>
            <li>{cast.character}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
