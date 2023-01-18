import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASEURL_MOVIES_DETALIS, API_KEY } from '../../api-client';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASEURL_MOVIES_DETALIS}${movieId}/reviews?api_key=${API_KEY}`)
      .then(resp => {
        return setMovies(resp.data.results);
      })
      .catch(() => toast('Something went wrong, please try again'));
  }, [movieId]);

  if (!movies) {
    return;
  }
  if (movies.length < 1) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {movies.map(({ id, author, content }) => (
          <li key={id}>
            Author: {author}
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
