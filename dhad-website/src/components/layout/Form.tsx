import React, { useState } from "react";
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
  Snackbar,
  Alert,
  ListItem,
  SelectChangeEvent,
  ListSubheader,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Header from "./Header";
import FooterSection from "../landingPage/footer/FooterSection";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import StarIcon from "@mui/icons-material/Star";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleAccount from "./GoogleAccount";
import { useNavigate } from "react-router-dom";
import useSendData from "../../hooks/useSendData";

// Zod schema for form validation
const formSchema = z.object({
  full_name: z
    .string()
    .min(1, { message: "هذا الحقل مطلوب" })
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "يرجى إدخال النص باللغة العربية فقط",
    }),
  birth_date: z.string().min(1, { message: "هذا الحقل مطلوب" }),
  gender: z.string().min(1, { message: "هذا الحقل مطلوب" }),
  city: z
    .string()
    .min(1, { message: "هذا الحقل مطلوب" })
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "يرجى إدخال النص باللغة العربية فقط",
    }),
  current_location: z
    .string()
    .min(1, { message: "هذا الحقل مطلوب" })
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "يرجى إدخال النص باللغة العربية فقط",
    }),
  email: z
    .string()
    .min(1, { message: "هذا الحقل مطلوب" })
    .email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
  education_level: z.string().min(1, { message: "هذا الحقل مطلوب" }),
  curriculum: z.string().min(1, { message: "هذا الحقل مطلوب" }),
  program: z.string().min(1, { message: "هذا الحقل مطلوب" }),
  phone: z
    .string()
    .min(1, { message: "هذا الحقل مطلوب" })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "يرجى إدخال رقم هاتف صحيح مع رمز البلد",
    }),
  grade: z.string().optional(),
  subjects: z.string().optional(),
  arabic_level: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Styled components
const svgBottom = (
  <Box
    sx={{
      position: "relative",
      bottom: -10,
      right: 0,
      width: "100%",
      zIndex: -1,
      opacity: 0.2,
    }}
  >
    <svg viewBox="0 0 1440 320" width="100%">
      <path
        fill="#ffb350"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </Box>
);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(4px)",
}));

const FormContainer = styled("form")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.75)",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.08)",
  backdropFilter: "blur(8px)",
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1ca7ae",
  color: "white",
  padding: theme.spacing(1.5),
  width: "100%",
  marginTop: theme.spacing(2),
  "&:hover": { backgroundColor: "#000000" },
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#1ca7ae" },
    "&.Mui-focused fieldset": { borderColor: "#1ca7ae" },
  },
  "& .MuiInputBase-input": { textAlign: "right" },
}));

const StyledSelect = styled(Select)(() => ({
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e0e0" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#1ca7ae" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1ca7ae" },
  "& .MuiSelect-select": { textAlign: "right" },
}));

// Grade and subjects data
const availableGrades = [
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
  "السادس",
  "السابع",
  "الثامن",
  "التاسع",
  "العاشر",
  "الحادي_عشر",
  "الثاني_عشر",
];

type GradeSubjectsMap = {
  [key: string]: string[];
};

