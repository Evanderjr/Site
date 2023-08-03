import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(0);
  }
  50% {
    transform: translateX(-25%) translateY(-10px) rotate(-10deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
`;

const WaterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #add8e6; /* Cor de fundo da água */
  opacity: 0.5; /* Opacidade da água */
  z-index: -1;
  animation: ${waveAnimation} 4s linear infinite;
`;

const WaterAnimation = () => (
  <WaterBackground />
);

export default WaterAnimation;
