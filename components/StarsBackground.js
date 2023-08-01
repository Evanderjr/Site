// components/StarsBackground.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const StarsBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Renderizar o componente Confetti apenas no cliente
  const renderConfetti = typeof window !== 'undefined' && (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      colors={['#FFD700']}
      gravity={0.1}
    />
  );

  return (
    <StarsContainer>
      {renderConfetti}
    </StarsContainer>
  );
};

export default StarsBackground;
