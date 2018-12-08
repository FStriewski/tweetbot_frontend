import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const Header = styled.div`
  box-shadow: 0 2px 6px 0 rgba(214, 214, 214, 1);
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  //width: 100%;
  height: ${HEIGHT.TOP};
  border: 1px solid ${SCHEMA_1.COLOR_2};
  text-align: center;
`;
