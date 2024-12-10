import React from 'react';

export function Logo({ className = "h-8 w-8", color = "currentColor" }: { className?: string; color?: string }) {
  // Create a complex path string with multiple curves and details
  const generateComplexMane = () => {
    let path = '';
    const segments = 50;
    const radius = 35;
    const center = { x: 50, y: 50 };
    
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const nextAngle = ((i + 1) / segments) * Math.PI * 2;
      
      const x1 = center.x + Math.cos(angle) * radius;
      const y1 = center.y + Math.sin(angle) * radius;
      const x2 = center.x + Math.cos(nextAngle) * radius;
      const y2 = center.y + Math.sin(nextAngle) * radius;
      
      const cpx1 = center.x + Math.cos(angle) * (radius * 1.2);
      const cpy1 = center.y + Math.sin(angle) * (radius * 1.2);
      const cpx2 = center.x + Math.cos(nextAngle) * (radius * 1.2);
      const cpy2 = center.y + Math.sin(nextAngle) * (radius * 1.2);
      
      if (i === 0) {
        path += `M ${x1} ${y1} `;
      }
      path += `C ${cpx1} ${cpy1} ${cpx2} ${cpy2} ${x2} ${y2} `;
    }
    return path;
  };

  // Generate multiple layers of detail
  const generateDetailLayer = (offset: number) => {
    let path = '';
    const points = 100;
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const x = 50 + Math.cos(angle) * (30 + offset + Math.sin(angle * 5) * 2);
      const y = 50 + Math.sin(angle) * (30 + offset + Math.cos(angle * 5) * 2);
      path += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;
    }
    path += 'Z';
    return path;
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="maneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.9" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood floodColor={color} floodOpacity="0.5" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base shape */}
      <path
        d={generateComplexMane()}
        fill="url(#maneGradient)"
        filter="url(#shadow)"
      />

      {/* Multiple detail layers */}
      {[0, 2, 4, 6].map((offset, index) => (
        <path
          key={offset}
          d={generateDetailLayer(offset)}
          fill="none"
          stroke={color}
          strokeWidth="0.2"
          opacity={0.3 - index * 0.05}
        />
      ))}

      {/* Face details */}
      <path
        d="M 45 40 C 45 42.8 43.8 45.4 41.8 47.4 C 39.8 49.4 37.2 50.6 34.4 50.6 C 33.6 50.6 32.8 50.5 32 50.3 C 31.2 50.1 30.4 49.8 29.7 49.4 C 29 49 28.3 48.5 27.7 47.9 C 27.1 47.3 26.6 46.6 26.2 45.9 C 25.8 45.2 25.5 44.4 25.3 43.6 C 25.1 42.8 25 42 25 41.2 C 25 40.4 25.1 39.6 25.3 38.8 C 25.5 38 25.8 37.2 26.2 36.5 C 26.6 35.8 27.1 35.1 27.7 34.5 C 28.3 33.9 29 33.4 29.7 33 C 30.4 32.6 31.2 32.3 32 32.1 C 32.8 31.9 33.6 31.8 34.4 31.8 C 37.2 31.8 39.8 33 41.8 35 C 43.8 37 45 39.6 45 42.4 V 40 Z"
        fill={color}
      />
      <path
        d="M 75 40 C 75 42.8 73.8 45.4 71.8 47.4 C 69.8 49.4 67.2 50.6 64.4 50.6 C 63.6 50.6 62.8 50.5 62 50.3 C 61.2 50.1 60.4 49.8 59.7 49.4 C 59 49 58.3 48.5 57.7 47.9 C 57.1 47.3 56.6 46.6 56.2 45.9 C 55.8 45.2 55.5 44.4 55.3 43.6 C 55.1 42.8 55 42 55 41.2 C 55 40.4 55.1 39.6 55.3 38.8 C 55.5 38 55.8 37.2 56.2 36.5 C 56.6 35.8 57.1 35.1 57.7 34.5 C 58.3 33.9 59 33.4 59.7 33 C 60.4 32.6 61.2 32.3 62 32.1 C 62.8 31.9 63.6 31.8 64.4 31.8 C 67.2 31.8 69.8 33 71.8 35 C 73.8 37 75 39.6 75 42.4 V 40 Z"
        fill={color}
      />
      <path
        d="M 50 55 C 48.9 55 47.9 55.2 46.9 55.6 C 45.9 56 45 56.6 44.2 57.4 C 43.4 58.2 42.8 59.1 42.4 60.1 C 42 61.1 41.8 62.1 41.8 63.2 C 41.8 64.3 42 65.3 42.4 66.3 C 42.8 67.3 43.4 68.2 44.2 69 C 45 69.8 45.9 70.4 46.9 70.8 C 47.9 71.2 48.9 71.4 50 71.4 C 51.1 71.4 52.1 71.2 53.1 70.8 C 54.1 70.4 55 69.8 55.8 69 C 56.6 68.2 57.2 67.3 57.6 66.3 C 58 65.3 58.2 64.3 58.2 63.2 C 58.2 62.1 58 61.1 57.6 60.1 C 57.2 59.1 56.6 58.2 55.8 57.4 C 55 56.6 54.1 56 53.1 55.6 C 52.1 55.2 51.1 55 50 55 Z"
        fill={color}
      />
      <path
        d="M 50 45 L 55 50 H 45 L 50 45 Z"
        fill={color}
      />

      {/* Additional decorative elements */}
      {Array.from({ length: 100 }).map((_, i) => {
        const angle = (i / 100) * Math.PI * 2;
        const radius = 40 + Math.sin(angle * 8) * 2;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="0.2"
            fill={color}
            opacity="0.3"
          />
        );
      })}
    </svg>
  );
}