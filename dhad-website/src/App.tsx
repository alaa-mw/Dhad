import { ThemeProvider  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ScrollToTop from './components/sections/scrollUp';
import Whatsapp from './components/sections/Whatsapp';
import theme from './styles/theme';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Form from './components/layout/Form';

function App() {
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />

      <div dir='rtl' lang='ar'>
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='form' element={<Form></Form>}></Route>
          </Routes>
      </div>

    </ThemeProvider>
    <ScrollToTop></ScrollToTop>

    <Whatsapp></Whatsapp>

    </BrowserRouter>
  );
}

export default App;