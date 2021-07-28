import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovieMovie.svg';
import jigglypuffWave from '../public/waves/jigglypuffWave.png';
import tealWaveTop from '../public/waves/tealWaveTop.png';
import tealWaveBottom from '../public/waves/tealWaveBottom.png';
import clementineWave from '../public/waves/clementineWave.png';

const Home = () => {
  return (
    <Wrapper>
      <TopWave>
        <Image src={tealWaveTop} alt='' width={2000} />
      </TopWave>
      <TopWave>
        <Image src={jigglypuffWave} alt='' width={2000} />
      </TopWave>
      <Image src={groovie} alt='Groovie Movie logo' width={300} height={300} />
      <Link href='/' passHref>
        <NavLink>Pick a Flick</NavLink>
      </Link>
      <OrSpacer>or</OrSpacer>
      <Link href='/signin' passHref>
        <NavLink>See my Groovies</NavLink>
      </Link>
      <BottomWave>
        <Image src={tealWaveBottom} alt='' width={2000} />
      </BottomWave>
      <BottomWave>
        <Image src={clementineWave} alt='' width={2000} />
      </BottomWave>
    </Wrapper>
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
  color: ${COLORS.soil};
  font-size: 1.5rem;
  padding: 12px 20px;
  border: 2px solid ${COLORS.soil};
  border-radius: 8px;
`;

const OrSpacer = styled.p`
  margin: 24px 0;
`;

const Wave = styled.div`
  position: absolute;
  left: 0;
  display: flex;
`;

const TopWave = styled(Wave)`
  top: 0;
`;

const BottomWave = styled(Wave)`
  bottom: 0;
`;

export default Home;
