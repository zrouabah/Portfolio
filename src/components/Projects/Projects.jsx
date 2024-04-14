import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [showDescriptions, setShowDescriptions] = useState([]);

  useEffect(() => {
    import(`../../data/projects.fr.json`)
      .then((module) => {
        setProjectsData(module.default.projects || []);
        setShowDescriptions(Array(module.default.projects.length).fill(false));
      })
      .catch((error) => {
        console.error('Failed to load projects', error);
      });
  }, []);

  const toggleDescription = (index) => {
    setShowDescriptions((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projets</h2>
      <div className={styles.projects}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            showDescription={showDescriptions[index]}
            toggleDescription={() => toggleDescription(index)}
          />
        ))}
      </div>
    </section>
  );
};
