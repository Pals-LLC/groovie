import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Grid = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
`;

export { Layout, Grid };
