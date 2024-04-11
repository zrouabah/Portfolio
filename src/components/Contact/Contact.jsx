import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href='zineb.rouabah@hotmail.fr'>
            <img src={getImageUrl('contact/emailIcon.png')} alt='Icône email' />
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://www.linkedin.com/in/zineb-rouabah/' target='_blank'>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt='Icône LinkedIn' />
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://github.com/zrouabah' target='_blank'>
            <img src={getImageUrl('contact/githubIcon.png')} alt='Icône GitHub' />
          </a>
        </li>
      </ul>
    </footer>
  );
};
