import React from 'react';
import styles from './Navbar.module.css';
import projectsData from '../../locales/translation'; 
import { getImageUrl } from '../../utils';

const Hero = () => {
  const heroData = projectsData.hero;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heroData.title}</h1>
        <p className={styles.description}>{heroData.description}</p>


      </div>
      <img src={getImageUrl('photo_portfolio/photo_portfolio.jpg')} alt={heroData.imageAlt} className={styles.portfolioImg} />
      
    </section>
  );
};

export default Hero;
