"use client";
import { Title } from "@/components/title";
import { Wrap } from "@/components/wrap";
import { Box } from "@mui/material";
import Image from "next/image";
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

export const ContentTechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ textAlign: "center", pb: "50px" }} ref={ref}>
      <Wrap>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Title
            title="My Tech Stack"
            subtitle="Technologies I've been working with recently"
          />
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: "40px", md: "70px" },
            alignItems: "center",
          }}
        >
          {techArr.map((item, index) => {
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  cursor: "pointer",
                  filter: "grayscale(0.3)",
                }}
              >
                <Image
                  src={`/tech-stack/${item}`}
                  width={120}
                  height={120}
                  alt={item.replace(/\.(svg|png)$/, "")}
                  style={{ display: "block" }}
                />
              </motion.div>
            );
          })}
        </Box>
      </Wrap>
    </Box>
  );
};
