'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Education from '@/components/Education';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'about' | 'experience' | 'skills' | 'education' | 'contact'>('about');

  return (
    <div className="min-h-screen text-foreground">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Main Content */}
        <main className="flex-1">
          {activeSection === 'about' && <Hero />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
}
