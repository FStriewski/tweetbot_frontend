import * as React from 'react';
import { useState } from 'react';
import { Button as StyledButton } from '../../styles/Button';

const Input = ({ onClick }) => {
  const [input, setInput] = useState('');

  const handleInput = event => setInput(event.target.value);
  console.log(input)

  const handleSubmit = (event) =>{
    event.preventDefault();
    onClick(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledButton >Run!</StyledButton>
      <label htmlFor="accountInput">Account:</label>
      <input type="text" name="accountInput" value={input} onChange={handleInput} />
    </form>
  );
};

export default Input;
