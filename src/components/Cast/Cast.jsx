import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASEURL_MOVIES_DETALIS, API_KEY, IMG_PATH } from '../../api-client';

const Cast = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASEURL_MOVIES_DETALIS}${movieId}/credits?api_key=${API_KEY}`)
      .then(resp => {
        return setMovies(resp.data.results);
      })
      .catch(() => toast('Something went wrong, please try again'));
  }, [movieId]);

  if (!movies) {
    return;
  }

  return (
    <ul>
      {movies.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={profile_path && `${IMG_PATH}w200${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
