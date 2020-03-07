import React, { useContext, useEffect, useState } from "react";
import Project from "../components/home/project/Project";
import { firestore } from "../config/firebase";

export interface Project {
  id: string;
  title: string;
  description: string;
  date: Date;
  stagesIds: string[];
}

interface Context {
  projects: Project[];
}

const ProjectContext = React.createContext<Partial<Context>>({
  projects: []
});

const useProjectContext = () => useContext(ProjectContext);

const ProjectProvider: React.FC = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    console.log("effect projects");
    const unsubscribe = firestore
      .collection("projects")
      .orderBy("date", "desc")
      .onSnapshot(querySnaphot => {
        querySnaphot.docChanges().forEach(docChange => {
          const data = {
            ...docChange.doc.data(),
            date: docChange.doc.data().date.toDate(),
            id: docChange.doc.id
          };

          if (docChange.type === "added") {
            setProjects(prevProjects => [...prevProjects, data as Project]);
          } else if (docChange.type === "modified") {
            setProjects(
              prevProjects =>
                prevProjects.map(project =>
                  project.id !== data.id ? project : data
                ) as Project[]
            );
          } else if (docChange.type === "removed") {
            setProjects(prevProjects =>
              prevProjects.filter(project => project.id !== data.id)
            );
          }
        });
      });

    return function() {
      unsubscribe();
    };
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { useProjectContext, ProjectProvider };
