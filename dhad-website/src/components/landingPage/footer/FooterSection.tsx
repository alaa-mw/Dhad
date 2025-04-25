import React from "react";

import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import logo from "../../../assets/images/daad-logo-blue.jpg";

const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "hsl(180, 3%, 7%)",
        color: "white",
      }}
    >
      {/* Footer Top */}
      <Box
        id="contact"
        sx={{
          py: 8,
          borderBottom: "1px solid #6abbc6",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {/* Brand Column */}
            <Box sx={{ mb: 4 }}>
              <Link href="#">
                <Box
                  component="img"
                  src={logo}
                  alt="EduWeb logo"
                  sx={{
                    width: 150,
                    mb: 2,
                  }}
                />
              </Link>

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2">واتساب:</Typography>
                  <Link
                    href="tel:+011234567890"
                    sx={{
                      color: "white",
                      direction: "ltr",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    +90 531 738 66 27
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2">البريد الالكتروني:</Typography>
                  <Link
                    href="mailto:dhadedu4@gmail.com"
                    sx={{
                      color: "white",
                      direction: "ltr",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    dhadedu4@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Box>

            {/* Platform Links */}
            <Box component="nav">
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                المنصة الإلكترونية
              </Typography>
              <List dense>
                {[
                  { id: "about-us", title: "من نحن" },
                  { id: "courses", title: " الصفوف الدراسية" },
                  { id: "edu", title: "البرامج التعليمية" },
                  { id: "", title: "البرامج الاستشارية" },
                ].map((item) => (
                  <ListItem key={item.id} sx={{ px: 0 }}>
                    <Link
                      href={`#${item.id}`}
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main", // Optional: change color on hover
                        },
                        transition: "all 0.3s ease", // Smooth hover effect
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Quick Links */}
            <Box component="nav">
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                الروابط
              </Typography>
              <List dense>
                {[
                  { id: "contact", title: "تواصل معنا" },
                  { id: "login", title: "تسجيل الدخول" },
                ].map((item) => (
                  <ListItem key={item.id} sx={{ px: 0 }}>
                    <Link
                      href={`#${item.id}`}
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Newsletter */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                جهات الاتصال
              </Typography>
              {/* <Typography variant="body2" sx={{ mb: 2 }}>
                أدخل عنوان بريدك الإلكتروني للتسجيل في اشتراك النشرة الإخبارية
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  gap: 1,
                  mb: 3,
                }}
              >
                <TextField
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  required
                  size="small"
                  sx={{
                    flexGrow: 1,
                    "& .MuiInputBase-root": {
                      backgroundColor: "white",
                      borderRadius: 1,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                >
                  اشترك
                </Button>
              </Box> */}
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 2, "& .MuiSvgIcon-root": { fontSize: "2rem" } }}
              >
                {[
                  {
                    icon: <Facebook />,
                    url: "https://www.facebook.com/share/15tfA11Tiz/",
                  },
                  {
                    icon: <LinkedIn />,
                    url: "https://www.linkedin.com/company/%D8%B6%D8%A7%D8%AF-dhad/",
                  },
                  {
                    icon: <Instagram />,
                    url: "https://www.instagram.com/dhadedu4?igsh=Mm1tdXVraG5ndW4=",
                  },
                  { icon: <Twitter />, url: "https://twitter.com" },
                  {
                    icon: <YouTube />,
                    url: "https://youtube.com/@dhadedu?si=bNTErhxgzaQZHOy_",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterSection;
