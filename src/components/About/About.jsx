import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>À Propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Image de profil"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/cursorIcon.png')}
              alt="Icône frontend"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>Description du frontend</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/serverIcon.png')}
              alt="Icône backend"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>Description du backend</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/cursorIcon.png')}
              alt="Icône UI"
            />
            <div className={styles.aboutItemText}>
              <h3>UI</h3>
              <p>Description de l'interface utilisateur</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
