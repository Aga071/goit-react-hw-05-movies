import PropTypes from 'prop-types';
import HomeItem from './HomeItem';

export default function Home({ arrayFilm }) {

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {arrayFilm.map(film => (
          <HomeItem key={film.id} film={film} goBack={"/"} />
        ))}
      </ul>
    </div>
  );
}
Home.propTypes = {
  arrayFilm: PropTypes.array.isRequired,
  
};