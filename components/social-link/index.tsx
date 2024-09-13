import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SocialLink = () => {
  return (
    <Box>
      <IconButton href='https://github.com/0Vitaliy' target='_blank'>
        <GitHubIcon sx={{ color: '#A7A7A7' }} />
      </IconButton>
      <IconButton
        href='https://www.linkedin.com/in/vitalii-makovskyi-8024a6170/'
        target='_blank'
      >
        <LinkedInIcon sx={{ color: '#A7A7A7' }} />
      </IconButton>
    </Box>
  );
};
