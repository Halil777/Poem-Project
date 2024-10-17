import { Box, Typography } from "@mui/material";
import { FC } from "react";
import AboutAdditional from "./components/AboutAdditional";
import AboutHero from "./components/AboutHero";

const About: FC = () => {
  return (
    <>
      <AboutHero />
      <Box p="5%" mb={10} sx={{ backgroundColor: "#f9f4e7" }}>
        <Box
          p={"5%"}
          sx={{
            color: "#5b4636",
            maxWidth: "800px",
            margin: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            fontFamily: "'EB Garamond', serif",
            backgroundImage: "url('/images/vintage.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: "2.5rem",
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
              color: "#4a3b28",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            Magrupynyň ömri we döredijiligi <br />
            <span style={{ fontSize: "20px" }}>(1734 – 1810)</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#5b4636",
              textAlign: "justify",
              mt: 4,
              "&::first-letter": {
                fontSize: "2.8rem",
                fontWeight: "bold",
                color: "#fff",
                float: "left",
                lineHeight: "1",
                paddingRight: "8px",
              },
            }}
          >
            Magrupy Ahalda dogulýar we ýemreli türkmenleriniň magruflar
            toparyndandyr. Harby maşgaladan, serdarlar neslinden bolupdyr. Arap
            we pars medeniýeti, ylymy we edebiýaty bilen çuň tanyş. Ahal – Eýran
            we Ahal – Hywa harby gatnaşyklarynda uly figura. Magrupy tekeleriň
            Ahala iýnmesi bilen öz ýemreli taýpasyna goşulyp, Ahaldan Mara, soň
            Amyderýa boýy bilen Horezme barýar, Köneürgençde ýaşaýar. Harby
            söweşlere gatnaşyp, Eýran feodallaryna ýesir düşýär, 6-7 ýyl
            bendilikde ýaşaýar. Onuň Yspyhan, Töwrizde bolany çak edilýär. Ol
            Magtymguly, serkerde Döwletýar, şahyr Gaýyby bilen dostlukda
            ýaşaýar. Liriki şygyrlara ussat. Milli epiki žanr Magrupynyň ady
            bilen bagly. Nezireçilikde "Seýpelmelek–Methaljemal" dessanyny
            ýazýar. "Döwletýar" eserini taryhy planda ýazýar. "Ýusup-Ahmet"
            ajaýyp milli nusgadyr.Onuň dowamy hökmünde "Aly beg we Baly
            beg"eserini taslaýar. Milli edebi hereketde ol Magtymgulynyň ýany
            bilen ýöreýär . Söweşjeňlik ruh Magrupynyň türkmene joşan ruhydyr .
          </Typography>

          <Box
            component="hr"
            sx={{
              border: "none",
              borderTop: "2px solid #b0a08a",
              my: 3,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#dedede",
              textAlign: "justify",
            }}
          >
            Türkmen Edebiýatynyň Edebi Şahyry
          </Typography>
        </Box>
        <AboutAdditional />
      </Box>
    </>
  );
};

export default About;
