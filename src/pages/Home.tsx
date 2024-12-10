import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Locations } from '../components/Locations';
import { About } from '../components/about/About';
import { Contact } from '../components/Contact';
import { ExpandingReach } from '../components/ExpandingReach';

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Locations />
      <ExpandingReach />
      <About />
      <Contact />
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 GlobalStay. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}