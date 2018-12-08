import * as React from 'react';
import {
  MainStage as StyledMainStage,
  TextWrapper as StyledTextWrapper
} from '../../styles/MainStage';
import TextOutput from './TextOutput';

const MainStage = (tweets: any) => (
  <StyledMainStage>
    <StyledTextWrapper>
      {tweets.tweets.map(tweet => (
        <TextOutput key={tweet.id} element={tweet} />
      ))}
    </StyledTextWrapper>
  </StyledMainStage>
);

export default MainStage;
