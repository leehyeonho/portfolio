import React from 'react';
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Work from './components/Work'
import Project from './components/Project'
import Certificates from './components/Certificates'

import './assets/css/common.css';

function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Work />
      <Project />
      <Certificates />
    </div>
  );
}

export default App;
