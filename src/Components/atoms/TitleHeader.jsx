import React from 'react';
import styled from 'styled-components';

const PStyled = styled.p`
  font-size: 90px;
  font-weight: 800;
  color: #010511; 
`;

const TitleHeader = ({ text }) => (
  <PStyled>{text}</PStyled>
);

export default TitleHeader;
