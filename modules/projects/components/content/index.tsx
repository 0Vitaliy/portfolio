"use client";
import { Title } from "@/components/title";
import { Wrap } from "@/components/wrap";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techArr = [
  "html.svg",
  "css.svg",
  "js-official.svg",
  "logos_react.svg",
  "vector.png",
  "logos_bootstrap.svg",
  "tailwind.svg",
  "logos_sass.svg",
  "github-fill.svg",
  "cib_greensock.svg",
  "vscode.svg",
  "logos_git-icon.svg",
];

export const ContentProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ pb: "50px" }} ref={ref}>
      <Wrap>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Title title="Projects" subtitle="Things I've built so far" />
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            gap: "40px 40px",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <Box
                key={item}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                sx={{
                  maxWidth: "370px",
                  width: "100%",
                  background: "#363636",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  transition: "box-shadow 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(19, 176, 245, 0.4)",
                  },
                }}
              >
                <Box>
                  <img src="/projects/project.png" alt="" width="100%" />
                </Box>
                <Box sx={{ p: "16px" }}>
                  <Typography sx={{ fontSize: "28px", mb: "8px" }}>
                    Project Tile goes here
                  </Typography>
                  <Box sx={{ fontSize: "18px", mb: "8px" }}>
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </Box>
                  <Box sx={{ fontSize: "14px", mb: "8px" }}>
                    Tech stack : HTML , JavaScript, SASS, React
                  </Box>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Button
                      sx={{
                        gap: "10px",
                        color: "#fff",
                        textTransform: "capitalize",

                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <LinkIcon sx={{ color: "#fff" }} />
                      Live Preview
                    </Button>
                    <Button
                      sx={{
                        gap: "10px",
                        color: "#fff",
                        textTransform: "capitalize",

                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ color: "#fff" }} />
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
