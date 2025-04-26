import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import secondaryTheme from "../styles/arabicFormThem";

// import { useFormik } from 'formik';
// import * as yup from 'yup';

// // تحقق من صحة البيانات باستخدام Yup
// const validationSchema = yup.object({
//   title: yup.string().required('حقل العنوان مطلوب'),
//   username: yup.string().required('حقل اسم المستخدم مطلوب'),
//   email: yup.string().email('البريد الإلكتروني غير صالح').required('حقل البريد الإلكتروني مطلوب'),
//   message: yup.string().required('حقل الرسالة مطلوب'),
// });

const ContactForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       title: '',
  //       username: '',
  //       email: '',
  //       message: '',
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //       // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
  //     },
  //   });

  return (
    <ThemeProvider theme={secondaryTheme}>
      <Container
        component="form"
        maxWidth="sm"
        sx={{
          my: 6,
          py: 4,
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "20px",
          bgcolor: "white",
          boxShadow: 3, // Adds medium shadow (theme-aware)
          position: "relative", // Needed for absolute positioning of bottom box
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "right",
          width: {
            xs: "90%",    
            sm: "400px",   
            md: "500px",   
          },
        }}
      >
        <Typography variant="h6" component="h1" gutterBottom>
          تواصل معنا
        </Typography>

        <TextField fullWidth id="title" name="title" label="العنوان" />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="اسم المستخدم"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="البريد الإلكتروني"
          type="email"
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="الرسالة"
          multiline
          rows={4}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 2, py: 1.5 }}
        >
          تأكيد وإرسال
        </Button>

        {/* Bottom Decorative Box */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-5%", // Half outside container
            left: "-5%",
            width: "110%",
            height: "110%",
            bgcolor: "primary.light",
            borderRadius: "20px",
            zIndex: -1, // Appears behind container
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
