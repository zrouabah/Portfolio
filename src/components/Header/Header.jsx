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
        zineb rouabah
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
          <li><a href="/">Accueil</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
