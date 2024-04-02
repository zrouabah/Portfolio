/** @format */

import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className={styles.App}>
         <Header />
        <Navbar />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
