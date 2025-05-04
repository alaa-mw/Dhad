import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Container, Paper, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Header from './Header';
import FooterSection from '../landingPage/footer/FooterSection';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(4px)',
  maxWidth: 600,
  margin: '0 auto',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1ca7ae',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(4),
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 3),
}));

const circle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration:0.5, ease: "easeInOut" }
  }
};

const checkmark = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.4 }
  }
};

const SuccessMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.userData || {};
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const steps = [
    'تقديم المعلومات الشخصية',
    'تحديد البرنامج الدراسي',
    'إكمال التسجيل'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer1 = setTimeout(() => {
      setActiveStep(1);
    }, 4000);
    
    const timer2 = setTimeout(() => {
      setActiveStep(2);
    }, 8000);
    
    const timer3 = setTimeout(() => {
      setCompleted(true);
    }, 12000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(0, prevStep - 1));
  };

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setCompleted(true);
    }
  };

  return (

    <>
    <Header></Header>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <StyledPaper>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4, direction: 'ltr' }}>
            {steps.map((label, index) => (
              <Step key={label} completed={activeStep > index || completed}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {completed ? (
            <>
              <Box sx={{ mb: 4 }}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Box sx={{ position: 'relative', width: 100, height: 100, margin: '0 auto' }}>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        strokeWidth="4"
                        stroke="#1ca7ae"
                        variants={circle}
                        initial="hidden"
                        animate="visible"
                      />
                      <motion.path
                        d="M 30 50 L 45 65 L 75 35"
                        fill="none"
                        strokeWidth="5"
                        stroke="#1ca7ae"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkmark}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  </Box>
                </motion.div>
              </Box>

              <Typography variant="h4" component="h1" gutterBottom>
                تم التسجيل بنجاح!
              </Typography>
              
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
                شكراً لك، {userData.username}. تم إنشاء حسابك بنجاح.
              </Typography>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Box sx={{ 
                  bgcolor: '#f5f5f5', 
                  p: 3, 
                  borderRadius: 2, 
                  textAlign: 'right',
                  direction: 'rtl'
                }}>
                  <Typography variant="body1" gutterBottom>
                    <strong>البريد الإلكتروني:</strong> {userData.email}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>اسم المستخدم:</strong> {userData.username}
                  </Typography>
                  <Typography variant="body1">
                    <strong>البرنامج المختار:</strong> {userData.studyProgram === 'accelerated' ? 'برنامج التعليم التعويضي المسرع' : 'برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها'}
                  </Typography>
                </Box>
              </motion.div>
              
              <Typography variant="body1" sx={{ mt: 4 }}>
                سيتم إرسال بريد إلكتروني تأكيدي إلى عنوان بريدك الإلكتروني قريباً. يرجى التحقق من بريدك الوارد.
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <StyledButton onClick={handleGoHome}>
                  الانتقال إلى الصفحة الرئيسية
                </StyledButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ mb: 4, mt: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {activeStep === 0 && 'المرحلة الأولى: إدخال المعلومات الشخصية'}
                  {activeStep === 1 && 'المرحلة الثانية: اختيار البرنامج الدراسي'}
                  {activeStep === 2 && 'المرحلة الثالثة: مراجعة والتأكيد'}
                </Typography>
                
                <Box sx={{ mt: 4, mb: 4, p: 3, bgcolor: '#f8f8f8', borderRadius: 2 }}>
                  {activeStep === 0 && (
                    <Typography>تم إدخال بياناتك الشخصية بنجاح</Typography>
                  )}
                  {activeStep === 1 && (
                    <Typography>
                      تم اختيار البرنامج الدراسي: <strong>{userData.studyProgram === 'accelerated' ? 'برنامج التعليم التعويضي المسرع' : 'برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها'}</strong>
                    </Typography>
                  )}
                  {activeStep === 2 && (
                    <Typography>تم مراجعة المعلومات وهي جاهزة للتأكيد النهائي</Typography>
                  )}
                </Box>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    {activeStep === 0 && 'يرجى متابعة العملية لتحديد البرنامج الدراسي الذي ترغب بالتسجيل فيه.'}
                    {activeStep === 1 && 'الآن يمكنك الانتقال إلى الخطوة النهائية للتأكد من صحة المعلومات.'}
                    {activeStep === 2 && 'تحقق من صحة المعلومات المقدمة وقم بالتأكيد النهائي لإكمال عملية التسجيل.'}
                  </Typography>
                </motion.div>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <NavigationButton
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    variant="outlined"
                    color="primary"
                  >
                    رجوع
                  </NavigationButton>
                  <NavigationButton
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    sx={{ bgcolor: '#1ca7ae' }}
                  >
                    {activeStep === 2 ? 'إكمال التسجيل' : 'التالي'}
                  </NavigationButton>
                </Box>
              </Box>
            </>
          )}
        </StyledPaper>
      </Container>

      <FooterSection></FooterSection>
    </motion.div>
    </>
  );
};

export default SuccessMessage;