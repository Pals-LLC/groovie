import { useState } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import { Grid } from '../components/Layout';
import MovieRow from '../components/MovieRow';
import Spacer from '../components/Spacer';
import videoIcon from '../public/icons/video.svg';
import { COLORS } from '../styles/colors';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [session, loading] = useSession();

  const searchClickHandler = () => {
    fetch(`/api/search?searchInput=${searchInput}`)
      .then((res) => res.json())
      .then((results) => setSearchResults(results.Search))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Head>
        <title>Search | Groovie Movie</title>
      </Head>
      <Grid>
        <Header
          icon={videoIcon}
          nav={session ? '/groovies' : '/signin'}
          label='My Groovies'
        />
        <Main>
          <h1>Pick a Flick</h1>
          <Spacer size='12px' />
          <SearchInput
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Spacer size='16px' />
          <SearchButton onClick={searchClickHandler}>Search</SearchButton>
          <div>
            {searchResults.map((movie) => (
              <MovieRow key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </Main>
      </Grid>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  border: 3px solid ${COLORS.jigglypuff};
  border-radius: 8px;
  color: ${COLORS.soil};
  padding: 4px;
`;

const SearchButton = styled.button`
  background-color: ${COLORS.soil};
  color: ${COLORS.cream};
  font-size: 1.5rem;
  padding: 4px 20px;
  border: 2px solid ${COLORS.soil};
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    background-color: ${COLORS.cream};
    color: ${COLORS.soil};
  }
`;

export default Search;
