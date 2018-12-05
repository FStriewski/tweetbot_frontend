import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import Input from './Input';

const SideBar = ({ toggleStream }) => (
  <StyledSideBar>
    <Input onClick={toggleStream} />
  </StyledSideBar>
);

export default SideBar;
