import React from 'react';
import { AboutHero } from './AboutHero';
import { Mission } from './Mission';
import { Team } from './Team';
import { Stats } from './Stats';

export function About() {
  return (
    <div id="about" className="min-h-screen bg-gray-900">
      <AboutHero />
      <Mission />
      <Stats />
      <Team />
    </div>
  );
}