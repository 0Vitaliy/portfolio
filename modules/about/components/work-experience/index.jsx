import { Box, Stack, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const experienceArr = [
  {
    id: 1,
    title: 'Front-End Developer',
    time: 'July 2022 - now',
    location: 'Kyiv',
    name: 'Upwork (Freelance)',
    fullTime: true,
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    time: 'January 2024 - July 2024',
    location: 'Kyiv',
    name: 'Data Bridge',
    fullTime: false,
  },
  {
    id: 3,
    title: 'Front-End Developer',
    time: 'January 2022-July 2022',
    location: 'Kyiv',
    name: 'Ruby Labs',
    fullTime: true,
  },
  {
    id: 3,
    title: 'Front-End Developer',
    time: 'March 2021 — January 2022',
    location: 'Kyiv',
    name: 'CarFluent',
    fullTime: true,
  },
  {
    id: 3,
    title: 'Front-End Developer',
    time: 'July 2020 — March 2021',
    location: 'Kyiv',
    name: 'Pragma',
    fullTime: true,
  },
  {
    id: 4,
    title: 'Front-End Developer',
    time: 'January 2020 — July 2020',
    location: 'Kharkiv',
    name: 'Lazy Ants',
    fullTime: true,
  },
  {
    id: 5,
    title: 'Front-End Developer',
    time: 'September 2018 — January 2020',
    location: 'Kyiv',
    name: 'Omisoft',
    fullTime: true,
  },
];

export const WorkExperience = () => {
  return (
    <Box sx={{ maxWidth: '720px', mb: '40px' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '42px' }}>
        Work Experience
      </Typography>
      {experienceArr?.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{ p: '25px 0', borderBottom: '2px solid #EBEAED' }}
          >
            <Stack
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              mb={2}
            >
              <Box sx={{ fontSize: '20px' }}>{item?.title}</Box>
              <Box
                sx={{
                  color: '#018C0F',
                  background: '#D7FFE0',
                  borderRadius: '24px',
                  p: '8px 25px',
                  fontWeight: 600,
                }}
              >
                {item.fullTime ? 'Full Time' : 'Part Time'}
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
                  {item?.name}
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={0.5}>
                  <LocationOnOutlinedIcon />
                  {item?.location}
                </Stack>
              </Stack>

              <Stack flexDirection='row' alignItems='center' gap={0.5}>
                <CalendarMonthOutlinedIcon />
                {item?.time}
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};
