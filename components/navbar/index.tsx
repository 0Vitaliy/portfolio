"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Tech Stack", link: "/tech-stack" },
  { title: "projects", link: "/projects" },
  { title: "contact", link: "/contact" },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          sx={{
            color: "white",
            display: "block",
            textDecoration: "none",
            position: "relative",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: pathname === page.link ? 600 : 400,
            transition: "all 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: pathname === page.link ? "80%" : "0%",
              height: "2px",
              background: "linear-gradient(90deg, #13B0F5 0%, #E70FAA 100%)",
              transition: "width 0.3s ease",
              borderRadius: "2px",
            },
            "&:hover": {
              transform: "translateY(-2px)",
              "&::after": {
                width: "80%",
              },
            },
          }}
          onClick={() => router.push(page.link)}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};
