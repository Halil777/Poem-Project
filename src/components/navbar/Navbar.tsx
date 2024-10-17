import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box
      sx={{
        height: "80px",
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pl: "5%",
        pr: "5%",
        position: "fixed",
        width: "100%",
        top: 0,
        background: scrolled ? "rgba(34, 34, 34, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(5px)" : "none",
        zIndex: 10,
        boxShadow: scrolled ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
        transition:
          "background 0.9s ease, box-shadow 0.9s ease, backdrop-filter 0.9s ease",
      }}
    >
      <Typography
        fontFamily="'Great Vibes', cursive"
        variant="h4"
        color="#F8ECD1"
        sx={{
          letterSpacing: 1,
          fontWeight: "bold",
          textShadow: scrolled ? "1px 1px 3px rgba(0, 0, 0, 0.5)" : "none",
          transition: "text-shadow 0.9s ease",
        }}
      >
        Magrupy
      </Typography>

      <Stack direction="row" spacing={3}>
        <Button
          sx={{
            color: "#EAD6C4",
            fontSize: "1rem",
            fontFamily: "'Libre Baskerville', serif",
            "&:hover": {
              color: "#FFFFFF",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            },
          }}
          onClick={() => navigate("/")}
        >
          Baş sahypa
        </Button>
        <Button
          sx={{
            color: "#EAD6C4",
            fontSize: "1rem",
            fontFamily: "'Libre Baskerville', serif",
            "&:hover": {
              color: "#FFFFFF",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            },
          }}
          onClick={() => navigate("/about")}
        >
          Ömri we Döredijiligi
        </Button>
        <Button
          sx={{
            color: "#EAD6C4",
            fontSize: "1rem",
            fontFamily: "'Libre Baskerville', serif",
            "&:hover": {
              color: "#FFFFFF",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            },
          }}
          onClick={() => navigate("/poems")}
        >
          Goşgular
        </Button>
        <img src="/images/search.png" alt="" />
      </Stack>
    </Box>
  );
};

export default Navbar;
