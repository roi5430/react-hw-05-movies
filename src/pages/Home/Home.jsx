import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASEURL_TRENDS, API_KEY, IMG_PATH } from '../../api-client';
import css from '../Home/Home.module.css';
import { ImageGrid } from 'components/Skeleton';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASEURL_TRENDS}?api_key=${API_KEY}&page=1`)
      .then(res => setMovies(res.data.results))
      .catch(() => toast('Something went wrong, please try again'))
      .finally(setIsLoading(false));
  }, []);

  return (
    <section>
      <h2>Trending today</h2>

      {isLoading && <ImageGrid />}

      {movies.length > 0 && (
        <ul className={css.home__list}>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id} className={css.home__item}>
              <NavLink to={`movies/${id}`} state={{ from: location }}>
                <img src={`${IMG_PATH}w300${poster_path}`} alt="Poster Film" />
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Home;
