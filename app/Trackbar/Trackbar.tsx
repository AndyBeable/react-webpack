import React from 'react';
import styled from 'styled-components';
import { Track } from './Track';
import { TrackPlayer } from './TrackPlayer';

export function Trackbar() {
  return (
    <Wrapper>
      <Track />
      <TrackPlayer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #3c3838;
  padding: 2rem;
  position: relative;
  grid-area: trackbar;
`;
