import React, { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface MyComponentProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const Wrap: React.FC<MyComponentProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        m: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
