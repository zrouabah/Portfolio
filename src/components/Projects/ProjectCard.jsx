import React, { useState } from 'react';

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target='_blank' className={styles.link}>
          Demo
        </a>
        <a href={source} target='_blank' className={styles.link}>
          Source
        </a>
      </div>
      <button 
      onClick={toggleDescription} className={styles.expandButton}>
        {showDescription ? 'En savoir plus' : 'En savoir plus'}
      </button>
      {showDescription && (
        <div className={styles.descriptionCollapse}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
};
