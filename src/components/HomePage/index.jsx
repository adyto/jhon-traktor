import React from 'react';

import {
  ExperienceItem,
  HeroItem,
  Projects,
  StepItem,
  ClientCard,
  MessageItem,
  Footer,
} from '../index';

const HomePage = () => {
  return (
    <>
      <HeroItem />
      <ExperienceItem />
      <StepItem />
      <Projects featuredProject />
      <ClientCard />
      <MessageItem />
      <Footer />
    </>
  );
};

export default HomePage;
