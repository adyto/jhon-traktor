import React from 'react';
import ExperienceItem from './ExperienceItem';
import HeroItem from './HeroItem';
import Projects from '../Projects';
import StepItem from './StepItem';
import ClientCard from './ClientCard';
import MessageItem from './MessageItem';

const HomePage = () => {
  return (
    <>
      <HeroItem />
      <ExperienceItem />
      <StepItem />
      <Projects featuredProject />
      <ClientCard />
      <MessageItem />
    </>
  );
};

export default HomePage;
