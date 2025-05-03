import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ScrollToTop from './components/sections/scrollUp';
import Whatsapp from './components/sections/Whatsapp';
import theme from './styles/theme';
import { useEffect, useState, ReactNode } from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/layout/Form';
import LoginForm from './components/layout/LoginForm';
import SuccessMessage from './components/layout/SuccessMessage';

// App.tsx
function App() {
  const [formStep, setFormStep] = useState(0); 

  interface ProtectedRouteProps {
    children: ReactNode;
    allowedStep: number;
    currentStep: number;
  }

  const ProtectedRoute = ({ children, allowedStep, currentStep }: ProtectedRouteProps) => {
    if (currentStep < allowedStep) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-up, .slide-right, .slide-left'
    );

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
        <div dir="rtl" lang="ar">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/form"
              element={
                <ProtectedRoute allowedStep={0} currentStep={formStep}>
                  <Form onNext={() => setFormStep(1)} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute allowedStep={1} currentStep={formStep}>
                  <LoginForm onNext={() => setFormStep(2)} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/success"
              element={
                <ProtectedRoute allowedStep={2} currentStep={formStep}>
                  <SuccessMessage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <ScrollToTop />
        <Whatsapp />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;