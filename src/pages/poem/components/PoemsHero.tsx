import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PoemsHero: FC = () => {
  return (
    <Parallax bgImage="/images/poetic-background.avif" strength={300}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
          textAlign: "center",
          px: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "700px",
            p: { xs: 2, sm: 4 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                lineHeight: 1.1,
                color: "#F5E8DA",
              }}
            >
              Sözler bilen Safara Başla
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1.3rem" },
                color: "#E0D6C8",
                fontStyle: "italic",
                animation:
                  "typing 2s steps(30, end), blink-caret 0.75s step-end infinite",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "4px solid transparent",
              }}
            >
              Zaman we medeniýet bilen baglanyşykly döwrebap setirleri öwreniň.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 4,
                fontWeight: "bold",
                px: 5,
                py: 1.5,
                backgroundColor: "#8B5E3C",
                color: "#F5E8DA",
                fontSize: { xs: "0.9rem", md: "1rem" },
                display: "flex",
                alignItems: "center",
                "&:hover": { backgroundColor: "#704b2f" },
              }}
              endIcon={
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ArrowForwardIcon />
                </motion.div>
              }
            >
              Dessanlary öwreniň
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Parallax>
  );
};

export default PoemsHero;
