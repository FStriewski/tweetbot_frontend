import * as React from 'react';
import { useState } from 'react';
import { Button as StyledButton } from '../../styles/Button';

const Input = ({ byKeyword }) => {
  const [input, setInput] = useState('');

  const handleInput = event => setInput(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (input) {
      byKeyword(input);
    }
  };

  return <form onSubmit={handleSubmit}>
    <StyledButton>Run!</StyledButton>
    <input placeholder="keyword" type="text" name="kewordInput" autoComplete="off" value={input} onChange={handleInput} />
  </form>;
};

export default Input;
