import { Box } from "@mui/material";
import React from "react";
import StatsCard from "./StatsCard";
import { stats } from "../../../data/stats";
import { motion } from "framer-motion";

const StatsSection = () => {
  // Animation variants
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center", // Scale from center
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2, // Stagger delay based on index
        duration: 1.2,
        type: "spring",
        stiffness: 50, //Controls how "strong" the spring is
        damping: 10, //how quickly the spring loses energy (friction)
      },
    }),
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "background.paper",
          padding: "90px 10vw",
          display: "grid",
          placeItems: "center", //return
          gap: 1,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            custom={index} // Pass index for custom delay
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={boxVariants}
            style={{ transformOrigin: "center" }} // Ensure scaling from center
          >
            <Box key={index}>
              <StatsCard data={item} />
            </Box>
          </motion.div>
        ))}
      </Box>
    </>
  );
};

export default StatsSection;
