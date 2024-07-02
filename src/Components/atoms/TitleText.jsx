
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TitleStyled = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0; 
`;

const TemperatureStyled = styled.p`
  font-size: 18px;
  margin: 5px 0; 
`;

const ConditionStyled = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const TitleText = ({ city, temperature, condition }) => (
  <Container>
    <TitleStyled>{city}</TitleStyled>
    <TemperatureStyled>Temperatura: {temperature}°C</TemperatureStyled>
    <ConditionStyled>Condición: {condition}</ConditionStyled>
  </Container>
);

export default TitleText;
