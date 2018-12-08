import styled from './styled-components';

import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const MainStage = styled.div`
  padding: 10px;
  float: right;
  margin: 0 auto; 
  overflow: auto;
}`;

export const TextWrapper = styled.div`
  width: 500px;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
`;

export const TextOutput = styled.div`
  border: 1px solid ${SCHEMA_1.COLOR_2}
  width: 400px;
  margin-bottom: 40px
    ;
  
  
  .dateTime {
  font-size: 12px;
  border-bottom: 1px solid ${SCHEMA_1.COLOR_2}
  padding: 5px
  }

  .text {
    text-align: center;
    font-size: 14px;
    font: italic;
    padding: 10px;
  }

  .author {
    font-size: 12px;
    font: bold;
    border-top: 1px solid ${SCHEMA_1.COLOR_2}
    padding: 5px
    text-align: right;
  }
`;
