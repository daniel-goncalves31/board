import React from "react";
import { Project as IProject } from "../../../contexts/ProjectContext";
import { useHistory } from "react-router-dom";

interface Props {
  project: IProject;
}

const Project: React.FC<Props> = ({ project }) => {
  const { push } = useHistory();

  const handleOnClick = () => {
    push(`/projects/${project.id}`);
  };
  return (
    <div className="project" onClick={handleOnClick}>
      <h5 className="title">{project.title}</h5>
      <em className="has-text-grey is-size-7">
        {project.date.toLocaleString()}
      </em>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
