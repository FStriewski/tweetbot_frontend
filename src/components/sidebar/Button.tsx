import * as React from 'react';
import { Button as StyledButton } from '../../styles/Button';

export interface IProps {
  onClick: () => void;
}

// const click = () => console.log('Click');

const Button = (props: IProps) => (
  <StyledButton onClick={props.onClick}>Run!</StyledButton>
);

export default Button;
