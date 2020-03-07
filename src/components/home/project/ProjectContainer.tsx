import React from "react";
import { withRouter, match } from "react-router-dom";
import { useModalContext } from "../../../contexts/ModalContext";
import { useProjectContext } from "../../../contexts/ProjectContext";
import BoardContainer from "../board-container/BoardContainer";
import Projects from "./Projects";
import ProjectModal from "../project-modal/ProjectModal";

interface Props {
  match: match<any>;
}

const ProjectContainer: React.FC<Props> = ({ match }) => {
  const { showProjectModal } = useModalContext();
  const { projects } = useProjectContext();

  const projectId = match.params.projectId;
  const selectedProject = projects?.find(projects => projects.id === projectId);

  return (
    <div style={{ height: "100%" }}>
      {selectedProject ? (
        <BoardContainer project={selectedProject} />
      ) : (
        <Projects projects={projects!} />
      )}
      {showProjectModal && <ProjectModal />}
    </div>
  );
};

export default withRouter(ProjectContainer);
