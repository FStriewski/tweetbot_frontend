import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import TextOutput from './TextOutput';

const MainStage = (tweets: any) => (
  <StyledMainStage>
    <TextOutput tweets={tweets}/>
  </StyledMainStage>
);

export default MainStage;
