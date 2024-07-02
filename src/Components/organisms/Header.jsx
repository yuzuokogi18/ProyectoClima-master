import React from 'react';
import styled from 'styled-components';
import TitleHeader from '../atoms/TitleHeader';
const backgroundImage = '/4.jpg'; 

const HeaderStyled = styled.header`
  width: 100%;
  height: 40vh;
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Header = () => (
  <HeaderStyled>
    <TitleHeader text="Weather App" />
  </HeaderStyled>
);

export default Header;
