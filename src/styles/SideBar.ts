import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const SideBar = styled.div`
  min-height: 450px;
  width: 300px;
  float: left;

  overflow: hidden;
  border: 1px solid ${SCHEMA_1.COLOR_2};
  border-bottom: none;
  border-top: none;
  padding: 20px;

  input {
    height: 30px;
    width: 200px;
    margin: 10px;
  }
`;
