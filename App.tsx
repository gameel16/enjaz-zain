
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <ContactInfo />
        <Disclaimer />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default App;
