import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SocialLink = () => {
  return (
    <Box>
      <IconButton>
        <GitHubIcon sx={{ color: '#A7A7A7' }} />
      </IconButton>
      <IconButton>
        <LinkedInIcon sx={{ color: '#A7A7A7' }} />
      </IconButton>
    </Box>
  );
};
