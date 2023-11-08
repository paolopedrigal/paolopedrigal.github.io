import { useRef, useEffect } from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import FrontPage from "./WebsiteFrontPage.jpg";
import resume from "./Resume_PaoloPedrigal_Portfolio.pdf";
import { observer } from "./utils/observer";
import "./App.css";

function App() {
  const paoloTitleRef: any = useRef(null);
  const pedrigalTitleRef: any = useRef(null);
  const navRef: any = useRef(null);
  const aboutNavRef: any = useRef(null);
  const projectsNavRef: any = useRef(null);
  const resumeNavRef: any = useRef(null);
  const contactNavRef: any = useRef(null);
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

  const addUnderline = (ref: any) => {
    ref.current.style.textDecoration = "underline";
  };

  const removeUnderline = (ref: any) => {
    ref.current.style.textDecoration = "none";
  };

  useEffect(() => {
    observer.observe(paoloTitleRef.current);
    observer.observe(pedrigalTitleRef.current);
    observer.observe(navRef.current);
  }, [paoloTitleRef, pedrigalTitleRef, navRef]);

  return (
    <div className="app-container">
      <div className="landing-image-container">
        <img
          src={FrontPage}
          alt="Landing Background"
          className="landing-image"
        />
        <div className="landing-title-container">
          <h1 className="landing-title" id="paolo-title" ref={paoloTitleRef}>
            &nbsp;paolo
          </h1>
          <h1
            className="landing-title"
            id="pedrigal-title"
            ref={pedrigalTitleRef}
          >
            pedrigal
          </h1>
        </div>
        <ul className="nav" ref={navRef}>
          <li
            className="nav-item"
            ref={aboutNavRef}
            onClick={() => scrollTo(aboutRef)}
            onMouseEnter={() => addUnderline(aboutNavRef)}
            onMouseLeave={() => removeUnderline(aboutNavRef)}
          >
            about
          </li>
          <li
            className="nav-item"
            ref={projectsNavRef}
            onClick={() => scrollTo(projectsRef)}
            onMouseEnter={() => addUnderline(projectsNavRef)}
            onMouseLeave={() => removeUnderline(projectsNavRef)}
          >
            projects
          </li>
          <li
            className="nav-item"
            ref={resumeNavRef}
            onMouseEnter={() => addUnderline(resumeNavRef)}
            onMouseLeave={() => removeUnderline(resumeNavRef)}
          >
            <a href={resume} target="_blank" rel="noreferrer" id="resume-nav">
              resume
            </a>
          </li>
          <li
            className="nav-item"
            ref={contactNavRef}
            onClick={() => scrollTo(contactRef)}
            onMouseEnter={() => addUnderline(contactNavRef)}
            onMouseLeave={() => removeUnderline(contactNavRef)}
          >
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
