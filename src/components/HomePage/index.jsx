import React from 'react';
import ExperienceItem from './ExperienceItem';
import HeroItem from './HeroItem';
import Projects from '../Projects';

const HomePage = () => {
  return (
    <>
      <HeroItem />
      <ExperienceItem />
      <Projects featuredProject />
    </>
  );
};

export default HomePage;
