import { Box, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Box>
      <Typography
        variant='h6'
        noWrap
        component='a'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
};
