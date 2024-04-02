/** @format */
import React, { useEffect, useState } from 'react';
import styles from './Competences.module.css';
import skills from '../../data/skills.json';
import historyFr from '../../data/history.fr.json'; // Importez le fichier JSON en français
import { getImageUrl } from '../../utils';

export const Competences = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Utilisez les données importées directement du fichier JSON en français
    setHistory(historyFr.history || []);
  }, []);
  return (
    <section className={styles.container} id='competences'>
      <h2 className={styles.title}>Competences</h2>
      <div className={styles.content}>
        {/* Render Skills */}
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
