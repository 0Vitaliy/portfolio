import { Wrap } from '@/components/wrap';
import { Box, TextField, Button } from '@mui/material';
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
          <Box
            sx={{
              fontSize: '52px',
              lineHeight: '70px',
              fontWeight: '700px',
              flex: 1,
            }}
          >
            Hi 👋,
            <br /> My name is
            <Box
              sx={{
                fontSize: '52px',
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
            <Image src='/av.png' width={350} height={350} alt='' />
          </Box>
        </Box>
        <Box>
          <form className='elementor-form' name='testfind'>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label='Name'
                name='name'
                type='text'
              />
              <TextField
                label='Email'
                name='email'
                type='email'
              />
              <TextField
                label='Message'
                name='message'
                type='text'
              />
              <Button type='submit'>Send</Button>
            </Box>
          </form>
        </Box>
      </Wrap>
    </Box>
  );
};
