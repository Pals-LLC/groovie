import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovieMovie.svg';
import Waves from '../components/Waves';
import { useSession } from 'next-auth/client';

const Home = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Home | Groovie Movie</title>
      </Head>
      <Wrapper>
        <Waves />
        <Image
          src={groovie}
          alt='Groovie Movie logo'
          width={320}
          height={240}
        />
        <Link href='/search' passHref>
          <NavLink>Pick a Flick</NavLink>
        </Link>
        <OrSpacer>or</OrSpacer>
        <Link href={session ? '/groovies' : '/signin'} passHref>
          <NavLink>See my Groovies</NavLink>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  background-color: ${COLORS.soil};
  color: ${COLORS.cream};
  font-size: 1.5rem;
  padding: 12px 20px;
  border: 2px solid ${COLORS.soil};
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    background-color: ${COLORS.cream};
    color: ${COLORS.soil};
  }
`;

const OrSpacer = styled.p`
  margin: 24px 0;
`;

export default Home;
