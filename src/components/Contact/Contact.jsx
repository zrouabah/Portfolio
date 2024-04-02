import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Contactez-moi pour toute question ou collaboration.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Icône email' />
          <a href='zineb.rouabah@hotmail.fr'> zineb.rouabah@hotmail.fr</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt='Icône LinkedIn'
          />
          <a href='https://www.linkedin.com/in/zineb-rouabah/' target='_blank'>
            linkedin.com/zineb-rouabah
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt='Icône GitHub' />
          <a href='https://github.com/zrouabah' target='_blank'>
            github.com/zrouabah
          </a>
        </li>
      </ul>
    </footer>
  );
};
