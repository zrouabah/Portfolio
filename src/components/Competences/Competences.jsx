import React, { useEffect, useState, useRef } from 'react';
import styles from './Competences.module.css';
import skills from '../../data/skills.json';
import historyFr from '../../data/history.fr.json'; // Importez le fichier JSON en français
import { getImageUrl } from '../../utils';

export const Competences = () => {
  const [history, setHistory] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const competencesRef = useRef(null);

  useEffect(() => {
    // Utilisez les données importées directement du fichier JSON en français
    setHistory(historyFr.history || []);

    const handleScroll = () => {
      if (competencesRef.current) {
        const topOffset = competencesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isScrolledIntoView = topOffset < windowHeight;
        setIsVisible(isScrolledIntoView || window.location.hash === '#competences');
      }
    };

    // Écouter le scroll de la fenêtre
    window.addEventListener('scroll', handleScroll);

    // Vérifier si la section est visible au montage initial
    handleScroll();

    // Nettoyer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCompetencesLinkClick = (e) => {
    e.preventDefault();
    setIsVisible(true);
    window.location.href = '#competences';
  };

  return (
    <section className={styles.container} id='competences' ref={competencesRef}>
      <h2 className={styles.title}>Compétences</h2>
      <div className={styles.content}>
        {/* Render Skills uniquement si la section est visible */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
