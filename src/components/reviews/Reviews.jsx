import PropTypes from 'prop-types';

import { useGetReviews } from 'components/hooks/useGetReviews';

export default function Reviews() {
  const { isLoading, error, arrayReviews } = useGetReviews();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {error !== '' && <p>Something went wrong: {error.message}</p>}
      <ul>
        {arrayReviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
        {arrayReviews?.map(reviews => (
          <ul key={reviews.id}>
            <li>
              <h3>Author:{reviews.author}</h3>
            </li>
            <li>{reviews.content}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
