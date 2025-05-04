import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import FooterSection from '../landingPage/footer/FooterSection';


const loginSettingsSchema = z.object({
  username: z.string()
    .min(4, { message: 'اسم المستخدم يجب أن يكون على الأقل 4 أحرف' })
    .max(20, { message: 'اسم المستخدم يجب أن لا يتجاوز 20 حرف' }),
    email: z.string()
    .min(1, { message: 'هذا الحقل مطلوب' })
    .email({ message: 'يرجى إدخال بريد إلكتروني صحيح' }),
    phoneNumber: z.string()
    .min(1, { message: 'هذا الحقل مطلوب' })
    .regex(/^\+?[0-9]{10,15}$/, { message: 'يرجى إدخال رقم هاتف صحيح مع رمز البلد' }),
  password: z.string()
    .min(8, { message: 'كلمة المرور يجب أن تكون على الأقل 8 أحرف' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { message: 'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، ورقم على الأقل' }),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'كلمتا المرور غير متطابقتين',
  path: ['passwordConfirm'],
});

type LoginSettingsValues = z.infer<typeof loginSettingsSchema>;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(4px)',
  maxWidth: 600,
  margin: '0 auto',
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

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator = ({ password }: PasswordStrengthIndicatorProps) => {
  const getStrengthColor = () => {
    if (!password) return '#e0e0e0';
    if (password.length < 8) return '#f44336';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return '#ff9800';
    return '#4caf50';
  };

  const getStrengthText = () => {
    if (!password) return 'لم يتم إدخال كلمة مرور';
    if (password.length < 8) return 'ضعيفة';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return 'متوسطة';
    return 'قوية';
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Typography variant="body2" sx={{ color: getStrengthColor() }}>
          {getStrengthText()}
        </Typography>
        <Typography variant="body2" sx={{ mr: 1 }}>
          قوة كلمة المرور:
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: 4, mt: 0.5, borderRadius: 2, bgcolor: '#e0e0e0' }}>
        <Box
          sx={{
            height: '100%',
            borderRadius: 2,
            bgcolor: getStrengthColor(),
            width: password ? (password.length < 8 ? '33%' : !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password) ? '66%' : '100%') : '0%',
            transition: 'width 0.3s, background-color 0.3s',
          }}
        />
      </Box>
    </Box>
  );
};
  interface FormProps {
    onNext: () => void;
  }
const LoginForm: React.FC<FormProps> = ({ onNext })  => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.formData || {};

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginSettingsValues>({
    resolver: zodResolver(loginSettingsSchema),
    mode: 'onBlur',
    defaultValues: {
      username: initialData.email ? initialData.email.split('@')[0] : '',
      password: '',
      passwordConfirm: '',
    }
  });

  const password = watch('password');

  const onSubmit = (data: LoginSettingsValues) => {
    console.log('Login settings submitted:', data);
    onNext();
    navigate('/success', { 
      state: { 
        userData: {
          ...initialData,
          username: data.username,
          email: data.email,
          studyProgram: initialData.studyProgram || 'accelerated',
        }
      }
    });
  };

  return (
    <>
    <Header />

    
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, py: 2 }}>
        
        <StyledPaper>
          <Box display="flex" justifyContent="center" mb={3}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Box 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  bgcolor: '#1ca7ae20', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}
              >
                <LockIcon sx={{ fontSize: 40, color: '#1ca7ae' }} />
              </Box>
            </motion.div>
          </Box>

          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
               تسجيل الدخول
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="right" sx={{ mb: 3, color: 'text.secondary' }}>
              أنشئ بيانات تسجيل الدخول الخاصة بك للوصول إلى حسابك في المستقبل
            </Typography>

            <Stack spacing={3}>
              {/*User Name*/}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                  <Typography variant="subtitle1" component="span">
                    اسم المستخدم:
                  </Typography>
                </Box>
                <StyledTextField
                  fullWidth
                  placeholder="أدخل اسم المستخدم"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                  variant="outlined"
                  {...register('username')}
                />
              </Box>

              <Box>
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
                    <Box>
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
                    </Box>

              {/* Password*/}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                  <Typography variant="subtitle1" component="span">
                    كلمة المرور:
                  </Typography>
                </Box>
                <StyledTextField
                  fullWidth
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                  variant="outlined"
                  {...register('password')}
                />
                <PasswordStrengthIndicator password={password} />
              </Box>

              {/* Password Conformation*/}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
                  <Typography variant="subtitle1" component="span">
                    تأكيد كلمة المرور:
                  </Typography>
                </Box>
                <StyledTextField
                  fullWidth
                  type="password"
                  placeholder="أعد إدخال كلمة المرور"
                  error={!!errors.passwordConfirm}
                  helperText={errors.passwordConfirm?.message}
                  FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                  variant="outlined"
                  {...register('passwordConfirm')}
                />
              </Box>

              {/* Button*/}
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <StyledSubmitButton
                  type="submit"
                  disabled={isSubmitting}
                >
                  إنهاء التسجيل
                </StyledSubmitButton>
              </Box>
            </Stack>
          </FormContainer>
        </StyledPaper>
      </Container>

      <FooterSection />

    </>
  );
};

export default LoginForm;