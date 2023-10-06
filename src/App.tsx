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
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="landing-image-container">
        <img src={FrontPage} alt="Landing Image" className="landing-image" />
        <h1 className="landing-title">
          &nbsp;paolo
          <br />
          pedrigal
        </h1>
        <ul className="nav">
          <li onClick={() => scrollTo(aboutRef)}>about</li>
          <li onClick={() => scrollTo(projectsRef)}>projects</li>
          <li>
            <a href={resume} target="_blank">
              resume
            </a>
          </li>
          <li onClick={() => scrollTo(contactRef)}>contact</li>
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
