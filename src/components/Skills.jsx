import "./../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

function Skills() {
  const frontend = [
    { icon: <FaHtml5 />, name: "HTML", level: 95 },
    { icon: <FaCss3Alt />, name: "CSS", level: 90 },
    { icon: <FaJs />, name: "JavaScript", level: 88 },
    { icon: <FaReact />, name: "React", level: 90 },
  ];

  const backend = [
    { icon: <FaNodeJs />, name: "Node.js", level: 85 },
    { icon: <SiExpress />, name: "Express", level: 85 },
    { icon: <SiMongodb />, name: "MongoDB", level: 90 },
    { icon: <SiMysql />, name: "MySQL", level: 82 },
    { icon: <FaGitAlt />, name: "Git", level: 88 },
  ];

  const SkillCard = ({ title, skills }) => (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <h3>{title}</h3>

      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-info">
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="title-line"></div>
          <p>Technologies I use to build modern web applications.</p>
        </div>

        <div className="skills-grid">
          <SkillCard title="Frontend Development" skills={frontend} />
          <SkillCard title="Backend & Database" skills={backend} />
        </div>
      </div>
    </section>
  );
}

export default Skills;