import { Box, Stack, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const educationArr = [
  {
    title: 'Bachelor in Software engineering',
    time: ' Aug 2015 - Jun 2019',
    location: 'Kyiv',
    name: 'National Pedagogical Dragomanov University',
    fultime: true,
  },
  {
    title: 'Front-End developer',
    time: 'April 2018 — August 2018',
    location: 'Kyiv',
    name: ' PHP-ACADEMY',
    fultime: false,
  },
];

export const Education = () => {
  return (
    <Box sx={{ maxWidth: '720px', mb: '50px' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '42px' }}>
        Education
      </Typography>
      {educationArr.map((item) => {
        return (
          <Box sx={{ p: '25px 0', borderBottom: '2px solid #EBEAED' }}>
            <Stack
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              mb={2}
            >
              <Box sx={{ fontSize: '20px' }}>{item.title}</Box>
              <Box
                sx={{
                  color: '#018C0F',
                  background: '#D7FFE0',
                  borderRadius: '24px',
                  p: '8px 25px',
                  fontWeight: 600,
                }}
              >
                {item.fultime ? 'Full Time' : 'Part Time'}
              </Box>
            </Stack>
            <Stack
              flexDirection='row'
              justifyContent='space-between'
              fontSize={12}
            >
              <Stack flexDirection='row' gap={4}>
                <Stack flexDirection='row' alignItems='center' gap={0.5}>
                  <BusinessIcon />
                  {item.name}
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={0.5}>
                  <LocationOnOutlinedIcon />
                  {item.location}
                </Stack>
              </Stack>

              <Stack flexDirection='row' alignItems='center' gap={0.5}>
                <CalendarMonthOutlinedIcon />
                {item.time}
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};
