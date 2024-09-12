import { Logo } from '@/components/logo';
import { Navbar } from '@/components/navbar';
import { SocialLink } from '@/components/social-link';
import { Wrap } from '@/components/wrap';
import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{ p: '25px 30px' }}>
      <Wrap
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo />
        <Navbar />
        <SocialLink />
      </Wrap>
    </Box>
  );
};
