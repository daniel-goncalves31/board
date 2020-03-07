import React from "react";
import { ProjectProvider } from "../../contexts/ProjectContext";
import "./home.styles.scss";
import NavBar from "./navbar/NavBar";
import ProjectContainer from "./project/ProjectContainer";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="my-container">
        <ProjectProvider>
          <ProjectContainer />
        </ProjectProvider>
      </div>
    </div>
  );
};

export default Home;
