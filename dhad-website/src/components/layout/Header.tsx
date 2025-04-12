import { useState, useEffect } from 'react';
import {SelectChangeEvent,
  Select, MenuItem, 
  Radio,
  RadioGroup,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
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
import logo from '../../assets/images/logo.webp';

// Navigation links
const navLinks = [
  { name: 'الرئيسية', id: 'home' },
  { name: 'من نحن', id: 'about' },
  { name: 'البرامج', id: 'courses' },
  { name: 'تواصل معنا', id: 'contact' }
];

// Header component
const Header = () => {
 const [selectedLevel, setSelectedLevel] = useState<string>('');

  const handleLevelChange = (event: SelectChangeEvent<string>) => {
  setSelectedLevel(event.target.value);
  }


  const [open, setOpen] = useState(false);
  const handleOpenForm = () => setOpen(true);
  const handleCloseForm = () => setOpen(false);

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

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>

        <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} loading='lazy' />

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
              <ListItemText primary={item.name} sx={{ textAlign: 'right' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => {
          handleDrawerToggle(); // Close drawer
          handleOpenForm();     // Open form
        }}
      >
        انضم إلينا
      </Button>
    </Box>
  );

  return (
    <>
      {/* Navigation Bar */}
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
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
              {/* Logo */}
              <Box
                loading='lazy'
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
                    onClick={handleOpenForm}
                  >
                    انضم إلينا
                  </Button>
                </Box>
              )}

              {/* Mobile Navigation Button */}
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
          anchor="left"
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

        {/* Placeholder to avoid hiding content behind AppBar */}
        <Toolbar />
      </motion.div>

      {/* Join Form Dialog */}
      <Dialog open={open} onClose={handleCloseForm} dir="rtl">
        <DialogTitle>انضم إلينا</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="الاسم الكامل"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="تاريخ الميلاد"
            type="date"
            fullWidth
            variant="outlined"
                />
            <Box sx={{ mt: 2 }}>
              <label style={{ fontWeight: 'bold', marginBottom: 8, display: 'block' }}>الجنس</label>
               <RadioGroup
                row
                defaultValue="ذكر"
                name="gender"
                sx={{ flexDirection: 'row-reverse' }}
               >
              <FormControlLabel value="ذكر" control={<Radio />} label="ذكر" />
              <FormControlLabel value="أنثى" control={<Radio />} label="أنثى" />
              </RadioGroup>
            </Box>
          
          <TextField
            margin="dense"
            label="المدينة / الدولة"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            margin="dense"
            label="عنوان السكن الحالي"
            type="text"
            fullWidth
            variant="outlined"
          />
            
      <Select
        labelId="educational-level-label"
        id="educational-level"
        value={selectedLevel}
        label="المستوى الدراسي"
        onChange={handleLevelChange}
        displayEmpty={true}
      >
        <MenuItem value="" >اختر المستوى الدراسي</MenuItem>
        <MenuItem value="primary">المرحلة ابتدائي</MenuItem>
        <MenuItem value="secondary">المرحلة الاعدادية</MenuItem>
        <MenuItem value="university">المرحلة الثانوية</MenuItem>
      </Select>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>إلغاء</Button>
          <Button variant="contained" color="primary">إرسال</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
