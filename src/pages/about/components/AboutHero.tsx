import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const heroImage = "/images/poetic-background2.jpg";

const AboutHero: FC = () => {
  return (
    <Parallax
      blur={0}
      bgImage={heroImage}
      bgImageAlt="About Background"
      strength={500}
    >
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            MAGRUPY'nın Älemine Hoş Geldiňiz
          </Typography>

          <Typography variant="h5" sx={{ mt: 2, color: "#fff" }}>
            Beýik şahyryň we ýaşulyň ýaşamagy we mirasy.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#6C5DD3",
              "&:hover": {
                backgroundColor: "#5b4636",
              },
            }}
          >
            Has giňişleýin maglumat
          </Button>
        </motion.div>
      </Box>
    </Parallax>
  );
};

export default AboutHero;
