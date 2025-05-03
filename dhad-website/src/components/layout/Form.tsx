import {
  Avatar,
  Card,
  CardContent,
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
  Stack,
  RadioGroup,
  FormHelperText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './Header';
import FooterSection from '../landingPage/footer/FooterSection';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import StarIcon from '@mui/icons-material/Star';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleAccount from './GoogleAccount';
import { useNavigate } from 'react-router-dom';


const formSchema = z.object({
  username: z.string()
    .min(1, { message: 'هذا الحقل مطلوب' })
    .regex(/^[\u0600-\u06FF\s]+$/, { message: 'يرجى إدخال النص باللغة العربية فقط' }),
  birthday: z.string().min(1, { message: 'هذا الحقل مطلوب' }),
  sex: z.string().min(1, { message: 'هذا الحقل مطلوب' }),
  currentLocation: z.string()
    .min(1, { message: 'هذا الحقل مطلوب' })
    .regex(/^[\u0600-\u06FF\s]+$/, { message: 'يرجى إدخال النص باللغة العربية فقط' }),
  // email: z.string()
  //   .min(1, { message: 'هذا الحقل مطلوب' })
  //   .email({ message: 'يرجى إدخال بريد إلكتروني صحيح' }),
  country: z.string()
    .min(1, { message: 'هذا الحقل مطلوب' })
    .regex(/^[\u0600-\u06FF\s]+$/, { message: 'يرجى إدخال النص باللغة العربية فقط' }),
  studyLevel: z.string().min(1, { message: 'هذا الحقل مطلوب' }),
  curriculum: z.string().min(1, { message: 'هذا الحقل مطلوب' }),
  studyProgram: z.string().min(1, { message: 'هذا الحقل مطلوب' }),
  // phoneNumber: z.string()
  //   .min(1, { message: 'هذا الحقل مطلوب' })
  //   .regex(/^\+?[0-9]{10,15}$/, { message: 'يرجى إدخال رقم هاتف صحيح مع رمز البلد' }),
  agreeToTerms: z.boolean().refine(val => val === true, { message: 'يجب الموافقة على الشروط والأحكام' })
});

type FormValues = z.infer<typeof formSchema>;

const svgBottom = (
  <Box
    sx={{
      position: 'relative',
      bottom: -10,
      right: 0,
      width: '100%',
      zIndex: -1,
      opacity: 0.2,
    }}
  >
    <svg viewBox="0 0 1440 320" width="100%" >
      <path
        fill="#ffb350"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </Box>
);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(4px)',
}));

