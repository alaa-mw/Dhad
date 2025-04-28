import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import heroShape3 from '../../assets/images/hero-shape-3.webp';
import boys from '../../assets/images/boys-gaming_23-2148141557.webp';
import heroImage from '../../assets/images/hero-image.webp';
import heroBgSvg from '../../assets/images/hero-bg.svg';

const Hero = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
    <Box
        id="home"
        component="section"
        sx={{
          position: 'relative',
          pt: { xs: 0, md: 5 },
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box 
          component={'img'}
          loading="lazy"
          src={heroShape3}
          left={350}
          top={30}
          position={'absolute'}
          display={{ xs: 'none', md: 'block' }}
        ></Box>

        <Box 
          component={'img'}
          loading='lazy'
          src={heroBgSvg}
          zIndex={-1} 
          position={'absolute'}
          bottom={0} 
        ></Box>

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box sx={{ order: { xs: 2, md: 1 }, width: '100%' }}>
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
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
                      direction: 'ltr',
                    }}
                  >
                    أفضل البرامج
                    <Box component="span" sx={{ color: 'secondary.main', display: 'block' }}>
                      التعليمية الترميمية
                    </Box>
                    للطلاب السوريين
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      mt: 2,
                      textAlign: { xs: 'center', md: 'right' },
                      direction: 'ltr',
                      maxWidth: '600px',
                      ml: { xs: 'auto', md: 0 },
                      mr: { xs: 'auto', md: 0 },
                    }}
                  >
                    مؤسسة تعليمية تسهل عملية اندماج الطلاب السوريين العائدين من الخارج أو المتأثرين بالحرب بالنظام الأكاديمي السوري من خلال منهجية تعليمية شاملة و داعمة
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 4 }}>
                    <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, px: 3, py: 1 }}>
                      اكتشف برامجنا
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            </Box>

            {/* Hero Images */}
           
            <Box sx={{ order: { xs: 1, md: 2 }, width: '100%' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '0.5fr 0.5fr', md: '0.9fr 0.8fr' },
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={boys}
                  alt="Girl learning"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    borderTopRightRadius: '50px' ,
                    borderBottomLeftRadius:  '90px' ,
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    transform: { md: 'translateY(-60px)' },
                  }}
                />

                <Box
                  component="img"
                  src={heroImage}
                  alt="Boy learning"
                  loading="lazy"
                  sx={{
                    width: {xs: '60%', md: '100%'},
                    margin: {xs: '0 auto', md: 'auto'},
                    borderTopRightRadius: '70px' ,
                    borderBottomLeftRadius: '110px' ,
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Hero;