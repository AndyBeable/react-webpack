import React from 'react';
import styled from 'styled-components';
import { Track } from './Track';
import { TrackPlayer } from './TrackPlayer';
import { Controls } from './Controls';

export function Trackbar() {
  return (
    <Wrapper>
      <Track />
      <TrackPlayer />
      <Controls />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #3c3838;
  padding: 2rem;
  position: relative;
  grid-area: trackbar;
  display: flex;
`;
