import { Logo } from '@/components/logo';
import { Navbar } from '@/components/navbar';
import { SocialLink } from '@/components/social-link';
import { Wrap } from '@/components/wrap';
import { Box, Divider, Stack } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ p: '25px 30px' }}>
      <Wrap>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <Stack flexDirection='row' alignItems='center' gap={2}>
              <Box>+38 096 88 90 505</Box>
              <Box>0makovskyi@gmail.com</Box>
            </Stack>

            <SocialLink />
          </Box>
        </Box>
        <Divider sx={{ background: '#42446E', my: '20px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Copyright © 2023</Box>
          <Box>
            Designed and built by{' '}
            <Box
              component='span'
              sx={{
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
          </Box>
        </Box>
      </Wrap>
    </Box>
  );
};
