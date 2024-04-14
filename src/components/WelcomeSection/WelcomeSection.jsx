import React from 'react';
import styles from './WelcomeSection.module.css';
import { getImageUrl } from '../../utils';

const WelcomeSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:rouabah.zineb@hotmail.fr'; 
  };

  const handleDownloadClick = () => {
    window.open('zineb_rouabah_CV.pdf', ); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <p>Bonjour,</p>
        <p>Je suis Zineb Rouabah</p>
        <p>Développeuse web</p>
        <button className={styles.btnHere} onClick={handleContactClick}>me contacter</button>
        <button className={styles.btnDownload} onClick={handleDownloadClick}>mon CV</button>
      </div>
      <img src={getImageUrl('photo_portfolio/photo_portfolio.jpg')} alt="Photo de profil" className={styles.model} />
    </div>
  );
};

export default WelcomeSection;
