import "./../styles/about.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaFolderOpen,
  FaTrophy,
  FaUserGraduate,
  FaCode
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg"></div>

      <motion.div
        className="container about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side */}
        <div className="about-left">
          <div className="about-heading">
            <div className="about-icon">
              <FaUser />
            </div>

            <div>
              <h2>About Me</h2>
              <span></span>
            </div>
          </div>

          <p>
            I'm a passionate Full Stack Developer with expertise in building
            end-to-end web applications. I love turning ideas into real-world
            products.
          </p>

          <button className="about-btn">
            More About Me →
          </button>
        </div>

        {/* Right Side */}
        <div className="about-cards">

          <motion.div
            className="stat-card"
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <FaUserGraduate />
            <h3>Fresher</h3>
            <p>Ready to Build</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <FaCode />
            <h3>MERN</h3>
            <p>Tech Stack</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <FaFolderOpen />
            <h3>5+</h3>
            <p>Projects Completed</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <FaTrophy />
            <h3>100%</h3>
            <p>Dedication</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;