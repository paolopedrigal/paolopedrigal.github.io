import { useState } from "react";
import "./Project.css";

export default function Project(props: {
  title: string;
  tech: string[];
  picFile: string;
  gitHubLink: string;
  description: string;
}) {
  const picPath: string = "/img/" + props.picFile;

  const [isHovered, setIsHovered] = useState(false);

  const hover = () => {
    setIsHovered(true);
  };
  const noHover = () => {
    setIsHovered(false);
  };

  return (
    <div className="project-container">
      {props.gitHubLink !== "" ? (
        <a
          href={props.gitHubLink}
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={hover}
          onMouseLeave={noHover}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="project-pic"
            style={{ backgroundImage: `url(${picPath})` }}
          ></div>
          <h2
            className="project-title"
            style={isHovered ? { color: "#F9E110" } : { color: "#FFFFFF" }}
          >
            {props.title}
          </h2>
        </a>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="project-pic"
            style={{ backgroundImage: `url(${picPath})` }}
          ></div>
          <h2
            className="project-title"
            style={isHovered ? { color: "#F9E110" } : { color: "#FFFFFF" }}
          >
            {props.title}
          </h2>
        </div>
      )}
      <div className="project-description">
        <p className="project-description-text">{props.description}</p>
        {props.tech.map((tech) => (
          <p className="project-description-skill">{tech}</p>
        ))}
      </div>
    </div>
  );
}
