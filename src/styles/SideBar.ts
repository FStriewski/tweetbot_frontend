import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const SideBar = styled.div`
  position: relative;
  overflow: auto;

  width: 260px;
  overflow: hidden;
  border: 1px solid ${SCHEMA_1.COLOR_2};
  border-bottom: none;
  border-top: none;
  padding: 15px;

  input {
    height: 30px;
    width: 150px;
    margin: 10px;
  }
`;
