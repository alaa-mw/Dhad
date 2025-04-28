import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.webp';

const navLinks = [
  { name: 'الرئيسية', id: 'home' },
  { name: 'من نحن', id: 'about' },
  { name: 'البرامج', id: 'courses' },
  { name: 'تواصل معنا', id: 'contact' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFormPage = location.pathname === '/form';

  const handleGoToForm = () => {
    navigate('/form');
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} loading="lazy" />
        <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            {isFormPage ? (
              <ListItemButton
                component={RouterLink}
                to="/"
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 1 }}
              >
                <ListItemText primary={item.name} sx={{ textAlign: 'right' }} />
              </ListItemButton>
            ) : (
              <ListItemButton
                component={ScrollLink}
                to={item.id}
                smooth
                duration={500}
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 1 }}
              >
                <ListItemText primary={item.name} sx={{ textAlign: 'right' }} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => {
          handleDrawerToggle();
          handleGoToForm();
        }}
      >
        انضم إلينا
      </Button>
    </Box>
  );

  return (
    <>
      {/* <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      > */}
        <AppBar
          position="fixed"
          color="default"
          elevation={scrolled ? 4 : 0}
          sx={{
            bgcolor: scrolled ? 'white' : 'transparent',
            boxShadow: scrolled ? theme.shadows[4] : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ height: 50, cursor: 'pointer' }}
                onClick={()=>{
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate('/');
                  }
                }}  
              />

              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {navLinks.map((item) =>
                    isFormPage ? (
                      <Button
                        key={item.id}
                        component={RouterLink}
                        to="/"
                        sx={{
                          color: scrolled ? 'text.primary' : 'text.primary',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    ) : (
                      <Button
                        key={item.id}
                        component={ScrollLink}
                        to={item.id}
                        smooth
                        duration={500}
                        sx={{
                          color: scrolled ? 'text.primary' : 'text.primary',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 2 }}
                    onClick={handleGoToForm}
                  >
                    انضم إلينا
                  </Button>
                </Box>
              )}

              {isMobile && (
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 280,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Toolbar />
      {/* </motion.div> */}
    </>
  );
};

export default Header;
