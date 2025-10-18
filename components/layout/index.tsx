import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTop } from "@/components/scroll-to-top";

interface MyComponentProps {
  children: ReactNode;
}

// Layout

export const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};
