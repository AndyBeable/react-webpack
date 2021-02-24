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
      <Bar type='range' min='0' max='' value='' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Controls = styled.div`
  justify-content: center;
  margin-bottom: 20px;

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

const ProgressBar = styled.input`
  width: 100%;
`;

const Bar = styled.input`
  width: 30rem;
`;
