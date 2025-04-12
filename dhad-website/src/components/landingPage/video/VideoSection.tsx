import { Box } from "@mui/material";
import React from "react";
import bgvid from "../../../assets/images/video-bg.png";
import vid from "../../../assets/images/video-banner.jpg";
import shape1 from "../../../assets/images/video-shape-1.png";
import shape2 from "../../../assets/images/video-shape-2.png";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    //
    <>
      <Box // ---background
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "background.paper",
          paddingBottom: "15vh",
        }}
      >
        <Box // ---background
          sx={{
            position: "absolute",
            width: "100%",
            height: "30vh",
            backgroundImage: `url(${bgvid})`,
            backgroundSize: "cover", // Ensures image covers the box
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        />
        {/* Video container with shapes */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            top: "10vh",
            width: "63vw",
            aspectRatio: 8.8 / 5,
            borderRadius: "0 6.25vw",
            backgroundImage: `url(${vid})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            "&::before": {
              // Dark overlay + shape1
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsla(0, 0%, 0%, 0.3)",
              borderRadius: "0 6.25vw",
              zIndex: 4,
            },
          }}
        >
          {/* Shape 1 - positioned relative to video box */}
          <Box
            component="img"
            src={shape1}
            alt="Decorative shape 1"
            sx={{
              position: "absolute",
              top: "calc(-10* (5/8.8) * 1vw)",
              right: "-2.5vw",
              width: "74.75vw",
              height: "auto",
              zIndex: 2,
            }}
          />

          {/* Shape 2 - positioned relative to video box */}
          <Box
            component="img"
            src={shape2}
            alt="Decorative shape 2"
            sx={{
              position: "absolute",
              right: "0.625vw",
              top: "calc(-12 * (5/8.8) * 1vw)",
              width: "12vw",
              height: "auto",
              zIndex: 3,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 5,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "5vw", // 80px → ~5vw (80/16)
            height: "5vw", // Maintain square aspect
            minWidth: "40px", // Fallback minimum size
            minHeight: "40px", // Fallback minimum size
            backgroundColor: "secondary.main",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              transform: "translate(-50%, -50%) scale(1.1)",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <motion.div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Pulsing circle background */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "50px solid rgba(255, 255, 255, 0.64)",
                zIndex: 0,
              }}
            />

            {/* Play icon */}
            <PlayArrowRoundedIcon
              sx={{
                fontSize: "2.5vw",
                minFontSize: "24px",
                color: "#ffffff",
                position: "relative",
                zIndex: 1,
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default VideoSection;
