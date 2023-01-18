import axios from 'axios';
import toast from 'react-hot-toast';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm';
import { ImageGrid } from 'components/Skeleton';
import { BASEURL_MOVIES, API_KEY, IMG_PATH } from '../../api-client';
import css from '../Movies/Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const updateQueryString = e => {
    e.preventDefault();

    const value = e.currentTarget.query.value;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') {
      return;
    }

    setIsLoading(true);
    axios
      .get(
        `${BASEURL_MOVIES}?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
      )
      .then(res => setMovies(res.data.results))
      .catch(() => toast('Something went wrong, please try again'))
      .finally(setIsLoading(false));
  }, [searchParams]);

  return (
    <section>
      <SearchForm onSubmit={updateQueryString} />
      {isLoading && <ImageGrid />}
      {movies ? (
        <ul className={css.list}>
          {movies.map(({ id, original_title, poster_path }) => (
            <li key={id} className={css.item}>
              <NavLink to={`${id}`} state={{ from: location }}>
                <img src={`${IMG_PATH}w300${poster_path}`} alt="Poster Film" />
                {original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>toast('Something went wrong, please try again')</p>
      )}
    </section>
  );
};

export default Movies;
