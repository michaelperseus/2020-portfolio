import React from 'react';
import './App.scss';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Links from './Components/Links';
import OtherProjects from './Components/OtherProjects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Links />
      <OtherProjects />
    </div>
  );
}

export default App;
