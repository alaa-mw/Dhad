import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';

const consultationTypes = [
  {
    title: ' اسم البرنامج',
    description: 'Join interactive group sessions with other students to discuss common educational challenges.',
    icon: <EventIcon sx={{ fontSize: 40, color: '#428f9a' }} />,
  },
  {
    title: ' اسم البرنامج',
    description: 'Join interactive group sessions with other students to discuss common educational challenges.',
    icon: <VideocamIcon sx={{ fontSize: 40, color: '#428f9a' }} />,
   
  },
  {
    title: ' اسم البرنامج',
    description: 'Join interactive group sessions with other students to discuss common educational challenges.',
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#428f9a' }} />,
  
  }
];

export default function ConsultationsSection() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: '#428f9a'
          }}
        >
          برامج الدعم التربوي والعلاجي 

        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',              
              md: 'repeat(3, 1fr)'    
            },
            gap: 4                    
          }}
        >
          {consultationTypes.map((consultation, index) => (
            <Box key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {consultation.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {consultation.title}
                  </Typography>
                  <Typography
                    sx={{ mb: 3, color: 'text.secondary' }}
                  >
                    {consultation.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: '100%',
                      bgcolor: '#ef8e0b',
                      '&:hover': {
                        bgcolor: '#d6b278'
                      }
                    }}
                  >
                    اقرأ المزيد
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}