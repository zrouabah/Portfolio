import React from 'react';
import styles from './About.module.css';
import projectsData from '../../locales/translation'; 
import { getImageUrl } from '../../utils';

const Apropos = () => {
  const aproposData = projectsData.apropos;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>
      À propos de moi
        </h1>
        <p className={styles.description}>{aproposData.description}</p>


      </div>
     
    </section>
  );
};

export default Apropos;