const FormContainer = styled('form')(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.75)',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
  backdropFilter: 'blur(8px)',
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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      birthday: '',
      sex: '',
      currentLocation: '',
      // email: '',
      country: '',
      studyLevel: '',
      curriculum: '',
      studyProgram: '',
      // phoneNumber: '',
      agreeToTerms: false,
    }
  });

  const agreeToTerms = watch('agreeToTerms');
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    navigate('/login', { state: { formData: data } });
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      
   
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }} >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, direction: 'rtl' }}>
            
            {/* Side Section*/}
            <Box sx={{ width: { xs: '100%', md: '41.67%' } }}>
              <Paper sx={{ p: 4, height: 'auto', borderRadius: 2, backgroundColor: '#ffb35061', boxShadow: 'none' }}>
                <Typography variant="h4" component="h2" gutterBottom align="right">
                  انضم لاول منصة سورية للدروس  
                  <Box component="span" sx={{ color: 'warning.main' }}>&nbsp;العربية</Box>
                </Typography>

                <Box sx={{ mt: 6 }}>
                  <Typography variant="body1" align="right">
                    يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
                  </Typography>
                </Box>
              </Paper>

              {/* Design Section*/}
              <Stack spacing={4} mt={3}>
                {/* Student Section*/}
                <Box borderRadius={2} boxShadow={1} p={3} sx={{ backgroundColor: '#1ca7ae' }}>
                  <Card elevation={0} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ca7ae', color: 'white' }}>
                      <Box mr={3}>
                        <img
                          src="https://ext.same-assets.com/1925316835/2692914122.svg"
                          alt="للطلاب"
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" mr={1}>للطلاب</Typography>
                        <Typography variant="body2" color="white" mr={1}>
                          يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Mentor Section*/}
                <Box borderRadius={2} boxShadow={1} p={3} sx={{ backgroundColor: '#1ca7ae' }}>
                  <Card elevation={0} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#1ca7ae', color: 'white' }}>
                      <Box mr={3}>
                        <img
                          src="https://ext.same-assets.com/1925316835/1188184742.svg"
                          alt="للمدرسين"
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" mr={1}>للمدرسين</Typography>
                        <Typography variant="body2" color="white" mr={1}>
                          يربطك بالطلاب المهتمين بخدماتك التعليمية
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Rating Section*/}
                <Box p={3} bgcolor="white" borderRadius={2} boxShadow={1}>
                  <Stack direction="row" justifyContent="center" mt={1}>
                    <StarIcon sx={{ color: '#fbbf24' }} />
                    <StarIcon sx={{ color: '#fbbf24' }} />
                    <StarIcon sx={{ color: '#fbbf24' }} />
                    <StarIcon sx={{ color: '#fbbf24' }} />
                    <Typography variant="subtitle1" fontWeight="bold">4.0/5.0</Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="center" spacing={-1} mt={2}>
                    {[1457645329, 1422252817, 792584557, 2352962298, 1056112105].map((id) => (
                      <Avatar
                        key={id}
                        src={`https://ext.same-assets.com/1925316835/${id}.webp`}
                        sx={{ width: 32, height: 32, border: '2px solid white' }}
                      />
                    ))}
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'teal', fontSize: 12 }}>+50K</Avatar>
                  </Stack>

                  <Typography variant="body2" align="center" color="text.secondary" mt={2}>
                    نقدر طلابنا ومدرسينا
                  </Typography>
                </Box>

                {/* Study Program*/}
                <Box borderRadius={2} boxShadow={1} sx={{ backgroundColor: '#ffb35061' }}>
                  <Card elevation={0} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ backgroundColor: '#ffb35061' }}>
                      <Typography variant="h6" fontWeight="bold">لمحة عن برنامج التعليم التعويضي المسرع</Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        برنامج مخصص لتعويض الطلاب عن الفترات التعليمية المفقودة من خلال منهجية تعليمية مكثفة وفعالة.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                <Box borderRadius={2} boxShadow={1} sx={{ backgroundColor: '#ffb35061' }}>
                  <Card elevation={0} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ backgroundColor: '#ffb35061' }}>
                      <Typography variant="h6" fontWeight="bold">لمحة عن برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها</Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        برنامج مصمم خصيصاً لمساعدة أبناء السوريين في المهجر على تعلم اللغة العربية والحفاظ على هويتهم الثقافية.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Box>

            {/* Profile Section*/}
            <Box sx={{ width: { xs: '100%', md: '58.33%' } }}>
              <StyledPaper>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                  <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                    تسجيل الدخول 
                  </Typography>
                  <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                    :المعلومات الشخصية
                  </Typography>
                  <Stack spacing={2}>
                    
                    {/* User Name*/}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          اسم الكامل:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        placeholder="اسم المستخدم يكتب باللغة العربية فقط"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        variant="outlined"
                        {...register('username')}
                      />
                    </Box>

                    {/* Date*/}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          تاريخ الميلاد:
                        </Typography>
                      </Box>
                      <StyledTextField
                        type="date"
                        fullWidth
                        error={!!errors.birthday}
                        helperText={errors.birthday?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        {...register('birthday')}
                      />
                    </Box>

                    {/* Sex */}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          الجنس:
                        </Typography>
                        <RadioGroup
                          row
                          {...register('sex')}
                        >
                          <FormControlLabel value="male" control={<Radio />} label="ذكر" />
                          <FormControlLabel style={{ marginLeft: '0.5rem' }} value="female" control={<Radio />} label="أنثى" />
                        </RadioGroup>
                      </Box>
                      {errors.sex && (
                        <FormHelperText error sx={{ textAlign: 'right' }}>
                          {errors.sex.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Birth Country */}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          مكان الولادة:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        type="text"
                        placeholder="مثال: دمشق أو دبي"
                        error={!!errors.country}
                        helperText={errors.country?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        variant="outlined"
                        {...register('country')}
                      />
                    </Box>

                    {/* Current Location */}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          مكان الأقامة الحالي:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        type="text"
                        placeholder="مثال: تركيا أو المانيا"
                        error={!!errors.currentLocation}
                        helperText={errors.currentLocation?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        variant="outlined"
                        {...register('currentLocation')}
                      />
                    </Box>

                    {/* Study Information */}
                    <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                      المعلومات التعليمية:
                    </Typography>

                    {/* Study Level*/}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          المستوى الدراسي:
                        </Typography>
                      </Box>
                      <StyledSelect
                        fullWidth
                        displayEmpty
                        defaultValue=""
                        variant="outlined"
                        error={!!errors.studyLevel}
                        MenuProps={{ disableScrollLock: true }}
                        {...register('studyLevel')}
                      >
                        <MenuItem value="" disabled>
                          اختر المستوى الدراسي
                        </MenuItem>
                        <MenuItem value="primary">المرحلة الابتدائية</MenuItem>
                        <MenuItem value="middle">المرحلة الإعدادية</MenuItem>
                        <MenuItem value="high">المرحلة الثانوية</MenuItem>
                      </StyledSelect>
                      {errors.studyLevel && (
                        <FormHelperText error sx={{ textAlign: 'right' }}>
                          {errors.studyLevel.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Curriculum*/}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          المنهج الدراسي المتبع:
                        </Typography>
                      </Box>
                      <StyledSelect
                        fullWidth
                        displayEmpty
                        defaultValue=""
                        variant="outlined"
                        error={!!errors.curriculum}
                        MenuProps={{ disableScrollLock: true }}
                        {...register('curriculum')}
                      >
                        <MenuItem value="" disabled>
                          اختر المنهج
                        </MenuItem>
                        <MenuItem value="syrian">المنهاج السوري</MenuItem>
                        <MenuItem value="international">المنهاج الدولي</MenuItem>
                      </StyledSelect>
                      {errors.curriculum && (
                        <FormHelperText error sx={{ textAlign: 'right' }}>
                          {errors.curriculum.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/*Study Program*/}
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          البرنامج الذي ترغب فيه:
                        </Typography>
                      </Box>
                      <StyledSelect
                        fullWidth
                        displayEmpty
                        defaultValue=""
                        variant="outlined"
                        error={!!errors.studyProgram}
                        MenuProps={{ disableScrollLock: true }}
                        {...register('studyProgram')}
                      >
                        <MenuItem value="" disabled>
                          اختر البرنامج
                        </MenuItem>
                        <MenuItem value="accelerated">برنامج التعليم التعويضي المسرع</MenuItem>
                        <MenuItem value="arabic">برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها</MenuItem>
                      </StyledSelect>
                      {errors.studyProgram && (
                        <FormHelperText error sx={{ textAlign: 'right' }}>
                          {errors.studyProgram.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Contact Info*/}
                    {/* <Typography variant="h6" component="h1" gutterBottom align="right" sx={{ mb: 1 }}>
                      معلومات التواصل:
                    </Typography> */}

                    {/* Eamil*/}
                    {/* <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          البريد الإلكتروني:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        type="email"
                        placeholder="ahmad@gmail.com :مثال "
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        variant="outlined"
                        {...register('email')}
                      />
                    </Box>

                    {/* Phone Number*/}
                    {/* <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle1" component="span">
                          رقم الهاتف / واتساب:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        type="text"
                        placeholder="+963912345678 :مثال"
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                        FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                        variant="outlined"
                        {...register('phoneNumber')}
                      />
                    </Box> */} 

                    {/* Agree*/}
                    <Box sx={{ display: 'flex', direction: 'rtl' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            {...register('agreeToTerms')}
                          />
                        }
                        label={
                          <Typography variant="body2">
                            قرأت و أوافق على <Link>سياسة الخصوصية</Link> و <Link>دليل استخدام الموقع</Link>
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ justifyContent: 'flex-end', ml: 0, mr: 0 }}
                      />
                    </Box>
                    {errors.agreeToTerms && (
                      <FormHelperText error sx={{ textAlign: 'right' }}>
                        {errors.agreeToTerms.message}
                      </FormHelperText>
                    )}

                    {/* Button*/}
                    <Box>
                      <StyledSubmitButton
                        type="submit"
                        disabled={!isDirty || isSubmitting || !agreeToTerms}
                      >
                        التسجيل
                        
                      </StyledSubmitButton>

                      <GoogleAccount/>
                        
                    </Box>
                  </Stack>
                </FormContainer>
              </StyledPaper>
            </Box>
          </Box>
        </Container>
        
        {svgBottom}
        <FooterSection />
    </>
  );
};

export default Form;