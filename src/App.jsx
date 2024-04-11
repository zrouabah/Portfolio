/** @format */

import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Contact } from './components/Contact/Contact';
import { Competences } from './components/Competences/Competences';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

function App() {
  return (
    <Router>
      <div className={styles.App}>
         <Header />
         <WelcomeSection/>
        <About />
        <Competences />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
