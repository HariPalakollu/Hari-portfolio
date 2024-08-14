import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>I'm</h3>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>My Portfolio</small>
            </article>
          </div>

          <p>A motivated and passionate MERN stack developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. Equipped with hands-on experience in building full-stack web applications, I am eager to apply my knowledge and skills to real-world projects. Proficient in developing responsive user interfaces, RESTful APIs, and managing databases, I am committed to continuous learning and growing as a developer. Excited to contribute to a dynamic team and create impactful digital solutions.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About