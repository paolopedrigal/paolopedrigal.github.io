import { useState } from "react";
import "./Project.css";

export default function Project(props: {
  title: string;
  tech: string;
  picFile: string;
  gitHubLink: string;
}) {
  const picPath: string = "/img/" + props.picFile;

  const [isHovered, setIsHovered] = useState(false);

  const showTech = () => {
    setIsHovered(true);
  };
  const unshowTech = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={props.gitHubLink}
      target="_blank"
      rel="noreferrer"
      className="project-container"
    >
      <div
        className="project-pic"
        style={{ backgroundImage: `url(${picPath})` }}
      ></div>
      <h2
        className="project-title"
        onMouseEnter={showTech}
        onMouseLeave={unshowTech}
      >
        {isHovered ? props.tech : props.title}
      </h2>
    </a>
  );
}
