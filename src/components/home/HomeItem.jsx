import { Link } from 'react-router-dom';

export default function HomeItem({ film, goBack }) {
  return (
    <li>
      <Link to={`/movies/${film.id}`} state={{ from: goBack }}>
        {film.title}
        {film.name}
      </Link>
    </li>
  );
}
