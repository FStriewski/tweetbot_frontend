import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import TextOutput from './TextOutput';

const MainStage = (tweets: any) => (
  <StyledMainStage>
    {tweets.tweets.map((tweet)=> <TextOutput key={tweet.id} element={tweet}/>)}
  </StyledMainStage>
);

export default MainStage;
