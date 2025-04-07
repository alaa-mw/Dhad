// import React from 'react'

import CourseSection from "../components/landingPage/course/CourseSection";
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
    </>
  );
};

export default LandingPage;
