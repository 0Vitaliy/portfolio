import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const SocialLink = () => {
  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      <IconButton
        href="https://github.com/0Vitaliy"
        target="_blank"
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px) scale(1.1)",
            "& svg": {
              color: "#fff",
            },
          },
        }}
      >
        <GitHubIcon
          sx={{
            color: "#A7A7A7",
            transition: "color 0.3s ease",
            fontSize: "28px",
          }}
        />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/vitalii-makovskyi-8024a6170/"
        target="_blank"
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px) scale(1.1)",
            "& svg": {
              color: "#0077B5",
            },
          },
        }}
      >
        <LinkedInIcon
          sx={{
            color: "#A7A7A7",
            transition: "color 0.3s ease",
            fontSize: "28px",
          }}
        />
      </IconButton>
    </Box>
  );
};
