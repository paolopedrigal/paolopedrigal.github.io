import { useRef, useEffect } from "react";
import { observer } from "../utils/observer";
import gitHubIcon from "./github-icon-logo.png";
import linkedInIcon from "./linkedin-icon-logo.png";
import emailIcon from "./mail-icon.png";
import "./Contact.css";

const GITHUB_LINK: string = "https://github.com/paolopedrigal";
const EMAIL_LINK: string = "mailto:paolopedrigal@gmail.com";
const LINKEDIN_LINK: string = "https://www.linkedin.com/in/paolopedrigal/";

export default function Contact() {
  const contactHeaderRef: any = useRef(null);
  const contactContentRef: any = useRef(null);
  useEffect(() => {
    observer.observe(contactHeaderRef.current);
    observer.observe(contactContentRef.current);
  }, [contactHeaderRef, contactContentRef]);

  return (
    <div className="contact-container">
      <h2 className="contact-heading" ref={contactHeaderRef}>
        Other ways to reach me.
      </h2>
      <div className="contact-wrapper">
        <div className="contact-content" ref={contactContentRef}>
          <div className="github-container">
            <div className="github-image-container">
              <a
                href={GITHUB_LINK}
                rel="noreferrer"
                target="_blank"
                className="github-image-link"
              >
                <img
                  src={gitHubIcon}
                  alt="GitHub Icon"
                  className="github-image"
                />
              </a>
            </div>
            <span className="contact-text">
              Follow me on{" "}
              <a
                href={GITHUB_LINK}
                rel="noreferrer"
                target="_blank"
                className="contact-hyperlink"
              >
                GitHub
              </a>
            </span>
          </div>
          <div className="email-container">
            <div className="email-image-container">
              <a href={EMAIL_LINK} className="email-image-link">
                <img src={emailIcon} alt="Email Icon" className="email-image" />
              </a>
            </div>
            <a href={EMAIL_LINK} className="contact-hyperlink">
              paolopedrigal@gmail.com
            </a>
          </div>
          <div className="linkedin-container">
            <div className="linkedin-image-container">
              <a
                href={LINKEDIN_LINK}
                rel="noreferrer"
                target="_blank"
                className="linkedin-image-link"
              >
                <img
                  src={linkedInIcon}
                  alt="LinkedIn Icon"
                  className="linkedin-image"
                />
              </a>
            </div>
            <span className="contact-text">
              Let's connect on{" "}
              <a
                href={LINKEDIN_LINK}
                rel="noreferrer"
                target="_blank"
                className="contact-hyperlink"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
