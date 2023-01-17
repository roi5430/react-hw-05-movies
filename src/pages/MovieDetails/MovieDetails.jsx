import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BASEURL_MOVIES_DETALIS, API_KEY, IMG_PATH } from '../../api-client';
import Skeleton from 'components/Skeleton';
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASEURL_MOVIES_DETALIS}${movieId}?api_key=${API_KEY}`)
      .then(resp => {
        return setMovies(resp.data);
      })
      .catch(() => toast('Something went wrong, please try again'))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!movies) {
    return null;
  }

  const { original_title, poster_path, vote_average, overview, genres } =
    movies;
  return (
    <section>
      <button className={css.button}>
        <Link to={backLinkHref}>Go back</Link>
      </button>
      {isLoading && <Skeleton />}
      <div className={css.card}>
        <img src={`${IMG_PATH}w300${poster_path}`} alt="Poster Film" />

        <ul className={css.card__list}>
          <li>
            <h2>{original_title}</h2>
          </li>
          <li>User Score: {vote_average}</li>
          <li>
            <h3>Overview: </h3>
            {overview}
          </li>
          <li>
            <h4>Genres:</h4>
            {genres ? genres.map(({ name }) => `${name}`).join(', ') : ''}
          </li>
        </ul>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`cast`} state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MovieDetails;