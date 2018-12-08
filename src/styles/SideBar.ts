import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const SideBar = styled.div`
  position: relative;
  overflow: auto;

  width: 220px;
  overflow: hidden;
  border: 1px solid ${SCHEMA_1.COLOR_2};
  border-bottom: none;
  border-top: none;
  padding: 15px;

  form {
    display: table;
    margin: 0 auto;
  }

  label {
    font-size: 12px;
    display: block;
  }

  input {
    text-align: center;
    display: block;
    height: 25px;
    width: 150px;
    margin-bottom: 20px;
  }
`;
