
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light-bg text-dark-text font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
