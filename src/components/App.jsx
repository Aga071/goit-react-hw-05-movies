import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import { lazy } from 'react';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
// import Movies from './movies/Movies';
// import SingleFilm from './singleFilm/SingleFilm';
import { useGetFilm } from './hooks/useGetFilm';
// import Cast from './cast/Cast';
// import Reviews from './reviews/Reviews';

const Movies = lazy(() => import('./movies/Movies'));
const SingleFilm = lazy(() => import('./singleFilm/SingleFilm'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export default function App() {
  const { arrayFilm, error, isLoading } = useGetFilm();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {error !== '' && <p>Something went wrong: {error.message}</p>}
          <Route index element={<Home arrayFilm={arrayFilm} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleFilm />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
