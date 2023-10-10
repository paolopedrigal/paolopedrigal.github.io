import { useRef, useEffect } from "react";
import resume from "../Resume_PaoloPedrigal.pdf";
import selfie from "./selfie-2023.jpg";
import { observer } from "../utils/observer";
import "./About.css";

interface AboutMe {
  aboutMeHeading: string;
  aboutMeDescription: string;
  aboutMeObjective: string;
}

const aboutMeInfo: AboutMe = require("./about.json");

export default function About() {
  const aboutMeContentRef: any = useRef(null);
  useEffect(() => {
    observer.observe(aboutMeContentRef.current);
  }, [aboutMeContentRef]);

  return (
    <div className="about-me-container">
      <div className="custom-shape-divider-bottom-1696887117">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="about-me-content" ref={aboutMeContentRef}>
        <div className="about-me-pic-container">
          <img
            src={selfie}
            alt="Picture of Paolo Pedrigal"
            className="about-me-pic"
          />
        </div>
        <div className="about-me-info">
          <h2 className="about-me-heading">{aboutMeInfo.aboutMeHeading}</h2>
          <p className="about-me-description">
            {aboutMeInfo.aboutMeDescription}
          </p>
          <i className="about-me-objective">
            <span>{aboutMeInfo.aboutMeObjective}&nbsp;</span>
            <span>
              Check out my&nbsp;
              <a href={resume} target="_blank" style={{ color: "white" }}>
                resume
              </a>
              &nbsp;or&nbsp;
              <a
                href="mailto:paolopedrigal@gmail.com"
                style={{ color: "white" }}
              >
                contact me.
              </a>
            </span>
          </i>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1696837850">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
