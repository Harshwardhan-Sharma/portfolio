import React from 'react'
import Proglang from './ProgLang'
import FrameLib from './FrameLib'
import './skills.css'
import Database from './Database'
import DevTools from './DevTools'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Proglang/>
        <FrameLib/>
        <Database/>
        <DevTools/>
      </div>

    </section>
  )
}

export default Skills
