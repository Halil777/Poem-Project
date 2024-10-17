import { Box, Typography, Stack, Divider } from "@mui/material";
import { FC } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Footer: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/parchment-texture.webp')",
        backgroundSize: "cover",
        color: "#E4DCCF",
        py: 6,
        px: 4,
        width: "100%",
        textAlign: "center",
        boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography
        variant="h3"
        fontFamily="'Great Vibes', cursive"
        sx={{
          color: "#F8ECD1",
          mb: 3,
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        “Wagyz döwründe, her söz ebedidir.”
      </Typography>

      <Divider
        sx={{
          width: "50%",
          mx: "auto",
          mb: 4,
          borderBottomWidth: "2px",
          borderColor: "#A99282",
          opacity: 0.6,
        }}
      />

      <Typography
        variant="body1"
        fontFamily="'Libre Baskerville', serif"
        sx={{
          fontStyle: "italic",
          fontSize: "1.2rem",
          mx: "auto",
          maxWidth: "700px",
          mb: 6,
        }}
      >
        “Her bir şygyrda, gizlin bir dünýä açylýar, harplaryň tansy arkaly,
        taryhyň ýüregi bilen baglanyşykda.”
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
          }}
        >
          © {new Date().getFullYear()} Ebedi Şygyrlary
        </Typography>
        <FavoriteBorder sx={{ color: "#A99282", fontSize: "small" }} />
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
          }}
        >
          Söz sungatyna hormat bilen döredildi
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
