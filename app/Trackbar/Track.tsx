import React from 'react';
import styled from 'styled-components';

export function Track() {
  return (
    <Wrapper>
      <AlbumCover
        src='https://i.picsum.photos/id/645/200/200.jpg?hmac=cSCoZuf6WY_fGNCAORxjDRxPwHsSbagPJ1_9SRlugUs'
        alt=''
      />
      <TrackInfo>
        <TrackName>The Fall</TrackName>
        <Artist>Rhye</Artist>
      </TrackInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AlbumCover = styled.img`
  width: 70px;
  height: 70px;
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TrackName = styled.p`
  color: #fafafa;
  font-size: 16px;
  margin-bottom: -5px;
`;

const Artist = styled.p`
  color: #d8d7d7;
  font-size: 14px;
`;
