import { Box } from '@mui/material';
import { AboutMe } from './components/about-me';
import { WorkExperience } from './components/work-experience';
import { Education } from './components/education';
import { Wrap } from '@/components/wrap';

export const AboutModules = () => {
  return (
    <Box>
      <Wrap>
        <AboutMe />
        <WorkExperience />
        <Education />
      </Wrap>
    </Box>
  );
};
