import { useSelector } from 'react-redux';

const MovieRow = ({ movie }) => {
  const user = useSelector((state) => state.user);

  const addToGroovies = async () => {
    // TODO: redirect to sign in page if a user is not signed in
    if (!user.id) return;

    const res = await fetch('/api/addToGroovies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movie, user }),
    });
  };

  return (
    <div id={movie.imdbID}>
      {movie.Title} ({movie.Year}) <button onClick={addToGroovies}>Save</button>
    </div>
  );
};

export default MovieRow;
