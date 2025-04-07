import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ClassesSection from './components/sections/ClassesSection';
import { useEffect } from 'react';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <ClassesSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
