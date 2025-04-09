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
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

// Navigation links
const navLinks = [
  { name: 'الرئيسية', id: 'home' },
  { name: 'من نحن', id: 'about' },
  { name: 'البرامج', id: 'courses' },
  { name: 'تواصل معنا', id: 'contact' }
];

// Header component
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Use scroll trigger to change header style on scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40  }} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close menu"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={handleDrawerToggle}
              sx={{ borderRadius: 1 }}
            >
              <ListItemText
                primary={item.name}
                sx={{ textAlign: 'right' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        انضم إلينا
      </Button>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 50, cursor: 'pointer' }}
            />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {navLinks.map((item) => (
                  <Button
                    key={item.id}
                    component={Link}
                    to={item.id}
                    smooth={true}
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
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2 }}
                >
                  انضم إلينا
                </Button>
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar placeholder to prevent content from hiding behind AppBar */}
      <Toolbar />
    </motion.div>
  );
};

export default Header;
