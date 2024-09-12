'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const pages = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  );
};
