"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      sx={{ maxWidth: "720px", mb: "40px", px: { xs: "15px", md: "0" } }}
    >
      <Typography
        sx={{
          mb: "20px",
          fontWeight: 700,
          fontSize: { xs: "32px", md: "42px" },
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: 1.6 }}
      >
        Software engineer with 3+ years experience. I'm always try to provide
        best solutions to cover all business needs, and be maximally productive.
      </Typography>
    </Box>
  );
};
