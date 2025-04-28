// import React from 'react'

import { Box, Button, Typography } from "@mui/material";
// import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
import { courses } from "../../../data/courses";
import CourseCard from "./CourseCard";

const CourseSection = () => {

  return (
    <>
      <Box
        id="edu"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "1rem 4vw",
          backgroundColor: " hsl(36, 33%, 94%)",
          alignItems: "center",
          paddingBottom: "12vh",
        }}
      >
        <Typography variant="subtitle1" align="center" color="#e4e1dd" my={2}>
          أشهر البرامج التعليمية
        </Typography>
        <Typography variant="h4" align="center" color="primary.main" my={2}>
          اختر برنامج تعليمي و ابدأ التعلم!
        </Typography>

        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center", //return
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {courses.map((item, index) => (
              <Box key={index}>
                <CourseCard data={item} />
              </Box>
            ))}
          </Box>
        </motion.div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="slide-up"
          sx={{
            my: 4,
            px: 4,
            py: 1,
            borderRadius: 2,
          }}
        >
          تصفح المزيد من الدورات التدريبية
        </Button>
      </Box>
    </>
  );
};

export default CourseSection;
