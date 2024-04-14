import React, { useState } from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  // Utilisez l'état local pour suivre si l'icône a été cliquée
  const [iconClicked, setIconClicked] = useState({ email: false, linkedin: false, github: false });

  // Définissez une fonction pour gérer le clic sur l'icône
  const handleIconClick = (iconName) => {
    setIconClicked({ ...iconClicked, [iconName]: true });
  };

  return (
    <footer  id='contact'className={styles.container}>
    
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href='mailto:zineb.rouabah@hotmail.fr' onClick={() => handleIconClick('email')}>
            <i className={iconClicked.email ? `${styles.clicked} fa-solid fa-envelope` : 'fa-solid fa-envelope'}></i>
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://www.linkedin.com/in/zineb-rouabah/' target='_blank' onClick={() => handleIconClick('linkedin')}>
            <i className={iconClicked.linkedin ? `${styles.clicked} fa-brands fa-linkedin` : 'fa-brands fa-linkedin'}></i>
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://github.com/zrouabah' target='_blank' onClick={() => handleIconClick('github')}>
            <i className={iconClicked.github ? `${styles.clicked} fa-brands fa-github` : 'fa-brands fa-github'}></i>
          </a>
        </li>
      </ul>
     
    </footer>
  );
};
