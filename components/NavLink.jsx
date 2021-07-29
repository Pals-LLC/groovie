import styled from 'styled-components';
import { COLORS } from '../styles/colors';

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

export default NavLink;
