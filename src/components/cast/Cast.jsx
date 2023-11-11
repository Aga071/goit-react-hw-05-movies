import PropTypes from 'prop-types';

import { useGetCast } from 'components/hooks/useGetCast';

export default function Cast() {
  const { isLoading, error, arrayCast } = useGetCast();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {error !== '' && <p>Something went wrong: {error.message}</p>}

      <ul>
        {arrayCast?.map(cast => (
          <ul key={cast.id}>
            <li>
              <img src={cast.profile_path} alt="" />
            </li>
            <li>{cast.name}</li>
            <li>{cast.character}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
