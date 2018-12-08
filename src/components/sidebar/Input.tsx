import * as React from 'react';
import { useState } from 'react';
import { Button as StyledButton } from '../../styles/Button';
import DropDown from '../DropDown';

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
      <div>
        <label htmlFor="keyword">Keyword</label>
        <input
          placeholder="keyword"
          type="text"
          name="keyword"
          autoComplete="off"
          value={keyword}
          onChange={handleKeywordInput}
        />
      </div>
      <div>
        <label htmlFor="count">Count (1 - 100)</label>
        <input
          type="text"
          name="count"
          autoComplete="off"
          value={count}
          onChange={handleCountInput}
        />
      </div>
      <div>
        <label htmlFor="">Language</label>
        <DropDown items={['en', 'de']} />
      </div>
      <div>
        <label htmlFor="">Content</label>
        <DropDown items={['mixed', 'recent', 'popular']} />
      </div>
    </form>
  );
};

export default Input;
