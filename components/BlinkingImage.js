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

const BlinkingImage = styled.img`
  width: 200px;
  height: 200px;
  animation: ${blinkAnimation} 2s infinite;
`;

const BlinkingImageComponent = () => <BlinkingImage src="/10.png" alt="Descrição da imagem" />;

export default BlinkingImageComponent;

