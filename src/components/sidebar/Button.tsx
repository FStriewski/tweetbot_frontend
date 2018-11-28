import * as React from 'react';
import { Button as StyledButton } from '../../styles/Button';

export interface IButtonType {
  onClick: () => void;
}

const Button = ({onClick}) => (
  <StyledButton onClick={onClick}>Run!</StyledButton>
);

export default Button;
