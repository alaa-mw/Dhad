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
import { Box, CardActionArea, Divider } from "@mui/material";
import { right } from "../../../../node_modules/@popperjs/core/lib/enums";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

type Props = {
  data: {
    id: number;
    duration: string;
    category: string;
    title: string;
    rating: number;
    reviews: string;
    price: number;
    priceDisplay: string;
    levels: string;
    students: string;
  };
};

const CourseCard = ({ data }: Props) => {
  return (
    <>
      <Card
        key={data.id}
        sx={{
          width: "365px",
          height: "445px",
          box_shadow: 0,
          textAlign: right,
        }}
        elevation={0}
      >
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
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
                height: "200px",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              component="span"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "secondary.main",
                color: "white",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                fontSize: "1rem",
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              <QueryBuilderIcon sx={{ fontSize: "20px", paddingTop: "3px" }} />
              <Typography>{data.duration} ساعة</Typography>
            </Box>
          </Box>
          <CardContent sx={{ padding: 3 }}>
            <Box
              component="span"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                display: "inline-block",
              }}
            >
              {data.category}
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={"600"}
              sx={{ color: "primary.dark" }}
            >
              {data.title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.4} mb={2}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fontSize="small"
                  sx={{ color: "secondary.main" }}
                />
              ))}
              <Typography variant="caption" sx={{ color: "primary.dark" }}>
                (5.0/7 تقييم)
              </Typography>
            </Stack>

            {/* Price */}
            <Typography variant="h6" mb={2} sx={{ color: "secondary.main" }}>
              $0.00
            </Typography>

            {/* Meta Info */}
            <Stack direction="row" gap={3}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LibraryBooks fontSize="small" color="action" />
                <Typography variant="caption" sx={{ color: "primary.dark" }}>
                  {data.levels} مستويات
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
                    color: "primary.dark",
                  }}
                >
                  {data.students} طالب
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
