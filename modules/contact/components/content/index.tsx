"use client";
import { Wrap } from "@/components/wrap";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const ContentProjects = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "calc(100vh - 300px)",
        display: "flex",
        alignItems: "center",
        px: { xs: "15px", md: "0" },
      }}
    >
      <Wrap>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: "28px", sm: "42px", md: "58px" },
            mb: "10px",
            fontWeight: 500,
          }}
        >
          For any questions please mail us:
        </Box>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            fontSize: { xs: "24px", sm: "38px", md: "58px" },
            fontWeight: "bold",
            background: "linear-gradient(90deg, #13B0F5 0%, #E70FAA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => (window.location.href = "mailto:0makovskyi@gmail.com")}
        >
          0makovskyi@gmail.com
        </Box>
      </Wrap>
    </Box>
  );
};
