import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const BottomBar = styled.div`
  font-size: 10px;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: ${HEIGHT.BOTTOM};
  border: 1px solid ${SCHEMA_1.COLOR_2};
`;
