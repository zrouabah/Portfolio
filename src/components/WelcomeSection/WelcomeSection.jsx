import React from 'react';
import styles from './WelcomeSection.module.css';
import { getImageUrl } from '../../utils'; // Assurez-vous d'importer la fonction getImageUrl

const WelcomeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <p>Bonjour,</p>
        <p>Je suis Zineb Rouabah</p>
        <p>Developpeuse web</p>
        <button className={styles.btnHere}>me contacter</button>
        <button className={styles.btnDownload}>mon CV</button>
      </div>
      <img src={getImageUrl('photo_portfolio/photo_portfolio.jpg')} alt="Photo de profil" className={styles.model} />
    </div>
  );
};

export default WelcomeSection;
