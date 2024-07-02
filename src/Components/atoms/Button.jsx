import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  margin: 10px 5px;
  padding: 10px 20px;
  font-size: 19px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ onClick, children }) => (
  <ButtonStyled onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;
