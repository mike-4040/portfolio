import React from 'react';

import About from './About';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact'

export default function Content(props) {

  return (
    <main className={props.classes.content} >
      <div className={props.classes.toolbar} />
      <About />
      <Projects/>
      <Education />
      <Contact />
    </main>
  );
}
