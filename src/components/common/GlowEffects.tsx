import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

export function GlowEffects() {
  const isMobile = useIsMobile();
  const scale = isMobile ? 0.6 : 1;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[128px] opacity-50 bg-[#cc73fB]/20"
        style={{ 
          width: `${40 * scale}rem`,
          height: `${40 * scale}rem`
        }}
      />
      <div 
        className="absolute top-0 left-0 rounded-full blur-[100px] opacity-30 bg-purple-600/20"
        style={{ 
          width: `${30 * scale}rem`,
          height: `${30 * scale}rem`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 rounded-full blur-[120px] opacity-40 bg-[#cc73fB]/20"
        style={{ 
          width: `${35 * scale}rem`,
          height: `${35 * scale}rem`
        }}
      />
    </div>
  );
}