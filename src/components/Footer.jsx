import "./../styles/footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Left */}

        <div className="footer-brand">
          <h2>Abikshaw.</h2>
          <p>
            Full Stack Developer passionate about building modern,
            responsive web applications.
          </p>
        </div>

        {/* Center */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}

        <div className="footer-social">
          <h3>Connect</h3>

          <div className="footer-icons">

            <a
            href="https://github.com/abikshaw24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

              <a
            href="https://www.linkedin.com/in/abikshaw-l-7a81612b4/"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

            <a href="#"><FaInstagram/></a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p style={{marginLeft:"650px"}}>© 2026 Abikshaw Lakshmi. All Rights Reserved.</p>

        <button className="top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;