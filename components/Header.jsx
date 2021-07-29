import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import groovie from '../public/images/groovie.svg';
import { COLORS } from '../styles/colors';

const Header = ({ icon, nav, label }) => {
  return (
    <>
      <HeaderWrapper>
        <FlexBox>
          <Image
            src={groovie}
            alt='Groovie Movie logo'
            width={200}
            height={60}
          />
          <Link href={nav} passHref>
            <HeaderLink aria-label={label}>
              <Image src={icon} alt='Movie Icon' width={36} height={36} />
            </HeaderLink>
          </Link>
        </FlexBox>
        <HeaderBorder color={COLORS.clementine} />
        <HeaderBorder color={COLORS.aqua} />
        <HeaderBorder color={COLORS.jigglypuff} />
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
`;

const FlexBox = styled.div`
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
