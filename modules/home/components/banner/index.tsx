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
        <form 
            method="post" 
            name="contact" 
            id="contact-form"
            data-track-form="true"
        >
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name"
            />
            
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
            />
            
            <label htmlFor="message">Message</label>
            <textarea 
                name="message" 
                id="message"
            ></textarea>
            
            <button type="submit">Send</button>
        </form>
        </Box>
      </Wrap>
    </Box>
  );
};
