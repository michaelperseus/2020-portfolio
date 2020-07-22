import React from 'react';
import './App.scss';

import Message from './Components/Message';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Links from './Components/Links';
import OtherProjects from './Components/OtherProjects';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Message />
      <Navbar />
      <Hero />
      <Links />
      <OtherProjects />
      <Bio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
