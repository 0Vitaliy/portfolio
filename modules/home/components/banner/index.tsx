"use client";
import { Wrap } from "@/components/wrap";
import { Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Banner = () => {
  return (
    <Box>
      <Wrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "calc(100vh - 118.5px)",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: "30px", md: "0" },
            py: { xs: "40px", md: "0" },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              fontSize: { xs: "32px", sm: "42px", md: "52px" },
              lineHeight: { xs: "45px", sm: "55px", md: "70px" },
              fontWeight: "700",
              flex: 1,
            }}
          >
            Hi 👋,
            <br /> My name is
            <Box
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "52px" },
                fontWeight: "bold",
                background: "linear-gradient(90deg, #13B0F5 0%, #E70FAA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                display: "inline-block",
                my: "10px",
              }}
            >
              Vitalii Makovskyi
            </Box>
            <Box sx={{ fontSize: { xs: "28px", sm: "38px", md: "48px" } }}>
              <TypeAnimation
                sequence={[
                  "I build things for web",
                  2000,
                  "I create amazing UI/UX",
                  2000,
                  "I develop modern apps",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Box>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/av.png"
              width={350}
              height={350}
              alt="Vitalii Makovskyi"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Wrap>
    </Box>
  );
};
