import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Radio,
  FormControlLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Link,
  SelectChangeEvent,
  Stack,
  RadioGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Header from './Header';
import FooterSection from '../landingPage/footer/FooterSection';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#9cf2ff6c',
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
}));

const FormContainer = styled('form')(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
}));


const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1ca7ae',
  color: 'white',
  padding: theme.spacing(1.5),
  width: '100%',
  marginTop: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#000000',
  },
}));



const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#1ca7ae',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1ca7ae',
    },
  },
  '& .MuiInputBase-input': {
    textAlign: 'right',
  },
}));

const StyledSelect = styled(Select)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e0e0e0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1ca7ae',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1ca7ae',
  },
  '& .MuiSelect-select': {
    textAlign: 'right',
  },
}));

const Form: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    birthday: '',
    sex:'',
    currentLocation: '',
    email: '',
    country: '',
    studyLevel:'',
    studyProgram:'',
    curriculum:'',
    phoneNumber:'',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agreeToTerms' ? checked : value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value as string,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

interface SignupFormData {
  username: string;
  birthday:string,
  sex:string,
  currentLocation: string;
  email: string;
  country: string;
  studyLevel:string;
  curriculum:string;
  phoneNumber:string;
  agreeToTerms: boolean;
  studyProgram:string
}



  return (
    <>
    <ScrollToTop></ScrollToTop>

    <Header></Header>
    
    <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >


    <Container maxWidth="lg" sx={{ mt: 2,mb:2 }} >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 ,direction:'rtl'}}>


        <Box sx={{ width: { xs: '100%', md: '41.67%' } }}>
          <Paper sx={{ p: 4, height: 'auto', borderRadius: 2, backgroundColor: '#ffb35061', boxShadow: 'none' }}>
            <Typography variant="h4" component="h2" gutterBottom align="right">
              انضم لاول منصة سورية للدروس العربية
            </Typography>

            <Box sx={{ mt: 6 }}>
              <Typography variant="body1" align="right">
                يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
              </Typography>
            </Box>

          </Paper>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '58.33%' } }}>
          <StyledPaper>

            <FormContainer onSubmit={handleSubmit}>
              <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                تسجيل الدخول 
              </Typography>
                <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                :المعلومات الشخصية
              </Typography>
              <Stack spacing={2}>
                

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      اسم الكامل:
                    </Typography>
                  </Box>
                  <StyledTextField
                    fullWidth
                    name="username"
                    placeholder="اسم المستخدم يكتب باللغة العربية فقط"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      تاريخ الميلاد:
                    </Typography>
                  </Box>
                  <StyledTextField
                    type='date'
                    fullWidth
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  
                    <Typography variant="subtitle1" component="span">
                      الجنس:
                    </Typography>
                  <RadioGroup
                    row
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                  >
                    <FormControlLabel  value="male" control={<Radio />} label="ذكر" />
                    <FormControlLabel style={{marginLeft: '0.5rem'}} value="female" control={<Radio />} label="أنثى" />
                  </RadioGroup>

                  
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      مكان الولادة:
                    </Typography>
                  </Box>
                  <StyledTextField
                    fullWidth
                    name="country"
                    type="text"
                    placeholder="مثال: دمشق أو دبي"
                    value={formData.country}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      مكان الأقامة الحالي:
                    </Typography>
                  </Box>
                  <StyledTextField
                    fullWidth
                    name="currentLocation"
                    type="text"
                    placeholder="مثال: تركيا أو المانيا"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>  
              
                    <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                      المعلومات التعليمية:
                    </Typography>
              
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      المستوى الدراسي:
                    </Typography>
                  </Box>
                  <StyledSelect
                    fullWidth
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleSelectChange}
                    displayEmpty
                    variant="outlined"
                    MenuProps={{
                          disableScrollLock: true,
                        }}
                    >
                    <MenuItem value="" disabled>
                    اختر المستوى الدراسي
                    </MenuItem>
                    <MenuItem value="primary">المرحلة الابتدائية</MenuItem>
                    <MenuItem value="middle">المرحلة الإعدادية</MenuItem>
                    <MenuItem value="high">المرحلة الثانوية</MenuItem>
                  </StyledSelect>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                       المنهج الدراسي المتبع:
                    </Typography>
                  </Box>
                  <StyledSelect
                    fullWidth
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleSelectChange}
                    displayEmpty
                    variant="outlined"
                    MenuProps={{
                          disableScrollLock: true,
                        }}
                    >
                    <MenuItem value="" disabled>
                    اختر المنهج
                    </MenuItem >
                    <MenuItem  value="primary">المنهاج السوري</MenuItem>
                    <MenuItem  value="middle">المنهاج الدولي</MenuItem>
                  </StyledSelect>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                       البرنامج الذي ترغب فيه:
                    </Typography>
                  </Box>
                  <StyledSelect
                    fullWidth
                    name="studyProgram"
                    value={formData.studyProgram}
                    onChange={handleSelectChange}
                    displayEmpty
                    variant="outlined"
                    MenuProps={{
                          disableScrollLock: true,
                        }}
                    >
                    <MenuItem value="" disabled>
                    اختر البرنامج
                    </MenuItem >
                    <MenuItem  value="primary">برنامج التعليم التعويضي المسرع</MenuItem>
                    <MenuItem  value="middle">برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها</MenuItem>
                  </StyledSelect>
                </Box>

                    <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                      المعلومات التواصل:
                    </Typography>
               
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      البريد الإلكتروني:
                    </Typography>
                  </Box>
                  <StyledTextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="ahmad@gmail.com :مثال "
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" component="span">
                      رقم الهاتف / واتساب:
                    </Typography>
                  </Box>
                  <StyledTextField
                    fullWidth
                    name="phoneNumber"
                    type="text"
                    placeholder="+963912345678 :مثال"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Box>
                

                    {/* rest of the form */}


                <Box sx={{display:'flex',direction:'rtl'}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2" >
                        قرأت و أوافق على <Link >سياسة الخصوصية</Link> و <Link >دليل استخدام الموقع</Link>
                      </Typography>
                    }
                    labelPlacement="start"
                    sx={{ justifyContent: 'flex-end', ml: 0, mr: 0 }}
                  />
                </Box>

                <Box>
                  <StyledSubmitButton
                    type="submit"
                    disabled={!formData.agreeToTerms}
                  >
                    التسجيل
                  </StyledSubmitButton>
                </Box>
              </Stack>
            </FormContainer>
          </StyledPaper>
        </Box>

        
      </Box>
    </Container>

        <FooterSection></FooterSection>
        </motion.div>
    </>

  );
}

export default Form;
