import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  showDescription,
  toggleDescription,
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      
      <div className={styles.links}>
        <a href={demo} target='_blank' className={styles.link}>Demo</a>
        <a href={source} target='_blank' className={styles.link}>Source</a>
      </div>
      
      <button 
        onClick={toggleDescription} 
        className={styles.expandButton}
      >
        {showDescription ? 'Réduire' : 'En savoir plus'}
      </button>
      
      {showDescription && (
        <div className={styles.descriptionCollapse}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
};
