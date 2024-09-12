import { Wrap } from '@/components/wrap';
import { Box } from '@mui/material';
import Image from 'next/image';

export const Banner = () => {
  return (
    <Box>
      <Wrap>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'calc(100vh - 118.5px)',
          }}
        >
          <Box sx={{ fontSize: '40px', fontWeight: '700px', flex: 1 }}>
            Hi 👋, My name is
            <Box
              sx={{
                fontSize: '40px',
                fontWeight: 'bold',
                background:
                  'linear-gradient(to right, #13B0F5 3%, #E70FAA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Vitalii Makovskyi
            </Box>
            I build things for web
          </Box>
          <Box>
            <Image src='/av.png' width={300} height={300} alt='' />
          </Box>
        </Box>
      </Wrap>
    </Box>
  );
};
