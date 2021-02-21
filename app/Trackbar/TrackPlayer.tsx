import React from 'react';
import styled from 'styled-components';
import { FiShuffle } from 'react-icons/fi';
import { FiRewind } from 'react-icons/fi';
import { FiPlayCircle } from 'react-icons/fi';
import { FiFastForward } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';

export function TrackPlayer() {
  return (
    <Wrapper>
      <Controls>
        <StyledFiShuffle />
        <FiRewind />
        <StyledFiPlayCircle />
        <FiFastForward />
        <FiRepeat />
      </Controls>
      <ProgressBar></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const Controls = styled.div`
  justify-content: center;

  svg + svg {
    margin-right: 50px;
  }
`;

const StyledFiShuffle = styled(FiShuffle)`
  margin-right: 50px;
`;

const StyledFiPlayCircle = styled(FiPlayCircle)`
  font-size: 40px;
`;

const ProgressBar = styled.div``;
