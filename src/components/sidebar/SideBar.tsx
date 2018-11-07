import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import Input from './Input';
import Button from './Button';

const SideBar = () => (
  <StyledSideBar>
    <Button/>
    <Input />
  </StyledSideBar>
);

export default SideBar;
