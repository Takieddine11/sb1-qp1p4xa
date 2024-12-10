import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Mission } from '../components/about/Mission';
import { Team } from '../components/about/Team';
import { Stats } from '../components/about/Stats';

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