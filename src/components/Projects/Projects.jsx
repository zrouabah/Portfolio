import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    import(`../../data/projects.fr.json`)
      .then((module) => {
        setProjectsData(module.default.projects || []);
      })
      .catch((error) => {
        console.error('Failed to load projects', error);
      });
  }, []);

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projets</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
