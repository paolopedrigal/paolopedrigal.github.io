import { useRef } from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import FrontPage from "./img/WebsiteFrontPage.jpg";
import resume from "./Resume_PaoloPedrigal.pdf";
import "./App.css";

function App() {
  const aboutRef: any = useRef(null);
  const projectsRef: any = useRef(null);
  const contactRef: any = useRef(null);

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <div>
      <div className="landing-image-container">
        <img src={FrontPage} alt="Landing Image" className="landing-image" />
        <div className="landing-title-container">
          <h1 className="landing-title" id="paolo-title">
            &nbsp;paolo
          </h1>
          <h1 className="landing-title" id="pedrigal-title">
            pedrigal
          </h1>
        </div>
        <ul className="nav">
          <li className="nav-item" onClick={() => scrollTo(aboutRef)}>
            about
          </li>
          <li className="nav-item" onClick={() => scrollTo(projectsRef)}>
            projects
          </li>
          <li className="nav-item">
            <a href={resume} target="_blank" id="resume-nav">
              resume
            </a>
          </li>
          <li className="nav-item" onClick={() => scrollTo(contactRef)}>
            contact
          </li>
        </ul>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
