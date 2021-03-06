import styled from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovie.svg';
import { Layout } from '../components/Layout';
import Waves from '../components/Waves';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';

const SignIn = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Sign in | Groovie Movie</title>
      </Head>
      <Layout>
        <Waves />
        <Image src={groovie} alt='Groovie logo' width={300} height={150} />
        {!session && (
          <>
            <Greeting>Welcome to Groovie Movie!</Greeting>
            <Spacer size='36px' />
            <NavLink
              onClick={() =>
                signIn('google', {
                  callbackUrl: 'http://localhost:3000/groovies',
                })
              }
            >
              Sign in with Google
            </NavLink>
            <Spacer size='36px' />
            <Link href='/search' passHref>
              <NavLink>Pick a Flick</NavLink>
            </Link>
          </>
        )}
        {session && (
          <>
            <Greeting>
              Hey, {session.user.name.split(' ')[0]}! Looks like you&apos;re
              already signed in.
            </Greeting>
            <Spacer size='36px' />
            <Link href={session ? '/groovies' : '/signin'} passHref>
              <NavLink>See my Groovies</NavLink>
            </Link>
            <Spacer size='36px' />
            <NavLink onClick={() => signOut('google')}>Sign out</NavLink>
          </>
        )}
      </Layout>
    </>
  );
};

const Greeting = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

export default SignIn;
