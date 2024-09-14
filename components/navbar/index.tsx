'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { usePathname, useRouter } from 'next/navigation';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Tech Stack', link: '/tech-stack' },
  { title: 'projects', link: '/projects' },
  { title: 'contact', link: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          sx={{
            my: 2,
            color: 'white',
            display: 'block',
            textDecoration: pathname === page.link ? 'underline' : 'none',
          }}
          onClick={() => router.push(page.link)}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};
