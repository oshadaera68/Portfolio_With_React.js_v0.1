import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
  
      <div className="about__container grid">
        <img src={Image} alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__des">
              Motivated Software enginnering student from the Institute of Java and Software Enginnering (IJSE) with experience in software development. Seeking to utilize broad educational background with excellent analytical, technical and programming skils to thrive as an entry-level software Enginner.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mobile__app"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About
