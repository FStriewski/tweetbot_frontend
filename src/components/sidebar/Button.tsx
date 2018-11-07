import * as React from 'react';
import { Button as StyledButton } from '../../styles/Button';

export interface IButtonType {
  onClick: () => void;
}

const click = () => console.log('Click');

const Button = () => (
  <StyledButton onClick={click}>Run!</StyledButton>
);

export default Button;
