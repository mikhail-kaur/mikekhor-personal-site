import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { NavigationItem } from "../types";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
    handleMobileMenuClose();
  };

  const menuItems: NavigationItem[] = [
    { label: "Home", path: "/" },
    { label: "AI/ML", path: "/aiml" },
    { label: "A Cappella", path: "/acappella" },
  ];

  return (
    <>
      {/* Desktop navigation - fixed at top */}
      {!isMobile && (
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 600,
                }}
              >
                Mike Khor
              </Typography>
              <Box>
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{
                      ml: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {/* Mobile floating elements - no AppBar */}
      {isMobile && (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuToggle}
            sx={{
              position: "fixed",
              top: 16,
              left: 24,
              zIndex: 1300,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              },
            }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </>
      )}

      {/* Mobile drawer menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              onClick={handleMobileMenuClose}
              sx={{
                textDecoration: "none",
                color: "#2c3e50",
                fontWeight: 600,
              }}
            >
              Mike Khor
            </Typography>
          </Box>

          {/* Menu items */}
          <List sx={{ flexGrow: 1, pt: 3 }}>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mx: 2,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#2c3e50",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navigation;
