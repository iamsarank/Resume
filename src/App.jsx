import React from 'react'
import Header from './components/Header';
import About from './components/About';
import Workexp from './components/Workexp';
import Education from './components/Education';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='h-screen px-40 py-10'>
      <Header />
      <About />
      <Workexp />
      <Education />
      <Skills />
    </div>
  )
}
export default App;