import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
  TextField,
  Button,
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
                  <Typography variant="body2">الاتصال:</Typography>
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
                  "من نحن",
                  "البرامج التدريبية",
                  "المدرس",
                  "الاحداث",
                  "حساب المدرس",
                ].map((item) => (
                  <ListItem key={item} sx={{ px: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {item}
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
                  "تواصل معنا",
                  "الأخبار و المقالات",
                  "الأسئلة الشائعة",
                  "تسجيل الدخول",
                  "قريبا",
                ].map((item) => (
                  <ListItem key={item} sx={{ px: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {item}
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
              <Typography variant="body2" sx={{ mb: 2 }}>
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
              </Box>

              <Stack direction="row" spacing={1}>
                {[Facebook, LinkedIn, Instagram, Twitter, YouTube].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "white",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Link>
                  )
                )}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterSection;
