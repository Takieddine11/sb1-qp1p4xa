import React from 'react';
import Spline from '@splinetool/react-spline';

export function SplineScene() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#cc73fB] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0" style={{ opacity: 0.7 }}>
        <Spline scene="https://prod.spline.design/roomrelaxing-986705fdf2e1a14584d4c71ed3f85991/scene.splinecode" />
      </div>
    </div>
  );
}