import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from './header';

interface MyComponentProps {
  children: ReactNode;
}

export const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};
