import styled from './styled-components';

export const Button = styled.button`
  display: inline-block;

  transition: background 0.2s;

  height: 32px;
  border-radius: 5px;
  border: none;
  outline: none;

  background: transparent;
  cursor: pointer;

  text-align: center;
  white-space: nowrap;
  background-color: red;
  width: 70px;
  color: white;
  margin: 10px;

  &:hover {
    color: green;
  }
`;
