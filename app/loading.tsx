import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "var(--background)",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          border: "4px solid rgba(19, 176, 245, 0.2)",
          borderTop: "4px solid #13B0F5",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
    </Box>
  );
}
