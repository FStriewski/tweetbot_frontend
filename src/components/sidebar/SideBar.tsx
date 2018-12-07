import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import Input from './Input';

const SideBar = ({ byKeyword }) => (
  <StyledSideBar>
    <Input byKeyword={byKeyword} />
  </StyledSideBar>
);

export default SideBar;
