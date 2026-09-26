import "./../styles/hero.css";
import profile from "../assets/images/profile.png";
import {FaGithub,FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* CSS Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      <div className="container hero-container">

        {/* Left Content */}
      
                <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">● FULL STACK DEVELOPER</span>

            <h1>
              Hi, I'm 
              <br/>
              <br/>
              <span>Abikshaw L</span>
            </h1>

            <p>
  
  Passionate Full Stack Developer specializing in JavaScript, HTML, CSS,
  Bootstrap, React, Node.js, Express.js, MongoDB, and SQL. I enjoy building
  responsive, user-friendly web applications and turning ideas into modern,
  real-world digital experiences.

            </p>

<div className="hero-buttons">
  <a
    href="\resume\Abikshaw_Lakshmi_Resume_Fixed.pdf"
    download="Abikshaw_Lakshmi_Resume_Fixed.pdf"
    className="primary-btn"
  >
    Download Resume
  </a>

  <a href="#contact" className="secondary-btn">
    Contact Me
  </a>
</div>
            <div className="social-icons">
              {/* your icons */}
            </div>
          </motion.div>

        {/* Right Profile */}
        <div className="profile-wrapper">

          <div className="ring ring1"></div>
          <div className="ring ring2"></div>

          <div className="profile-circle">
            <img src={profile} alt="Profile" />
          </div>
            <div className="floating-card">
                <FaCode className="code-icon"/>
                <span>Designer</span>
                <span>Developer</span>
            </div>
        </div>

      </div>

        <div className="sparkle sparkle1">✦</div>
        <div className="sparkle sparkle2">✦</div>
        <div className="sparkle sparkle3">✦</div>
        <div className="sparkle sparkle4">✦</div>



    </section>
  );
}

export default Hero;