import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SplashCursor } from "@/components/splash-cursor";

interface MyComponentProps {
  children: ReactNode;
}

// Layout

export const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <Box
        component="main"
        sx={{
          minHeight: "calc(100vh - 200px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
      <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        DENSITY_DISSIPATION={5}
        VELOCITY_DISSIPATION={3}
        PRESSURE_ITERATIONS={10}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={4000}
      />
    </Box>
  );
};
