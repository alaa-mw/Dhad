import { ThemeProvider  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import rtlPlugin from 'stylis-plugin-rtl';
import theme from './styles/theme';
import createCache from '@emotion/cache';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ClassesSection from './components/sections/ClassesSection';

import { CacheProvider } from '@emotion/react';
import ScrollToTop from './components/sections/scrollUp';
import Whatsapp from './components/sections/whatsapp';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Uncomment this line if you want elements to animate again when they leave viewport
          // entry.target.classList.remove('visible');
        }
      }
    }, { threshold: 0.1 });

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-up, .slide-right, .slide-left'
    );

    // Observe each element
    for (const el of animatedElements) {
      observer.observe(el);
    }

    return () => {
      for (const el of animatedElements) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <>
    {/* <CacheProvider value={cacheRtl}> */}
      <ThemeProvider theme={theme}>
      <CssBaseline />

      <div dir='rtl' lang='ar'>
          <Header />
          <main >
          <Hero />
          <ClassesSection />
        </main>
      </div>
      

      <LandingPage/>

    </ThemeProvider>
    <ScrollToTop></ScrollToTop>

    <Whatsapp></Whatsapp>
    {/* </CacheProvider> */}
    

    {/* </CacheProvider> */}
    </>

  );
}

export default App;
