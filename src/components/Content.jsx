import React from 'react';

import About from './About';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default function Content(props) {

  return (
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} id='about' />
      <About />
      <div className={props.classes.toolbar} id='projects' />
      <Projects />
      <div className={props.classes.toolbar} id='education' />
      <Education />
      <div className={props.classes.toolbar} id='contact' />
      <Contact />
    </main>
  );
}
