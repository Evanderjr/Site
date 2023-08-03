import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('/logo/2.svg'); /* Substitua o caminho pela localização da imagem do seu logo */
  background-size: cover; /* Ajuste o tamanho da imagem de acordo com o elemento */
  animation: ${blinkAnimation} 2s infinite;
`;

const Logo = () => <LogoContainer />;

export default Logo;
