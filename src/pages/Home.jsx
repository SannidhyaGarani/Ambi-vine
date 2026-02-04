import React from 'react';
import Hero from '../Components/Hero';
import CinematicStory from '../Components/Story';
import StorySection from '../Components/About';
import OurWines from '../Components/Wines';
import Gallery from '../Components/Gallery';

const Home = () => {
  return (
    <>
      <Hero />
      <StorySection />
      <CinematicStory />
      <OurWines />
      <Gallery />
    </>
  );
};

export default Home;

