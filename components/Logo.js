// components/Logo.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LogoContainer = styled.div`
  width: 100px; /* Defina o tamanho do logo conforme necessário */
  height: 100px; /* Defina o tamanho do logo conforme necessário */
  animation: ${rotateAnimation} 3s linear infinite; /* Defina a animação e duração */
`;

const Logo = () => (
  <LogoContainer>
    {/* Coloque aqui o conteúdo do seu logo */}
    <img src="/logo/2.svg" alt="Logo" />
  </LogoContainer>
);

export default Logo;
