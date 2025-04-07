import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero-image.jpeg';
// import heroShape2 from '../../assets/images/hero-shape-2.png';
import heroShape3 from '../../assets/images/hero-shape-3.png';
import heroBg from '../../assets/images/hero-bg.svg';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
        overflow: 'hidden',
        background: `url(${heroBg}) no-repeat center bottom / cover`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background shapes */}

      <Box
        component="img"
        src={heroShape3}
        alt=""
        className="slide-right"
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          maxWidth: { xs: '80px', md: '120px' },
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center'
          }}
        >
          {/* Hero content */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 1 },
              width: '100%'
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  component="h1"
                  color="primary"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 1,
                    textAlign: { xs: 'center', md: 'right' },
                    direction: 'rtl',
                  }}
                >
                  أفضل البرامج
                  <Box component="span" sx={{
                    color: 'secondary.main',
                    display: 'block',
                  }}>
                    التعليمية الترميمية
                  </Box>
                  للطلاب السوريين
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 4,
                    textAlign: { xs: 'center', md: 'right' },
                    direction: 'rtl',
                    maxWidth: '600px',
                    ml: { xs: 'auto', md: 0 },
                    mr: { xs: 'auto', md: 0 },
                  }}
                >
                  مؤسسة تضم أكثر من 300 من مختصين بالتنمية التربوية وتخصصات لخدمة أبنائنا الطلاب السوريين. عن طريق ما تقدمه من البرامج التعليمي بطرق متميزة ومبتكرة.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    mb: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                    }}
                  >
                    اكتشف برامجنا
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Box>

          {/* Hero image */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 },
              width: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Student learning"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  }
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
