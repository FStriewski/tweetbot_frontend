import * as React from 'react';
import { useState } from 'react';
import { Button as StyledButton } from '../../styles/Button';

const Input = ({ byKeyword }) => {
  const [keyword, setInput] = useState('');
  const [count, setCount] = useState(10);

  const handleKeywordInput = event => setInput(event.target.value);
  const handleCountInput = event => setCount(Number(event.target.value));

  const handleSubmit = event => {
    event.preventDefault();
    if (keyword) {
      byKeyword(keyword, count);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledButton>Run!</StyledButton>
      <input
        placeholder="keyword"
        type="text"
        name="keywordInput"
        autoComplete="off"
        value={keyword}
        onChange={handleKeywordInput}
      />
      <input
        placeholder="keyword"
        type="text"
        name="countInput"
        autoComplete="off"
        value={count}
        onChange={handleCountInput}
      />
    </form>
  );
};

export default Input;
