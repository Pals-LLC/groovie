import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/actionCreators";
import { useSession } from "next-auth/client";
import Head from "next/head";
import { Grid } from "../components/Layout";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import searchIcon from "../public/icons/search.svg";
import { COLORS } from "../styles/colors";
import GroovieRow from "../components/GroovieRow";

const Groovies = () => {
  const [groovies, setGroovies] = useState([]);
  const [session, loading] = useSession();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      fetch("api/getUserID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken: session.accessToken }),
      })
        .then((res) => res.json())
        .then((userID) => {
          dispatch(updateUser(userID));
          fetch(`api/getGroovies/${userID}`)
            .then((res) => res.json())
            .then((data) => setGroovies(data));
        });
    }
  }, [session, dispatch]);

  return (
    <>
      <Head>
        <title>My Groovies | Groovie Movie</title>
      </Head>
      <Grid>
        <Header icon={searchIcon} nav="/search" label="Search" />
        <Main>
          <h1>My Groovies</h1>
          <Spacer size="24px" />
          <MoviesBox>
            {!session ? (
              <p>Not Signed In</p>
            ) : (
              groovies.map((groovie) => (
                <GroovieRow key={groovie.title} movie={groovie} />
              ))
            )}
          </MoviesBox>
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
  flex-direction: column;
`;

export default Groovies;
