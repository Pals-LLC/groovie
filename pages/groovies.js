import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/actionCreators';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import { Grid } from '../components/Layout';
import Header from '../components/Header';
import searchIcon from '../public/icons/search.svg';

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
          <h1>Groovies</h1>
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

export default Groovies;
