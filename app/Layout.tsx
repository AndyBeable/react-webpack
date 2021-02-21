import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  children: ReactNode;
}

export const Layout = ({ children }: WrapperProps) => {
  return <Wrapper active={false}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ active: boolean }>`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'library tracklist friends'
    'trackbar trackbar trackbar';
`;
