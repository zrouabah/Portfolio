import React from 'react';
import styles from './Navbar.module.css';
import projectsData from '../../locales/translation'; 
import { getImageUrl } from '../../utils';

const Apropos = () => {
  const aproposData = projectsData.apropos;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>
          Bienvenue ! <br /> Je suis Zineb
        </h1>
        <p className={styles.description}>{aproposData.description}</p>


      </div>
      <img src={getImageUrl('photo_portfolio/photo_portfolio.jpg')} alt={aproposData.imageAlt} className={styles.portfolioImg} />
      
    </section>
  );
};

export default Apropos;
