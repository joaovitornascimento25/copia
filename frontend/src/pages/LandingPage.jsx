import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Problems from '../components/landing/Problems';
import Solution from '../components/landing/Solution';
import Benefits from '../components/landing/Benefits';
import TargetAudience from '../components/landing/TargetAudience';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[rgb(17,17,19)]">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Benefits />
        <TargetAudience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
