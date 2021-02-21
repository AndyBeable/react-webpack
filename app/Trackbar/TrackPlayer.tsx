import React from 'react';
import styled from 'styled-components';
import { FiShuffle } from '../../node_modules/react-icons/fi';
import { FiRewind } from 'react-icons/fi';
import { FiPlayCircle } from 'react-icons/fi';
import { FiFastForward } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';

export function TrackPlayer() {
  return (
    <Wrapper>
      <Controls>
        <FiShuffle />
        <FiRewind />
        <FiPlayCircle />
        <FiFastForward />
        <FiRepeat />
      </Controls>
      <ProgressBar></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fafafa;
  grid-area: trackbar;
`;

const Controls = styled.div`
  justify-content: space-between;
`;

const FiShuffle = styled.i`
  margin-right: 50px;
`;

const ProgressBar = styled.div``;
