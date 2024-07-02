import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  display: inline-block;
  margin: 10px 5px;
  padding: 10px;
  width: calc(100% - 160px);
  max-width: 450px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;


`;

const Input = ({ type, placeholder, value, onChange }) => (
  <InputStyled
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
