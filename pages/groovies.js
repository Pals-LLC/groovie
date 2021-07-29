import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/actionCreators';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import { Grid } from '../components/Layout';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import searchIcon from '../public/icons/search.svg';
import { COLORS } from '../styles/colors';

const Groovies = () => {
  const [groovies, setGroovies] = useState([]);
  const [session, loading] = useSession();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch user's groovies from database and save to state
    if (session) {
      fetch('api/getUserID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken: session.accessToken }),
      })
        .then((res) => res.json())
        .then((userID) => dispatch(updateUser(userID)));
    }
  }, [session, dispatch]);

  return (
    <>
      <Head>
        <title>My Groovies | Groovie Movie</title>
      </Head>
      <Grid>
        <Header icon={searchIcon} nav='/search' label='Search' />
        <Main>
          <h1>My Groovies</h1>
          <Spacer size='24px' />
          <MoviesBox></MoviesBox>
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
  padding: 24px;
`;

const MoviesBox = styled.div`
  flex-basis: 85%;
  width: 100%;
  border: 8px solid ${COLORS.aqua};
  outline: 8px solid ${COLORS.clementine};
  display: flex;
`;

export default Groovies;
