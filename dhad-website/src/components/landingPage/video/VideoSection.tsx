import { Box } from "@mui/material";
import React from "react";
import bgvid from "../../../assets/images/video-bg.png";
import vid from "../../../assets/images/video-banner.jpg";
import shape1 from "../../../assets/images/video-shape-1.png";
import shape2 from "../../../assets/images/video-shape-2.png";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

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
          height: "700px",
          backgroundColor: "background.paper",
          paddingBottom:"120px"
        }}
      >
        <Box // ---background
          sx={{
            position: "absolute",
            width: "100%",
            height: "300px",
            backgroundImage: `url(${bgvid})`,
            backgroundSize: "cover", // Ensures image covers the box
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        />
        <Box // ---video
          sx={{
            position: "relative",
            zIndex: 3,
            top: 100,
            width: 900,
            height: 500,
            backgroundImage: `url(${vid})`,
            backgroundRepeat: "no-repeat",
            borderRadius: "0 100px ",
            "&::before": {
              // Dark overlay
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsla(0, 0%, 0%, 0.3)", // 50% darkness
              borderRadius: "0 100px", // Match parent's border radius
              zIndex: 1, // Above background but below content
            },
          }}
        >
          <Box // ---video after
            component="img"
            src={shape1}
            alt="decorative shape"
            sx={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 1100,
              height: "auto",
              zIndex: -10,
            }}
          />

          <Box // ---video before
            component="img"
            src={shape2}
            alt="decorative shape"
            sx={{
              position: "absolute",
              bottom: -30,
              right: 10,
              top: -80,
              height: "auto",
              zIndex: 1,
            }}
          />

          <Box // Play Button (centered)
            sx={{
              position: "absolute",
              zIndex: 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 80,
              height: 80,
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
            <PlayArrowRoundedIcon sx={{ fontSize: 40, color: "#ffffff" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VideoSection;
