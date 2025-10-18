"use client";
import { Box, Stack, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceArr = [
  {
    id: 1,
    title: "Front-End Developer",
    time: "July 2022 - now",
    location: "Kyiv",
    name: "Upwork (Freelance)",
    fullTime: true,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    time: "January 2024 - July 2024",
    location: "Kyiv",
    name: "Data Bridge",
    fullTime: false,
  },
  {
    id: 3,
    title: "Front-End Developer",
    time: "January 2022-July 2022",
    location: "Kyiv",
    name: "Ruby Labs",
    fullTime: true,
  },
  {
    id: 3,
    title: "Front-End Developer",
    time: "March 2021 — January 2022",
    location: "Kyiv",
    name: "CarFluent",
    fullTime: true,
  },
  {
    id: 3,
    title: "Front-End Developer",
    time: "July 2020 — March 2021",
    location: "Kyiv",
    name: "Pragma",
    fullTime: true,
  },
  {
    id: 4,
    title: "Front-End Developer",
    time: "January 2020 — July 2020",
    location: "Kharkiv",
    name: "Lazy Ants",
    fullTime: true,
  },
  {
    id: 5,
    title: "Front-End Developer",
    time: "September 2018 — January 2020",
    location: "Kyiv",
    name: "Omisoft",
    fullTime: true,
  },
];

export const WorkExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{ maxWidth: "720px", mb: "40px", px: { xs: "15px", md: "0" } }}
    >
      <Typography
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        sx={{
          fontWeight: 700,
          fontSize: { xs: "32px", md: "42px" },
          mb: "20px",
        }}
      >
        Work Experience
      </Typography>
      {experienceArr?.map((item, index) => {
        return (
          <Box
            key={item.id}
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{
              p: { xs: "20px 0", md: "25px 0" },
              borderBottom: "2px solid #EBEAED",
              "&:hover": {
                background: "rgba(19, 176, 245, 0.05)",
                transition: "background 0.3s ease",
              },
            }}
          >
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              mb={2}
              gap={{ xs: "10px", sm: "0" }}
            >
              <Box
                sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 600 }}
              >
                {item?.title}
              </Box>
              <Box
                sx={{
                  color: "#018C0F",
                  background: "#D7FFE0",
                  borderRadius: "24px",
                  p: "8px 20px",
                  fontWeight: 600,
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                {item.fullTime ? "Full Time" : "Part Time"}
              </Box>
            </Stack>
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              fontSize={{ xs: "11px", md: "12px" }}
              gap={{ xs: "10px", sm: "0" }}
            >
              <Stack
                flexDirection={{ xs: "column", sm: "row" }}
                gap={{ xs: 1, sm: 4 }}
              >
                <Stack flexDirection="row" alignItems="center" gap={0.5}>
                  <BusinessIcon sx={{ fontSize: "16px" }} />
                  {item?.name}
                </Stack>
                <Stack flexDirection="row" alignItems="center" gap={0.5}>
                  <LocationOnOutlinedIcon sx={{ fontSize: "16px" }} />
                  {item?.location}
                </Stack>
              </Stack>

              <Stack flexDirection="row" alignItems="center" gap={0.5}>
                <CalendarMonthOutlinedIcon sx={{ fontSize: "16px" }} />
                {item?.time}
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};
