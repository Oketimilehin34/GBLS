import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { Objectives } from './components/Objectives';
import { Speakers } from './components/Speakers';
import { Programme } from './components/Programme';
import { WhyAttend } from './components/WhyAttend';
import { Statistics } from './components/Statistics';
import { Sponsors } from './components/Sponsors';
import { Registration } from './components/Registration';
import { Venue } from './components/Venue';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProgramme = () => {
    const element = document.getElementById('programme');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface-soft text-navy-deep selection:bg-gold-accent selection:text-navy-deep flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onRegisterClick={scrollToRegistration} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Full-screen Hero Section */}
        <Hero
          onRegisterClick={scrollToRegistration}
          onExploreProgrammeClick={scrollToProgramme}
        />

        {/* Dynamic Countdown Ribbon */}
        <Countdown />

        {/* About the Conference & Vision */}
        <About />

        {/* Core Conference Objectives */}
        <Objectives />

        {/* Distinguished Speakers & Special Guests */}
        <Speakers />

        {/* Detailed 3-Day Conference Programme */}
        <Programme />

        {/* Why Attend & Delegate Breakdown */}
        <WhyAttend onRegisterClick={scrollToRegistration} />

        {/* High-Impact Statistics with Counter Animations */}
        <Statistics />

        {/* Sponsors & Strategic Alliances */}
        <Sponsors />

        {/* Delegate Accreditation & Registration Form */}
        <Registration />

        {/* Venue, Setting & Map Integration */}
        <Venue />

        {/* Interactive Accordion FAQ */}
        <FAQ />

        {/* Direct Secretariat Contact */}
        <Contact />
      </main>

      {/* Global Executive Footer */}
      <Footer />
    </div>
  );
};

export default App;

