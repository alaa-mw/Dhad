import CourseSection from "../components/landingPage/course/CourseSection";
import FooterSection from "../components/landingPage/footer/FooterSection";
import StatsSection from "../components/landingPage/stats/StatsSection";
import VideoSection from "../components/landingPage/video/VideoSection";
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import ClassesSection from '../components/sections/ClassesSection';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const LandingPage = () => {
  
  return (
    
    <>
      <ScrollToTop></ScrollToTop>

      <Header />
      
      <main>
        <Hero />
        <ClassesSection />
      </main>
      
      <CourseSection />

      <section id="about">
        <VideoSection />
      </section>

      <StatsSection />
      
      <FooterSection/>
      
    </>
  );
};

export default LandingPage;
