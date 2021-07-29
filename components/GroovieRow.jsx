import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { COLORS } from '../styles/colors';

const GroovieRow = ({ movie, allGroovies, setGroovies }) => {
  const user = useSelector((state) => state.user);

  const removeGroovie = async () => {
    await fetch('/api/removeGroovie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movie, user }),
    });

    const updatedGroovies = allGroovies.filter((g) => g !== movie);
    setGroovies(updatedGroovies);
  };

  return (
    <Movie id={movie.imdbID}>
      <p>
        {movie.title} ({movie.year})
      </p>
      <RemoveButton onClick={removeGroovie}>Remove</RemoveButton>
    </Movie>
  );
};

const Movie = styled.article`
  background-color: ${COLORS.jigglypuff};
  border: solid ${COLORS.jigglypuff};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  text-align: center;
`;

const RemoveButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: ${COLORS.soil};
  border: solid ${COLORS.soil};
  border-radius: 8px;
  color: ${COLORS.cream};
`;

export default GroovieRow;
