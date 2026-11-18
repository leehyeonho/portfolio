import React from 'react';
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Work from './components/Work'
import Project from './components/Project'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

import './assets/css/common.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="sr-only">이현호 포트폴리오</h1>
        <Aboutme />
        <Skills />
        <Work />
        <Project />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
