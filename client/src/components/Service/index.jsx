import React from 'react';
import ServiceList from './service';

const services = [
  {
    title: 'Read Blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Create Blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Earn Money With Blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const LandingPage = () => {
  return (
    <div>
      <ServiceList services={services} />
    </div>
  );
};

export default LandingPage;
