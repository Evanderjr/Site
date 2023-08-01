// components/InclinedImage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const tiltAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg); /* Grau de inclinação */
  }
  100% {
    transform: rotate(0deg);
  }
`;

const InclinedImageContainer = styled.div`
  animation: ${tiltAnimation} 3s ease-in-out infinite; /* Duração da animação */
`;

const InclinedImage = () => (
  <InclinedImageContainer>
    {/* Remova as palavras redundantes do atributo alt */}
    <img src="/10.png" alt="Inclined" />
  </InclinedImageContainer>
);

export default InclinedImage;
