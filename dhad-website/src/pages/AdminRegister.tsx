import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../assets/images/register.jpg";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";

import logo from "../assets/images/logo.webp";
import { motion } from "framer-motion";

const AdminRegister = () => {
  const boxVariants = {
    hidden: {
      opacity: 0.5,
      scaleX: 0,
      transformOrigin: "center", // Scale from center
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 50, // Softer spring
        damping: 10, // More bouncy
        duration: 1.5, // Slower animation
        delay: 0.2, // Slight delay
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", // Needed for overlay positioning
      }}
    >
      {/* Color overlay with customizable opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(102, 102, 102, 0.3)", // Dark overlay
          zIndex: 1, // Below content
        }}
      />
      <motion.div initial="hidden" whileInView="visible" variants={boxVariants}>
        <Box
          sx={{
            position: "relative", // Brings above overlay
            zIndex: 2, // Higher than overlay
            display: "flex",
            flexDirection: "column",
            minWidth: "40vw",
            backgroundColor: "primary.light",
            borderRadius: "25px",
            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.13)",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 10px",
            border: "3px solid",
            borderColor: "white",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              bgcolor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "4px solid",
              borderColor: "primary.light",
              position: "relative",
              zIndex: 3, // Higher than content box
              top: -60,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ width: "70%", height: "70%" }}
            />
          </Box>

          <Typography color="secondary.contrastText" variant="h6">
            اهلا بك في منصة ضاد
          </Typography>
          <Divider
            variant="middle"
            sx={{
              py: 0,
              mt: 2,
              width: "80%",
              borderRadius: 0,
              border: "0.01px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              width: "clamp(250px, 75%, 800px)",
              direction: "rtl",
              mt: "20px",
            }}
          >
            {/* Phone Icon */}
            <PhoneRoundedIcon
              sx={{
                color: "text.secondary",
                fontSize: { xs: 40, md: 50 },
                bgcolor: "rgba(255, 255, 255, 0.8)",
                p: 1,
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />

            {/* Mobile Number Field */}
            <TextField
              id="mobile-number"
              label="رقم الموبايل"
              type="tel"
              inputProps={{
                pattern: "[0-9]{10}", // 10-digit validation
                inputMode: "numeric",
              }}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  right: 30,
                  left: "auto",
                  transformOrigin: "right center",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.9)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.light",
                    borderWidth: "2px",
                  },
                },
                "& input": {
                  textAlign: "right",
                  padding: "16.5px 25px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              width: "clamp(250px, 75%, 800px)",
              direction: "rtl",
              mt: "20px",
            }}
          >
            {/* Lock Icon */}
            <LockOpenRoundedIcon
              sx={{
                color: "primary.light",
                fontSize: { xs: 40, md: 50 }, // Responsive size
                bgcolor: "rgba(255, 255, 255, 0.8)",
                p: 1,
                borderRadius: "50%",
                flexShrink: 0, // Prevent icon from shrinking
              }}
            />

            {/* Password Field */}
            <TextField
              id="password-field"
              label="كلمة السر"
              type="password" // Masked input
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  right: 30,
                  left: "auto",
                  transformOrigin: "right center",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.9)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.light",
                    borderWidth: "2px",
                  },
                },
                "& input": {
                  textAlign: "right",
                  padding: "16.5px 25px",
                },
              }}
            />
          </Box>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "white",
              borderRadius: "25px",
              mt: "20px",
            }}
          >
            تسجيل الدخول
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AdminRegister;
