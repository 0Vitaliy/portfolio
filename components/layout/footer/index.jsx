import { Logo } from "@/components/logo";
import { SocialLink } from "@/components/social-link";
import { Wrap } from "@/components/wrap";
import { Box, Divider, Stack } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ p: { xs: "20px 15px", md: "25px 30px" }, mt: "auto" }}>
      <Wrap>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "0" },
          }}
        >
          <Logo />

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: "20px", md: "50px" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              gap={{ xs: 1, sm: 2 }}
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              <Box
                component="a"
                href="tel:+380968890505"
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#13B0F5",
                  },
                }}
              >
                +38 096 88 90 505
              </Box>
              <Box
                component="a"
                href="mailto:0makovskyi@gmail.com"
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#13B0F5",
                  },
                }}
              >
                0makovskyi@gmail.com
              </Box>
            </Stack>

            <SocialLink />
          </Box>
        </Box>
        <Divider
          sx={{ background: "#42446E", my: { xs: "15px", md: "20px" } }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "0" },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "13px", md: "15px" },
          }}
        >
          <Box>Copyright © {currentYear}</Box>
          <Box>
            Designed and built by{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #13B0F5 0%, #E70FAA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              Vitalii Makovskyi
            </Box>
          </Box>
        </Box>
      </Wrap>
    </Box>
  );
};
