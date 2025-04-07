// import React from 'react'

import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "1em 4vw",
          backgroundColor: " hsl(36, 33%, 94%)",
        }}
      >
        <Typography variant="subtitle1" align="center" color="#e4e1dd">
          أشهر البرامج التعليمية
        </Typography>
        <Typography variant="h4" align="center" color="primary.main">
          اختر برنامج تعليمي و ابدأ التعلم!
        </Typography>

        <Grid container spacing={2}>
          <Grid size={4}>
            <CourseCard />
          </Grid>
          <Grid size={4}>
            <CourseCard />
          </Grid>
          <Grid size={4}>
            <CourseCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseSection;
