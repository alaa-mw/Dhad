import { Box } from "@mui/material";
import React from "react";
import StatsCard from "./StatsCard";
import { stats } from "../../../data/stats";

const StatsSection = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "background.paper",
          padding: "100px 2rem",
          display: "grid",
          placeItems: "center", //return
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {stats.map((item, index) => (
          <Box key={index}>
            <StatsCard data={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default StatsSection;
