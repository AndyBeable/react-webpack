import React from 'react';
import styled from 'styled-components';
import { FiList } from 'react-icons/fi';
import { BiDevices } from 'react-icons/bi';
import { FiVolume2 } from 'react-icons/fi';

export function Controls() {
  return (
    <Wrapper>
      <StyledControls>
        <FiList />
        <BiDevices />
        <FiVolume2 />
      </StyledControls>
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

const StyledControls = styled.div`
  justify-content: space-between;
  svg {
    margin-right: 50px;
  }
`;
