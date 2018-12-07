import * as React from 'react';
import { TextOutput as StyledTextOutput } from '../../styles/MainStage';
import dateFormatter from '../../lib/dateFormatter';

/*
        "activeSince": "Mon Nov 05 14:45:20 +0000 2018",
        "coordinates": null,
        "createdAt": "Fri Dec 07 15:30:22 +0000 2018",
        "id": 1059456634907320300,
        "location": "Heaven and Hell",
        "name": "むーん￤テスト期間中。低浮上￤24日進撃済み",
        "retweetCount": 25616,
        "screen_name": "Jeon______0901",
        "text": "RT @billboard: .@BTS_twt earns 2019 #Grammys nomination: here's why it's important https://t.co/k6RDMcynxl https://t.co/2Us80hhxJH"

*/

const dateString = date => {
  const newDate = dateFormatter(date);

  return [newDate.day, newDate.month, newDate.year].join(' ');
};

const TextOutput = ({ element }) => (
  <StyledTextOutput>
    <div className="dateTime">At: {element.createdAt}</div>
    <div className="text">
      {element.text} <span>Retweets: [{element.retweetCount}]</span>
    </div>
    <div className="author">
      {element.screen_name}
      <span>({dateString(element.activeSince)})</span>
    </div>
  </StyledTextOutput>
);

export default TextOutput;
