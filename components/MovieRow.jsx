import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { COLORS } from '../styles/colors';

const MovieRow = ({ movie }) => {
  const [saveButton, setSaveButton] = useState('Save');
  const user = useSelector((state) => state.user);

  const addToGroovies = async (e) => {
    // TODO: redirect to sign in page if a user is not signed in
    if (!user.id) return;

    await fetch('/api/addToGroovies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movie, user }),
    });

    setSaveButton('Saved!');
  };

  return (
    <Movie id={movie.imdbID}>
      <p>
        {movie.Title} ({movie.Year})
      </p>
      <AddButton onClick={addToGroovies}>{saveButton}</AddButton>
    </Movie>
  );
};

const Movie = styled.article`
  background-color: ${COLORS.jigglypuff};
  border: solid ${COLORS.jigglypuff};
  color: ${COLORS.soil};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  text-align: center;
`;

const AddButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: ${COLORS.soil};
  border: solid ${COLORS.soil};
  border-radius: 8px;
  color: ${COLORS.cream};
`;

export default MovieRow;
