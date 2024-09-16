import { Box, Typography } from '@mui/material';

export const AboutMe = () => {
  return (
    <Box sx={{ maxWidth: '720px', mb: '40px' }}>
      <Typography sx={{ mb: '20px', fontWeight: 700, fontSize: '42px' }}>
        About Me
      </Typography>
      <Typography sx={{ fontSize: '18px' }}>
        Software engineer with 3+ years experience. I'm always try provide best
        solution for cover all business needs, and be max productive.
      </Typography>
    </Box>
  );
};
