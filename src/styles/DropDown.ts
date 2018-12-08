import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_3, HEIGHT } from './variables';

export const DropDown = styled.div`
  postion: relative;
  list-style-type: none;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  // top: 85%;
  background-color: ${COMMON.COLOR_1};
  min-width: 150px;
  box-shadow: 0 2px 6px 0 rgba(214, 214, 214, 1);
`;

export const List = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 10px 5px;
  margin: 0;
`;

export const ListLabel = styled.div`
  text-align: center;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  outline: none;
  text-align: center;
  background-color: transparent;
  border: 1px solid ${SCHEMA_1.COLOR_2};
`;

export const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  height: auto;
  font-size: 14px;
  border-radius: 5px;
`;
