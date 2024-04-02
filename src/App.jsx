/** @format */

import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Contact } from './components/Contact/Contact';
import { Competences } from './components/Competences/Competences';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className={styles.App}>
         <Header />
        <Navbar />
        <Competences />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
