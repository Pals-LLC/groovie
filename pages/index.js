import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovieMovie.svg';
import { Layout } from '../components/Layout';
import Waves from '../components/Waves';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import { useSession } from 'next-auth/client';

const Home = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Home | Groovie Movie</title>
      </Head>
      <Layout>
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
        <Spacer size='48px'>
          <p>or</p>
        </Spacer>
        <Link href={session ? '/groovies' : '/signin'} passHref>
          <NavLink>See my Groovies</NavLink>
        </Link>
      </Layout>
    </>
  );
};

export default Home;
