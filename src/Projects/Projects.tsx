import { useRef, useEffect } from "react";
import Project from "./Project/Project";
import { observer } from "../utils/observer";
import "./Projects.css";

interface ProjectObject {
  id: string;
  title: string;
  tech: string;
  picFile: string;
  gitHubLink: string;
}

const projectsData: ProjectObject[] = require("./projects.json");

export default function Projects() {
  const projectsHeadingRef: any = useRef(null);
  const projectsItemsRef: any = useRef(null);
  useEffect(() => {
    observer.observe(projectsHeadingRef.current);
    observer.observe(projectsItemsRef.current);
  }, [projectsHeadingRef, projectsItemsRef]);
  return (
    <div className="projects-container">
      <h1 className="projects-heading" ref={projectsHeadingRef}>
        My Projects.
      </h1>
      <div className="custom-shape-divider-bottom-1696836311">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="project-items" ref={projectsItemsRef}>
        {projectsData.map((project: ProjectObject) => (
          <Project
            title={project.title}
            tech={project.tech}
            picFile={project.picFile}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </div>
    </div>
  );
}
