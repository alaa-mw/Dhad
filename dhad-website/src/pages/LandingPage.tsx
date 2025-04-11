// import React from 'react'

import CourseSection from "../components/landingPage/course/CourseSection";
import FooterSection from "../components/landingPage/footer/FooterSection";
import StatsSection from "../components/landingPage/stats/StatsSection";
import VideoSection from "../components/landingPage/video/VideoSection";
import Header from "../components/layout/Header";
import ClassesSection from "../components/sections/ClassesSection";
import Hero from "../components/sections/Hero";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClassesSection />
      </main>
      <CourseSection />
      <VideoSection />
      <StatsSection />
      <FooterSection/>
    </>
  );
};

export default LandingPage;