const gradeSubjects: GradeSubjectsMap = {
  الأول: ["اللغة العربية", "الرياضيات", "التربية الدينية"],
  الثاني: ["اللغة العربية", "الرياضيات", "العلوم", "التربية الدينية"],
  الثالث: ["اللغة العربية", "الرياضيات", "العلوم", "التربية الدينية"],
  الرابع: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  الخامس: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  السادس: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  السابع: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
  ],
  الثامن: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
    "الفيزياء",
  ],
  التاسع: [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
    "الفيزياء",
    "الكيمياء",
  ],
  العاشر: [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
  الحادي_عشر: [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
  الثاني_عشر: [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
} as const;

interface FormProps {
  onNext?: () => void;
}

const Form: React.FC<FormProps> = ({ onNext }) => {
  const { mutate } = useSendData<FormValues>("/storeWaitList");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    setValue,
    getValues,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const program = watch("program");
  const grade = watch("grade");
  const subjects = watch("subjects");
  const agreeToTerms = watch("agreeToTerms");

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target;
    setValue(name as keyof FormValues, value as string, {
      shouldValidate: true,
    });

    // Reset dependent fields when program changes
    if (name === "program") {
      setValue("grade", "");
      setValue("subjects", "");
      setValue("arabic_level", "");
    }
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (!grade) {
      console.error("No grade selected");
      return;
    }
    const currentGradeSubjects = gradeSubjects[grade] || [];
    let newSubjects = subjects ? subjects.split("، ") : [];

    if (value === "all") {
      newSubjects = checked ? [...currentGradeSubjects] : [];
    } else {
      if (checked) {
        newSubjects.push(value);
      } else {
        newSubjects = newSubjects.filter((subj) => subj !== value);
      }
    }

    setValue("subjects", newSubjects.join("، "), { shouldValidate: true });
  };

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(true);
        if (onNext) onNext();
        navigate("/login", { state: { formData: data } });
      },
    });
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              direction: "rtl",
            }}
          >
            {/* Left Side Section */}
            <Box sx={{ width: { xs: "100%", md: "41.67%" } }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: "#ffb35061",
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="right"
                >
                  انضم لاول منصة سورية للدروس
                  <Box component="span" sx={{ color: "warning.main" }}>
                    &nbsp;العربية
                  </Box>
                </Typography>
                <Typography variant="body1" align="right" mt={6}>
                  يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
                </Typography>
              </Paper>

              <Stack spacing={4} mt={3}>
                {/* Student Card */}
                <Box
                  borderRadius={2}
                  boxShadow={1}
                  p={3}
                  sx={{ backgroundColor: "#1ca7ae" }}
                >
                  <Card elevation={0}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <Box mr={3}>
                        <img
                          src="https://ext.same-assets.com/1925316835/2692914122.svg"
                          alt="للطلاب"
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" mr={1}>
                          للطلاب
                        </Typography>
                        <Typography variant="body2" color="white" mr={1}>
                          يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Teacher Card */}
                <Box
                  borderRadius={2}
                  boxShadow={1}
                  p={3}
                  sx={{ backgroundColor: "#1ca7ae" }}
                >
                  <Card elevation={0}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <Box mr={3}>
                        <img
                          src="https://ext.same-assets.com/1925316835/1188184742.svg"
                          alt="للمدرسين"
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" mr={1}>
                          للمدرسين
                        </Typography>
                        <Typography variant="body2" color="white" mr={1}>
                          يربطك بالطلاب المهتمين بخدماتك التعليمية
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Rating Section */}
                <Box p={3} bgcolor="white" borderRadius={2} boxShadow={1}>
                  <Stack direction="row" justifyContent="center" mt={1}>
                    {[...Array(4)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#fbbf24" }} />
                    ))}
                    <Typography variant="subtitle1" fontWeight="bold">
                      4.0/5.0
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={-1}
                    mt={2}
                  >
                    {[
                      1457645329, 1422252817, 792584557, 2352962298, 1056112105,
                    ].map((id) => (
                      <Avatar
                        key={id}
                        src={`https://ext.same-assets.com/1925316835/${id}.webp`}
                        sx={{
                          width: 32,
                          height: 32,
                          border: "2px solid white",
                        }}
                      />
                    ))}
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "teal",
                        fontSize: 12,
                      }}
                    >
                      +50K
                    </Avatar>
                  </Stack>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    mt={2}
                  >
                    نقدر طلابنا ومدرسينا
                  </Typography>
                </Box>

                {/* Program Info Cards */}
                <Box
                  borderRadius={2}
                  boxShadow={1}
                  sx={{ backgroundColor: "#ffb35061" }}
                >
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        لمحة عن برنامج التعليم التعويضي المسرع
                      </Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        برنامج مخصص لتعويض الطلاب عن الفترات التعليمية المفقودة
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                <Box
                  borderRadius={2}
                  boxShadow={1}
                  sx={{ backgroundColor: "#ffb35061" }}
                >
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        لمحة عن برنامج اللغة العربية
                      </Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        برنامج مصمم لمساعدة أبناء السوريين في المهجر على تعلم
                        العربية
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Box>

            {/* Right Form Section */}
            <Box sx={{ width: { xs: "100%", md: "58.33%" } }}>
              <StyledPaper>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                    sx={{ mb: 4 }}
                  >
                    تسجيل الدخول
                  </Typography>

                  {/* Personal Info Section */}
                  <Typography
                    variant="h6"
                    component="h1"
                    gutterBottom
                    align="right"
                    sx={{ mb: 1 }}
                  >
                    :المعلومات الشخصية
                  </Typography>
                  <Stack spacing={2}>
                    {/* Full Name */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        اسم الكامل:
                      </Typography>
                      <StyledTextField
                        fullWidth
                        placeholder="اسم المستخدم يكتب باللغة العربية فقط"
                        error={!!errors.full_name}
                        helperText={errors.full_name?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        {...register("full_name")}
                      />
                    </Box>

                    {/* Birth Date */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        تاريخ الميلاد:
                      </Typography>
                      <StyledTextField
                        type="date"
                        fullWidth
                        error={!!errors.birth_date}
                        helperText={errors.birth_date?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        InputLabelProps={{ shrink: true }}
                        {...register("birth_date")}
                      />
                    </Box>

                    {/* Gender */}
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          الجنس:
                        </Typography>
                        <RadioGroup row {...register("gender")}>
                          <FormControlLabel
                            value="ذكر"
                            control={<Radio />}
                            label="ذكر"
                          />
                          <FormControlLabel
                            value="أنثى"
                            control={<Radio />}
                            label="أنثى"
                          />
                        </RadioGroup>
                      </Box>
                      {errors.gender && (
                        <FormHelperText error sx={{ textAlign: "right" }}>
                          {errors.gender.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* City */}
                    {/* City Dropdown */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        المدينة أو الدولة:
                      </Typography>
                      <StyledSelect
                        fullWidth
                        displayEmpty
                        error={!!errors.city}
                        {...register("city")}
                      >
                        <MenuItem value="" disabled>
                          اختر المدينة أو الدولة
                        </MenuItem>

                        {/* Syrian Cities */}
                        <ListSubheader sx={{ textAlign: "right" }}>
                          المدن السورية
                        </ListSubheader>
                        {[
                          "دمشق",
                          "حلب",
                          "حمص",
                          "اللاذقية",
                          "حماة",
                          "طرطوس",
                          "دير الزور",
                          "الحسكة",
                          "الرقة",
                          "السويداء",
                          "درعا",
                          "إدلب",
                          "القنيطرة",
                        ].map((city) => (
                          <MenuItem
                            key={city}
                            value={city}
                            sx={{ textAlign: "right" }}
                          >
                            {city}
                          </MenuItem>
                        ))}

                        {/* Arab Countries */}
                        <ListSubheader sx={{ textAlign: "right", mt: 1 }}>
                          الدول العربية
                        </ListSubheader>
                        {[
                          "الإمارات",
                          "السعودية",
                          "قطر",
                          "الكويت",
                          "عُمان",
                          "البحرين",
                          "العراق",
                          "الأردن",
                          "لبنان",
                          "فلسطين",
                          "مصر",
                          "ليبيا",
                          "تونس",
                          "الجزائر",
                          "المغرب",
                          "السودان",
                          "اليمن",
                          "الصومال",
                          "موريتانيا",
                          "جيبوتي",
                          "جزر القمر",
                        ].map((country) => (
                          <MenuItem
                            key={country}
                            value={country}
                            sx={{ textAlign: "right" }}
                          >
                            {country}
                          </MenuItem>
                        ))}

                        {/* Other Common Destinations */}
                        <ListSubheader sx={{ textAlign: "right", mt: 1 }}>
                          دول أخرى
                        </ListSubheader>
                        {[
                          "تركيا",
                          "ألمانيا",
                          "السويد",
                          "كندا",
                          "الولايات المتحدة",
                          "بريطانيا",
                          "فرنسا",
                          "ماليزيا",
                          "أستراليا",
                        ].map((country) => (
                          <MenuItem
                            key={country}
                            value={country}
                            sx={{ textAlign: "right" }}
                          >
                            {country}
                          </MenuItem>
                        ))}
                      </StyledSelect>
                      {errors.city && (
                        <FormHelperText error sx={{ textAlign: "right" }}>
                          {errors.city.message}
                        </FormHelperText>
                      )}
                    </Box>
                    {/* <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        المدينة أو الدولة:
                      </Typography>
                      <StyledTextField
                        fullWidth
                        placeholder="مثال: دمشق أو دبي"
                        error={!!errors.city}
                        helperText={errors.city?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        {...register("city")}
                      />
                    </Box> */}

                    {/* Current Location */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        مكان الأقامة الحالي:
                      </Typography>
                      <StyledTextField
                        fullWidth
                        placeholder="مثال: تركيا أو المانيا"
                        error={!!errors.current_location}
                        helperText={errors.current_location?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        {...register("current_location")}
                      />
                    </Box>

                    {/* Educational Info Section */}
                    <Typography
                      variant="h6"
                      component="h1"
                      gutterBottom
                      align="right"
                      sx={{ mb: 1 }}
                    >
                      المعلومات التعليمية:
                    </Typography>

                    {/* Education Level */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        المستوى الدراسي:
                      </Typography>
                      <StyledSelect
                        fullWidth
                        {...register("education_level")}
                        displayEmpty
                        error={!!errors.education_level}
                      >
                        <MenuItem value="" disabled>
                          اختر المستوى الدراسي
                        </MenuItem>
                        <MenuItem value="المرحلة الابتدائية">
                          المرحلة الابتدائية
                        </MenuItem>
                        <MenuItem value="المرحلة الإعدادية">
                          المرحلة الإعدادية
                        </MenuItem>
                        <MenuItem value="المرحلة الثانوية">
                          المرحلة الثانوية
                        </MenuItem>
                      </StyledSelect>
                      {errors.education_level && (
                        <FormHelperText error sx={{ textAlign: "right" }}>
                          {errors.education_level.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Curriculum */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        المنهج الدراسي المتبع:
                      </Typography>
                      <StyledSelect
                        fullWidth
                        {...register("curriculum")}
                        displayEmpty
                        error={!!errors.curriculum}
                      >
                        <MenuItem value="" disabled>
                          اختر المنهج
                        </MenuItem>
                        <MenuItem value="المنهاج السوري">
                          المنهاج السوري
                        </MenuItem>
                        <MenuItem value="المنهاج الدولي">
                          المنهاج الدولي
                        </MenuItem>
                      </StyledSelect>
                      {errors.curriculum && (
                        <FormHelperText error sx={{ textAlign: "right" }}>
                          {errors.curriculum.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Program */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        البرنامج الذي ترغب فيه:
                      </Typography>
                      <StyledSelect
                        fullWidth
                        {...register("program")}
                        displayEmpty
                        error={!!errors.program}
                      >
                        <MenuItem value="" disabled>
                          اختر البرنامج
                        </MenuItem>
                        <MenuItem value="برنامج التعليم التعويضي المسرع">
                          برنامج التعليم التعويضي المسرع
                        </MenuItem>
                        <MenuItem value="برنامج اللغة العربية">
                          برنامج اللغة العربية لأبناء السوريين الغير ناطقين بها
                        </MenuItem>
                      </StyledSelect>
                      {errors.program && (
                        <FormHelperText error sx={{ textAlign: "right" }}>
                          {errors.program.message}
                        </FormHelperText>
                      )}
                    </Box>

                    {/* Grade Selection (Conditional) */}
                    {program === "برنامج التعليم التعويضي المسرع" && (
                      <Box>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          sx={{ display: "block", mb: 1, textAlign: "right" }}
                        >
                          الصف الدراسي:
                        </Typography>
                        <StyledSelect
                          fullWidth
                          {...register("grade")}
                          displayEmpty
                          error={!!errors.grade}
                        >
                          <MenuItem value="" disabled>
                            اختر الصف
                          </MenuItem>
                          {availableGrades.map((grade, index) => (
                            <MenuItem
                              key={index}
                              value={`الصف ${grade}`}
                            >{`الصف ${grade}`}</MenuItem>
                          ))}
                        </StyledSelect>
                        {errors.grade && (
                          <FormHelperText error sx={{ textAlign: "right" }}>
                            {errors.grade.message}
                          </FormHelperText>
                        )}
                      </Box>
                    )}

                    {/* Subjects Selection (Conditional) */}
                    {program === "برنامج التعليم التعويضي المسرع" && grade && (
                      <Box>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          sx={{ display: "block", mb: 1, textAlign: "right" }}
                        >
                          المواد الدراسية المرغوبة:
                        </Typography>
                        <ListItem sx={{ my: 0, py: "2px !important" }}>
                          <Checkbox
                            value="all"
                            checked={
                              subjects?.split("، ").length ===
                              gradeSubjects[grade.replace("الصف ", "")]?.length
                            }
                            onChange={handleSubjectsChange}
                          />
                          تحديد الكل
                        </ListItem>
                        {gradeSubjects[grade.replace("الصف ", "")]?.map(
                          (subject) => (
                            <ListItem
                              key={subject}
                              sx={{ my: 0, py: "2px !important" }}
                            >
                              <Checkbox
                                value={subject}
                                checked={subjects?.includes(subject) || false}
                                onChange={handleSubjectsChange}
                              />
                              {subject}
                            </ListItem>
                          )
                        )}
                      </Box>
                    )}

                    {/* Arabic Level (Conditional) */}
                    {program === "برنامج اللغة العربية" && (
                      <Box>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          sx={{ display: "block", mb: 1, textAlign: "right" }}
                        >
                          مستوى اللغة العربية:
                        </Typography>
                        <StyledSelect
                          fullWidth
                          {...register("arabic_level")}
                          displayEmpty
                          error={!!errors.arabic_level}
                        >
                          <MenuItem value="" disabled>
                            اختر المستوى
                          </MenuItem>
                          <MenuItem value="beginner">مبتدئ</MenuItem>
                          <MenuItem value="intermediate">متوسط</MenuItem>
                          <MenuItem value="expert">خبير</MenuItem>
                        </StyledSelect>
                        {errors.arabic_level && (
                          <FormHelperText error sx={{ textAlign: "right" }}>
                            {errors.arabic_level.message}
                          </FormHelperText>
                        )}
                      </Box>
                    )}

                    {/* Contact Info Section */}
                    <Typography
                      variant="h6"
                      component="h1"
                      gutterBottom
                      align="right"
                      sx={{ mb: 1 }}
                    >
                      معلومات التواصل:
                    </Typography>

                    {/* Email */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        البريد الإلكتروني:
                      </Typography>
                      <StyledTextField
                        fullWidth
                        type="email"
                        placeholder="ahmad@gmail.com :مثال"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        {...register("email")}
                      />
                    </Box>

                    {/* Phone */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ display: "block", mb: 1, textAlign: "right" }}
                      >
                        رقم الهاتف / واتساب:
                      </Typography>
                      <StyledTextField
                        fullWidth
                        type="text"
                        placeholder="+963912345678 :مثال"
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        FormHelperTextProps={{ sx: { textAlign: "right" } }}
                        {...register("phone")}
                      />
                    </Box>

                    {/* Terms Agreement */}
                    <Box sx={{ display: "flex", direction: "rtl" }}>
                      <FormControlLabel
                        control={<Checkbox {...register("agreeToTerms")} />}
                        label={
                          <Typography variant="body2">
                            قرأت و أوافق على <Link>سياسة الخصوصية</Link> و{" "}
                            <Link>دليل استخدام الموقع</Link>
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ justifyContent: "flex-end", ml: 0, mr: 0 }}
                      />
                    </Box>
                    {errors.agreeToTerms && (
                      <FormHelperText error sx={{ textAlign: "right" }}>
                        {errors.agreeToTerms.message}
                      </FormHelperText>
                    )}

                    {/* Submit Button */}
                    <Box>
                      <StyledSubmitButton
                        type="submit"
                        disabled={!isDirty || !isValid || !agreeToTerms}
                      >
                        التسجيل
                      </StyledSubmitButton>
                      <GoogleAccount />
                    </Box>
                  </Stack>
                </FormContainer>
              </StyledPaper>
            </Box>
          </Box>
        </Container>
        {svgBottom}
        <FooterSection />
      </motion.div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="تم التسجيل بنجاح"
      />
    </>
  );
};

export default Form;
