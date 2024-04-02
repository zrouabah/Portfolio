import React, { useState } from 'react';
import styles from './Header.module.css';
import { getImageUrl } from '../../utils';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.header}>
      {/* Logo */}
      <a id="logo" className={styles.logo} href="/">
        <img src={getImageUrl('nav/logo.webp')} alt="logo" />
      </a>

      {/* Menu */}
      <div className={styles.menu}>
        
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
          alt="menu-button"
          onClick={toggleMenu}
        />
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li><a href="/">accueil</a></li>
          <li><a href="#experience">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*<div className={styles.contacts}>
        
        <div className={`${styles.social} ${menuOpen ? styles.menuOpen : ''}`}>
          <a href="mailto:zineb.rouabah@hotmail.fr">
            <img src={getImageUrl('contact/emailIcon.png')} alt="Icône email" />
          </a>
          <a href="https://www.linkedin.com/in/zineb-rouabah/" target="_blank">
            <img src={getImageUrl('contact/linkedinIcon.png')} alt="Icône LinkedIn" />
          </a>
          <a href="https://github.com/zrouabah" target="_blank">
            <img src={getImageUrl('contact/githubIcon.png')} alt="Icône GitHub" />
          </a>
        </div>
  </div>*/}
    </nav>
  );
};

export default Header;
