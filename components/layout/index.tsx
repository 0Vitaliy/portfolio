import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from './header';
import { Footer } from './footer';

interface MyComponentProps {
  children: ReactNode;
}

// Layout

export const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
