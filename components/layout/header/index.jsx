"use client";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { SocialLink } from "@/components/social-link";
import { Wrap } from "@/components/wrap";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Tech Stack", link: "/tech-stack" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (link) => {
    router.push(link);
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        p: { xs: "20px 15px", md: "25px 30px" },
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Wrap
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Navbar />
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <SocialLink />
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "white",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Wrap>

      {/* Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "250px",
            background: "#1a1a1a",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: "20px", display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem key={page.title} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(page.link)}
                sx={{
                  py: 2,
                  px: 3,
                  borderLeft:
                    pathname === page.link
                      ? "3px solid #13B0F5"
                      : "3px solid transparent",
                  background:
                    pathname === page.link
                      ? "rgba(19, 176, 245, 0.1)"
                      : "transparent",
                  "&:hover": {
                    background: "rgba(19, 176, 245, 0.1)",
                    borderLeft: "3px solid #13B0F5",
                  },
                }}
              >
                <ListItemText
                  primary={page.title}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: pathname === page.link ? 600 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
