"use client";
import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          sx={{
            position: "fixed",
            bottom: { xs: "20px", md: "40px" },
            right: { xs: "20px", md: "40px" },
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              background: "linear-gradient(135deg, #13B0F5 0%, #E70FAA 100%)",
              color: "white",
              width: { xs: "45px", md: "50px" },
              height: { xs: "45px", md: "50px" },
              boxShadow: "0 4px 20px rgba(19, 176, 245, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #E70FAA 0%, #13B0F5 100%)",
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(19, 176, 245, 0.6)",
              },
            }}
          >
            <KeyboardArrowUpIcon
              sx={{ fontSize: { xs: "24px", md: "28px" } }}
            />
          </IconButton>
        </Box>
      )}
    </AnimatePresence>
  );
};
