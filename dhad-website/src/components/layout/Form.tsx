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
  SelectChangeEvent,
  Stack,
  RadioGroup,
  Snackbar,
  Alert,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Header from "./Header";
import FooterSection from "../landingPage/footer/FooterSection";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
// import Grid from '@mui/material/Grid';
import StarIcon from "@mui/icons-material/Star";
import useSendData from "../../hooks/useSendData";

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
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#1ca7ae",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1ca7ae",
    },
  },
  "& .MuiInputBase-input": {
    textAlign: "right",
  },
}));

const StyledSelect = styled(Select)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e0e0e0",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1ca7ae",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1ca7ae",
  },
  "& .MuiSelect-select": {
    textAlign: "right",
  },
}));

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
  "الحادي عشر",
  "الثاني عشر",
];

// type GradeSubjectsMap = Record< typeof availableGrades, readonly string[]>;
type GradeSubjectsMap = {
  [key in string]: string[];
};

const gradeSubjects: GradeSubjectsMap = {
  الأول: ["اللغة العربية", "الرياضيات", "التربية الدينية"],
  الثاني: ["اللغة العربية", "الرياضيات", "العلوم", "التربية الدينية"],
  "الصف الثالث": ["اللغة العربية", "الرياضيات", "العلوم", "التربية الدينية"],
  "الصف الرابع": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  "الصف الخامس": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  "الصف السادس": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "الاجتماعيات",
  ],
  "الصف السابع": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
  ],
  "الصف الثامن": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
    "الفيزياء",
  ],
  "الصف التاسع": [
    "اللغة العربية",
    "الرياضيات",
    "العلوم",
    "اللغة الإنجليزية",
    "التاريخ",
    "الجغرافيا",
    "الفيزياء",
    "الكيمياء",
  ],
  "الصف العاشر": [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
  "الصف الحادي عشر": [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
  "الصف الثاني عشر": [
    "اللغة العربية",
    "الرياضيات",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "اللغة الإنجليزية",
  ],
} as const;

const Form: React.FC = () => {
  const { mutate, error } = useSendData<SignupFormData>("/storeWaitList");
  const [open, setOpen] = React.useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<SignupFormData>({
    full_name: "",
    birth_date: "",
    gender: "",
    city: "",
    current_location: "",
    education_level: "",
    program: "",
    curriculum: "",
    email: "",
    phone: "",
    grade: "",
    subjects: "", //fix
    arabic_level: "",
    agreeToTerms: false,
  });

  const FieldError = ({ field }: { field: keyof SignupFormData }) => {
    return fieldErrors[field] ? (
      <Typography
        color="error"
        variant="body2"
        sx={{ mt: 0.5, textAlign: "right" }}
      >
        {fieldErrors[field]}
      </Typography>
    ) : null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "agreeToTerms" ? checked : value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value as string,
    });
  };

  const handleSubjectsChange = (event: SelectChangeEvent<string[]>) => {
    const selectedValues = event.target.value;
    const currentGradeSubjects = gradeSubjects[formData.grade] || [];

    let updatedSubjects: string;

    // Handle "Select All" toggle
    if (selectedValues.includes("all")) {
      updatedSubjects =
        formData.subjects.split("، ").length === currentGradeSubjects.length // all selected before
          ? "" // Unselect
          : currentGradeSubjects.join("، "); // Select all
    }
    // Handle selection/unselection
    else {
      const currentSelections = formData.subjects.split("، ").filter(Boolean);
      const newSelections = Array.isArray(selectedValues)
        ? selectedValues
        : [selectedValues];

      // add if not present, remove if present
      updatedSubjects = currentSelections
        .filter((subj) => !newSelections.includes(subj)) // Remove unchecked
        .concat(
          newSelections.filter((subj) => !currentSelections.includes(subj))
        ) // Add newly checked
        .join("، ");
    }

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    mutate(formData, {
      onError: (error) => {
        console.error("Submission error:", error);
        if (error.errors) {
          // Convert array errors to single messages per field
          const newErrors: Record<string, string> = {};
          Object.entries(error.errors).forEach(([field, messages]) => {
            newErrors[field] = messages.join(", ");
          });
          setFieldErrors(newErrors);
        }
      },
      onSuccess: (data) => {
        console.log("Submission success:", data);
        setOpen(true);
      },
    });
  };

  interface SignupFormData {
    full_name: string;
    birth_date: string;
    gender: string;
    current_location: string;
    email: string;
    city: string;
    education_level: string;
    curriculum: string;
    phone: string;
    agreeToTerms: boolean;
    program: string;
    grade: string;
    subjects: string;
    arabic_level: string;
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
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              direction: "rtl",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "41.67%" } }}>
              <Paper
                sx={{
                  p: 4,
                  height: "auto",
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

                <Box sx={{ mt: 6 }}>
                  <Typography variant="body1" align="right">
                    يربطكم بأفضل المدرسين الخصوصيين حول العالم العربي
                  </Typography>
                </Box>
              </Paper>

              {/*Design Section Teachers and Students*/}

              <Stack spacing={4} mt={3}>
                {/* Students section */}
                <Box
                  borderRadius={2}
                  boxShadow={1}
                  p={3}
                  sx={{ backgroundColor: "#1ca7ae" }}
                >
                  <Card elevation={0} sx={{ overflow: "hidden" }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#1ca7ae",
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

                {/* Teachers section */}
                <Box
                  borderRadius={2}
                  boxShadow={1}
                  p={3}
                  sx={{ backgroundColor: "#1ca7ae" }}
                >
                  <Card elevation={0} sx={{ overflow: "hidden" }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#1ca7ae",
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

                {/* Rating section */}
                <Box p={3} bgcolor="white" borderRadius={2} boxShadow={1}>
                  <Stack direction="row" justifyContent="center" mt={1}>
                    <StarIcon sx={{ color: "#fbbf24" }} />
                    <StarIcon sx={{ color: "#fbbf24" }} />
                    <StarIcon sx={{ color: "#fbbf24" }} />
                    <StarIcon sx={{ color: "#fbbf24" }} />

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

                <Box
                  borderRadius={2}
                  boxShadow={1}
                  sx={{ backgroundColor: "#ffb35061" }}
                >
                  <Card elevation={0} sx={{ overflow: "hidden" }}>
                    <CardContent sx={{ backgroundColor: "#ffb35061" }}>
                      <Typography variant="h6" fontWeight="bold">
                        لمحة عن برنامج التعليم التعويضي المسرع
                      </Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos atque quis dolorem natus eum laborum dolor similique
                        totam fugiat fuga.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                <Box
                  borderRadius={2}
                  boxShadow={1}
                  sx={{ backgroundColor: "#ffb35061" }}
                >
                  <Card elevation={0} sx={{ overflow: "hidden" }}>
                    <CardContent sx={{ backgroundColor: "#ffb35061" }}>
                      <Typography variant="h6" fontWeight="bold">
                        لمحة عن برنامج اللغة العربية لأبناء السوريين الغير
                        ناطقين بها
                      </Typography>
                      <Typography variant="body2" mt={2} color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos atque quis dolorem natus eum laborum dolor similique
                        totam fugiat fuga.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>

              {/* Design Done */}
            </Box>

            <Box sx={{ width: { xs: "100%", md: "58.33%" } }}>
              <StyledPaper>
                <FormContainer onSubmit={handleSubmit}>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                    sx={{ mb: 4 }}
                  >
                    تسجيل الدخول
                  </Typography>
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
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          اسم الكامل:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        name="full_name"
                        placeholder="اسم المستخدم يكتب باللغة العربية فقط"
                        value={formData.full_name}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!fieldErrors.full_name}
                      />
                      <FieldError field="full_name" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          تاريخ الميلاد:
                        </Typography>
                      </Box>
                      <StyledTextField
                        type="date"
                        fullWidth
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!fieldErrors.birth_date}
                      />
                      <FieldError field="birth_date" />
                    </Box>

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
                      <RadioGroup
                        row
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="ذكر"
                        />
                        <FormControlLabel
                          style={{ marginLeft: "0.5rem" }}
                          value="female"
                          control={<Radio />}
                          label="أنثى"
                        />
                      </RadioGroup>
                      <FieldError field="gender" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          المدينة أو الدولة :
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        name="city"
                        type="text"
                        placeholder="مثال: دمشق أو دبي"
                        value={formData.city}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!fieldErrors.city}
                      />
                      <FieldError field="city" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          مكان الأقامة الحالي:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        name="current_location"
                        type="text"
                        placeholder="مثال: تركيا أو المانيا"
                        value={formData.current_location}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!fieldErrors.current_location}
                      />
                      <FieldError field="current_location" />
                    </Box>

                    <Typography
                      variant="h6"
                      component="h1"
                      gutterBottom
                      align="right"
                      sx={{ mb: 1 }}
                    >
                      المعلومات التعليمية:
                    </Typography>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          المستوى الدراسي:
                        </Typography>
                      </Box>
                      <StyledSelect
                        fullWidth
                        name="education_level"
                        value={formData.education_level}
                        onChange={handleSelectChange}
                        displayEmpty
                        variant="outlined"
                        MenuProps={{
                          disableScrollLock: true,
                        }}
                        error={!!fieldErrors.education_level}
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
                      <FieldError field="education_level" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
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
                        error={!!fieldErrors.curriculum}
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
                      <FieldError field="curriculum" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          البرنامج الذي ترغب فيه:
                        </Typography>
                      </Box>
                      <StyledSelect
                        fullWidth
                        name="program"
                        value={formData.program}
                        onChange={handleSelectChange}
                        displayEmpty
                        variant="outlined"
                        MenuProps={{
                          disableScrollLock: true,
                        }}
                        error={!!fieldErrors.program}
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
                      <FieldError field="program" />
                    </Box>
                    {formData.program === "برنامج التعليم التعويضي المسرع" && (
                      <StyledSelect
                        fullWidth
                        name="grade"
                        value={formData.grade}
                        onChange={handleSelectChange}
                        displayEmpty
                        variant="outlined"
                        MenuProps={{ disableScrollLock: true }}
                        error={!!fieldErrors.grade}
                        style={{ marginTop: "16px" }}
                      >
                        <MenuItem value="" disabled>
                          اختر الصف
                        </MenuItem>
                        {availableGrades.map((grade, index) => (
                          <MenuItem key={index} value={`الصف ${grade}`}>
                            {`الصف ${grade}`}
                          </MenuItem>
                        ))}
                      </StyledSelect>
                    )}
                    {formData.program === "برنامج التعليم التعويضي المسرع" &&
                      formData.grade && (
                        <>
                          <Typography variant="subtitle1" component="span">
                            المواد الدراسية المرغوبة :
                          </Typography>
                          <ListItem
                            sx={{ my: "0 !important", py: "2px !important" }}
                          >
                            <Checkbox
                              value={"all"}
                              checked={
                                formData.subjects.split("، ").length ===
                                gradeSubjects[formData.grade].length
                              }
                              onChange={handleSubjectsChange}
                            />
                            تحديد الكل
                          </ListItem>
                          {gradeSubjects[formData.grade]?.map((subject) => (
                            <ListItem
                              sx={{ my: "0 !important", py: "2px !important" }}
                            >
                              <Checkbox
                                value={subject}
                                checked={formData.subjects.includes(subject)}
                                onChange={handleSubjectsChange}
                              />
                              {subject}
                            </ListItem>
                          ))}
                        </>
                      )}
                    {formData.program === "برنامج اللغة العربية" && (
                      <StyledSelect
                        fullWidth
                        name="arabic_level"
                        value={formData.arabic_level}
                        onChange={handleSelectChange}
                        displayEmpty
                        variant="outlined"
                        MenuProps={{ disableScrollLock: true }}
                        error={!!fieldErrors.arabic_level}
                        style={{ marginTop: "16px" }}
                      >
                        <MenuItem value="" disabled>
                          اختر المستوى
                        </MenuItem>
                        <MenuItem value="beginner">مبتدئ</MenuItem>
                        <MenuItem value="intermediate">متوسط</MenuItem>
                        <MenuItem value="expert">خبير</MenuItem>
                      </StyledSelect>
                    )}

                    <Typography
                      variant="h6"
                      component="h1"
                      gutterBottom
                      align="right"
                      sx={{ mb: 1 }}
                    >
                      المعلومات التواصل:
                    </Typography>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
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
                        error={!!fieldErrors.email}
                      />
                      <FieldError field="email" />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle1" component="span">
                          رقم الهاتف / واتساب:
                        </Typography>
                      </Box>
                      <StyledTextField
                        fullWidth
                        name="phone"
                        type="text"
                        placeholder="+963912345678 :مثال"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!fieldErrors.phone}
                      />
                      <FieldError field="phone" />
                    </Box>

                    {/* rest of the form */}

                    <Box sx={{ display: "flex", direction: "rtl" }}>
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
                          <Typography variant="body2">
                            قرأت و أوافق على <Link>سياسة الخصوصية</Link> و{" "}
                            <Link>دليل استخدام الموقع</Link>
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ justifyContent: "flex-end", ml: 0, mr: 0 }}
                      />
                    </Box>
                    {error && (
                      <Alert variant="outlined" severity="error">
                        {error.message}
                      </Alert>
                    )}
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
        {svgBottom}
        <FooterSection></FooterSection>
      </motion.div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        message="تم التسجيل بنجاح"
      />
    </>
  );
};

export default Form;
