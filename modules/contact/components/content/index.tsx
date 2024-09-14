import { Wrap } from '@/components/wrap';
import { Box } from '@mui/material';

export const ContentProjects = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: 'calc(100vh - 300px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Wrap>
        <Box sx={{ fontSize: '58px', mb: '10px' }}>
          For any questions please mail us:
        </Box>
        <Box
          sx={{
            fontSize: '58px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #13B0F5 3%, #E70FAA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          0makovskyi@gmail.com
        </Box>
      </Wrap>
    </Box>
  );
};
