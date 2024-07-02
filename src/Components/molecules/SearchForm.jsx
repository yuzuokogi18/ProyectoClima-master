import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const SearchForm = ({ value, onChange, onSubmit }) => (
  <FormStyled onSubmit={onSubmit}>
    <Input
      type="text"
      placeholder="Enter city name"
      value={value}
      onChange={onChange}
    />
    <Button type="submit">Add City</Button>
  </FormStyled>
);

export default SearchForm;
