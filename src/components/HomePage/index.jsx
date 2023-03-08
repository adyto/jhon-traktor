import React from 'react';
import ExperienceItem from './ExperienceItem';
import HeroItem from './HeroItem';
import Projects from '../Projects';
import StepItem from './StepItem';

const HomePage = () => {
  return (
    <>
      <HeroItem />
      <ExperienceItem />
      <StepItem />
      <Projects featuredProject />
    </>
  );
};

export default HomePage;
