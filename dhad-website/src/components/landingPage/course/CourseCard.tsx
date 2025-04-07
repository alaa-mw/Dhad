// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";

// import React from 'react';
// import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import { Star, LibraryBooks } from "@mui/icons-material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import al from "../../../assets/images/arabic-learn.png";
import Card from "@mui/material/Card";
import { CardActionArea, Divider } from "@mui/material";
import { right } from "../../../../node_modules/@popperjs/core/lib/enums";

const CourseCard = () => {
  return (
    <>
      <Card
        sx={{
          width: "365px",
          height:"445px",
          box_shadow: 0,
          textAlign: right,
        }}
        elevation={0}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={al}
            alt="learn"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              height:"200px"
            }}
          />
          <CardContent sx={{ padding: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={"600"}
              sx={{ color: 'primary.dark' }}
            >
              برنامج تعليم اللغة العربية لأبناء السوريين
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.4} mb={2}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fontSize="small"
                  sx={{ color:  'secondary.main' }}
                />
              ))}
              <Typography
                variant="caption"
                sx={{ color: 'primary.dark' }}
              >
                (5.0/7 تقييم)
              </Typography>
            </Stack>

            {/* Price */}
            <Typography
              variant="h6"
              mb={2}
              sx={{ color: 'secondary.main' }}
            >
              $0.00
            </Typography>

            {/* Meta Info */}
            <Stack direction="row" gap={3}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LibraryBooks fontSize="small" color="action" />
                <Typography
                  variant="caption"
                  sx={{ color: 'primary.dark' }}
                >
                  3 مستويات
                </Typography>
              </Stack>
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ height: "15px" }}
                flexItem
              />
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <PeopleOutlineIcon fontSize="small" color="action" />
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.dark',
                  }}
                >
                  20 طالب
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CourseCard;
