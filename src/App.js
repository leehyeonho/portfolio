import React from 'react';
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Work from './components/Work'
import Project from './components/Project'
import Contactme from './components/Contactme'

import './assets/css/common.css';

function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Work />
      <Project />
      < Contactme />
    </div>
  );
}

export default App;
