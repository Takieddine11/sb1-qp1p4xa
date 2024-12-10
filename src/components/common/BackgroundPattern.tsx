import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

export function BackgroundPattern() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(204, 115, 251, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(204, 115, 251, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '2rem 2rem' : '4rem 4rem',
          mask: 'radial-gradient(circle at 50% 50%, black, transparent)'
        }}
      />
    </div>
  );
}