import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovie.svg';
import { COLORS } from '../styles/colors';

const Header = ({ icon, nav }) => {
  return (
    <>
      <HeaderWrapper>
        <Image src={groovie} alt='Groovie Movie logo' width={200} height={60} />
        <Link href={nav} passHref>
          <HeaderLink aria-label='My Groovies'>
            <Image src={icon} alt='Movie Icon' width={36} height={36} />
          </HeaderLink>
        </Link>
      </HeaderWrapper>
      <HeaderBorder color={COLORS.clementine} />
      <HeaderBorder color={COLORS.aqua} />
      <HeaderBorder color={COLORS.jigglypuff} />
    </>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
`;

const HeaderBorder = styled.div`
  border-bottom: 8px solid ${(p) => p.color};
`;

const HeaderLink = styled.a`
  display: flex;
  align-items: center;
`;

export default Header;
