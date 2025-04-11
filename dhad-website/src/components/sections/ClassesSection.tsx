import { useState, useRef, useEffect, Fragment } from 'react';
import { Box, Typography, Container, Card, CardContent, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Class card type
interface ClassCard {
  id: number;
  title: string;
  color: string;
  bgColor: string;
  grade: string;
}

// Sample class data - expanded to 12 items
const classesData: ClassCard[] = [
  { id: 1, title: 'الصف الأول', color: '#428f9a', bgColor: 'rgba(66, 143, 154, 0.1)', grade: 'Grade 1' },
  { id: 2, title: 'الصف الثاني', color: '#c08e46', bgColor: 'rgba(192, 142, 70, 0.1)', grade: 'Grade 2' },
  { id: 3, title: 'الصف الثالث', color: '#e57373', bgColor: 'rgba(229, 115, 115, 0.1)', grade: 'Grade 3' },
  { id: 4, title: 'الصف الرابع', color: '#81c784', bgColor: 'rgba(129, 199, 132, 0.1)', grade: 'Grade 4' },
  { id: 5, title: 'الصف الخامس', color: '#64b5f6', bgColor: 'rgba(100, 181, 246, 0.1)', grade: 'Grade 5' },
  { id: 6, title: 'الصف السادس', color: '#9575cd', bgColor: 'rgba(149, 117, 205, 0.1)', grade: 'Grade 6' },
  { id: 7, title: 'الصف السابع', color: '#f06292', bgColor: 'rgba(240, 98, 146, 0.1)', grade: 'Grade 7' },
  { id: 8, title: 'الصف الثامن', color: '#4db6ac', bgColor: 'rgba(77, 182, 172, 0.1)', grade: 'Grade 8' },
  { id: 9, title: 'الصف التاسع', color: '#ff8a65', bgColor: 'rgba(255, 138, 101, 0.1)', grade: 'Grade 9' },
  { id: 10, title: 'الصف العاشر', color: '#7986cb', bgColor: 'rgba(121, 134, 203, 0.1)', grade: 'Grade 10' },
  { id: 11, title: 'الصف الحادي عشر', color: '#9575cd', bgColor: 'rgba(149, 117, 205, 0.1)', grade: 'Grade 11' },
  { id: 12, title: 'الصف الثاني عشر', color: '#4dd0e1', bgColor: 'rgba(77, 208, 225, 0.1)', grade: 'Grade 12' },
];

const ClassesSection = () => {
  // State for active card
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Reference to carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver hook
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Effect to handle window resize and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate items per view based on screen width
  const getItemsPerView = (): number => {
    if (typeof window !== 'undefined') {
      // We will determine the exact count from CSS, but these are good defaults
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 960) return 2;
      if (window.innerWidth < 1280) return 3;
      return 4;
    }
    return 4; // Default for SSR
  };

  // Scroll handling functions
  const isRTL = typeof document !== 'undefined' && document.documentElement.dir === 'rtl';
  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemsPerView = getItemsPerView();
      const cardWidth = carouselRef.current.scrollWidth / classesData.length;
      const delta=cardWidth*itemsPerView;
      

      const newPosition= isRTL
      ? carouselRef.current.scrollLeft+delta
      : Math.max(scrollPosition - delta ,0)

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const itemsPerView = getItemsPerView();
      const cardWidth = carouselRef.current.scrollWidth / classesData.length;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const delta =cardWidth* itemsPerView;
      
      const newPosition = isRTL
      ? Math.max(carouselRef.current.scrollLeft - delta, -maxScroll)  
      : Math.min(scrollPosition + delta, maxScroll); 

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newPosition);
    }
  };

  // Handle carousel scroll event to update scroll position state
  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div  dir='ltr'>

    <Box 
      id="courses"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--background-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            component="span"
            className="slide-up"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              display: 'block',
              mb: 1,
            }}
          >
            الصفوف الدراسية
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            className="slide-up"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            للتعلم عن بعد
          </Typography>
        </Box>

        {/* Carousel Navigation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mb: 4,
          }}
        >
          <IconButton
            onClick={scrollLeft}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
            aria-label="Scroll left"
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={scrollRight}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
            aria-label="Scroll right"
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Classes cards carousel */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Box
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 3,
                pb: 2,
                scrollbarWidth: 'none', // Firefox
                '&::-webkit-scrollbar': {
                  display: 'none', // Chrome, Safari, Edge
                },
                scrollBehavior: 'smooth',
                '-webkit-overflow-scrolling': 'touch',
                width: '100%',
                px: 1, // Add some padding to avoid edge clipping
              }}
            >
              {classesData.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  variants={itemVariants}
                  style={{
                    flex: '0 0 auto',
                    width: isMobile ? 'calc(100% - 40px)' : '280px',
                    minWidth: isMobile ? '280px' : 'auto',
                    maxWidth: '100%',
                  }}
                >
                  <Card
                    onMouseEnter={() => setActiveCard(classItem.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    sx={{
                      width: '100%',
                      height: '280px',
                      borderRadius: 4,
                      mt: 3,
                      scrollBehavior: 'smooth',
                      overflow: 'hidden',
                      backgroundColor: classItem.bgColor,
                      border: `1px solid ${classItem.color}20`,
                      transition: 'all 0.3s ease',
                      boxShadow: activeCard === classItem.id
                        ? `0 10px 30px ${classItem.color}30`
                        : '0 4px 12px rgba(0,0,0,0.05)',
                      transform: activeCard === classItem.id ? 'translateY(-8px)' : 'none',
                      position: 'relative',
                      '&:hover': {
                        borderColor: `${classItem.color}50`,
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        height: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          backgroundColor: `${classItem.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: classItem.color,
                            fontWeight: 700,
                          }}
                        >
                          {classItem.grade}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: classItem.color,
                        }}
                      >
                        {classItem.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                        }}
                      >
                        محتوى تعليمي مميز وشامل
                        <br />
                        معلمون محترفون
                        <br />
                        دروس تفاعلية مباشرة
                      </Typography>

                      <Button
                        variant="outlined"
                        sx={{
                          mt: 'auto',
                          color: classItem.color,
                          borderColor: classItem.color,
                          '&:hover': {
                            backgroundColor: `${classItem.color}10`,
                            borderColor: classItem.color,
                          },
                        }}
                      >
                        تصفح المواد
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* View more button */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 6,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="slide-up"
            sx={{
              px: 4,
              py: 1,
              borderRadius: 2,
            }}
          >
            تصفّح المزيد من الصفوف الدراسية
          </Button>
        </Box>
      </Container>
    </Box>
    </div>

  );
};

export default ClassesSection;
