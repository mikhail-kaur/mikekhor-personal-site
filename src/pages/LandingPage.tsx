import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 8, textAlign: "center" }}>
      <Box
        component="pre"
        sx={{
          fontFamily: "monospace",
          whiteSpace: "none",
          mb: 4,
          fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
          lineHeight: 1.05,
        }}
      >
{"▗▖  ▗▖▗▄▄▄▖▗▖ ▗▖▗▄▄▄▖    ▗▖ ▗▖▗▖ ▗▖ ▗▄▖ ▗▄▄▖ \n"}
{"▐▛▚▞▜▌  █  ▐▌▗▞▘▐▌       ▐▌▗▞▘▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌\n"}
{"▐▌  ▐▌  █  ▐▛▚▖ ▐▛▀▀▘    ▐▛▚▖ ▐▛▀▜▌▐▌ ▐▌▐▛▀▚▖\n"}
{"▐▌  ▐▌▗▄█▄▖▐▌ ▐▌▐▙▄▄▖    ▐▌ ▐▌▐▌ ▐▌▝▚▄▞▘▐▌ ▐▌\n"}
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Welcome! I write about:
      </Typography>

      <Stack spacing={3} maxWidth="sm" mx="auto">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/machinelearning")}
          sx={{ textTransform: "none" }}
        >
          Machine Learning
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/acappella")}
          sx={{ textTransform: "none" }}
        >
          A Cappella
        </Button>
      </Stack>
    </Container>
  );
};

export default LandingPage;
