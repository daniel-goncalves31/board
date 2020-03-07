import React from "react";
import { Project as IProject } from "../../../contexts/ProjectContext";
import Project from "./Project";
import "./project.styles.scss";

interface Props {
  projects: IProject[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="project-container">
      {projects?.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
