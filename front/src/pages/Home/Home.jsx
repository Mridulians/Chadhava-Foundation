/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import TempleImpact from '../../components/TempleImpact/TempleImpact';
// import Newsletter from '../../components/NewsLetter/NewsLetter';
import Journey from '../../components/Journey/Journey';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <WhatWeDo />

      <Journey />

      <TempleImpact />

      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;
