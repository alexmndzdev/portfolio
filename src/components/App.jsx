import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const params = new URLSearchParams(window.location.search);
  const referred = params.get('referred');
  const isFromWorkana = referred === 'workana' || document.referrer.includes('workana');
  const alanKey = '8ea6e8b5dedfb4de5e2cf8e770d32a5b2e956eca572e1d8b807a3e2338fdd0dc/stage';

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData, isFromWorkana });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
   // const alanBtn = require('@alan-ai/alan-sdk-web');
    import alanBtn from '@alan-ai/alan-sdk-web';
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'Download') {
          window.open('https://drive.google.com/uc?download=export&id=1_3sx3BjfnqDJOzTllliknOhb8w1uHXh5', '_blank')
        }
      }
    })
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      { !isFromWorkana ? <Contact /> : null }
      { !isFromWorkana ?  <Footer /> : null }
    </PortfolioProvider>
  );
}

export default App;
