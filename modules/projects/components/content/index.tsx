import { Title } from '@/components/title';
import { Wrap } from '@/components/wrap';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const techArr = [
  'html.svg',
  'css.svg',
  'js-official.svg',
  'logos_react.svg',
  'vector.png',
  'logos_bootstrap.svg',
  'tailwind.svg',
  'logos_sass.svg',
  'github-fill.svg',
  'cib_greensock.svg',
  'vscode.svg',
  'logos_git-icon.svg',
];

export const ContentProjects = () => {
  return (
    <Box sx={{ pb: '50px' }}>
      <Wrap>
        <Title title='Projects' subtitle='Things I’ve built so far' />

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '40px 40px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <Box
                sx={{
                  maxWidth: '370px',
                  background: '#363636',
                  borderRadius: '16px',
                }}
              >
                <Box>
                  <img src='/projects/project.png' alt='' width='100%' />
                </Box>
                <Box sx={{ p: '16px' }}>
                  <Typography sx={{ fontSize: '28px', mb: '8px' }}>
                    Project Tile goes here
                  </Typography>
                  <Box sx={{ fontSize: '18px', mb: '8px' }}>
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </Box>
                  <Box sx={{ fontSize: '14px', mb: '8px' }}>
                    Tech stack : HTML , JavaScript, SASS, React
                  </Box>
                  <Stack flexDirection='row' justifyContent='space-between'>
                    <Button
                      sx={{
                        gap: '10px',
                        color: '#fff',
                        textTransform: 'capitalize',

                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <LinkIcon sx={{ color: '#fff' }} />
                      Live Preview
                    </Button>
                    <Button
                      sx={{
                        gap: '10px',
                        color: '#fff',
                        textTransform: 'capitalize',

                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <GitHubIcon sx={{ color: '#fff' }} />
                      View Code
                    </Button>
                  </Stack>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Wrap>
    </Box>
  );
};
