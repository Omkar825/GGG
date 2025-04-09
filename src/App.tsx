import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Workflow from './components/Workflow';
import Prototype from './components/Prototype';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Workflow />
      <Prototype />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;