import { Wrap } from '@/components/wrap';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

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

export const ContentTechStack = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Wrap>
        <Typography sx={{ fontSize: '48px', mb: '20px', fontWeight: 700 }}>
          My Tech Stack
        </Typography>
        <Typography sx={{ fontSize: '32px', mb: '50px', color: '#A7A7A7' }}>
          Technologies I’ve been working with recently
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '70px',
          }}
        >
          {techArr.map((item) => {
            return (
              <Box key={item}>
                <Image
                  src={`/tech-stack/${item}`}
                  width={120}
                  height={120}
                  alt=''
                />
              </Box>
            );
          })}
        </Box>
      </Wrap>
    </Box>
  );
};
