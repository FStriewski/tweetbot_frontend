import styled from './styled-components';

import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const MainStage = styled.div`
  overflow: scroll;
  // min-height: 450px;
  background-color: ${COMMON.COLOR_1};

  div {
    margin: 5px;
    padding: 10px;
    border: 1px solid ${SCHEMA_1.COLOR_1};
  }
`;

export const TextOutput = styled.div`
  .dateTime {
    font-size: 12px;
  }

  .text {
    text-align: center;
    font-size: 16px;
    font: italic;
  }

  .author {
    font-size: 14px;
    font: bold;
  }
`;
