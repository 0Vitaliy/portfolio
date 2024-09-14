import { Typography } from '@mui/material';

export const Title = ({ title, subtitle }: any) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: '48px',
          mb: '20px',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '32px',
          mb: '50px',
          color: '#A7A7A7',
          textAlign: 'center',
        }}
      >
        {subtitle}
      </Typography>
    </>
  );
};
