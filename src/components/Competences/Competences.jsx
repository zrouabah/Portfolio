import React, { useEffect, useState, useRef } from 'react';
import styles from './Competences.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Competences = () => {
  const [isVisible, setIsVisible] = useState(false);
  const competencesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (competencesRef.current) {
        const topOffset = competencesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isScrolledIntoView = topOffset < windowHeight;
        setIsVisible(isScrolledIntoView || window.location.hash === '#competences');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
