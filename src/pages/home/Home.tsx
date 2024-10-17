import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules"; // Import EffectCube
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube"; // Import cube effect CSS
import HomeProduct from "./HomeProduct";
import { Parallax } from "react-parallax";
import { AxiosInstance } from "../../api/api";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Home: FC = () => {
  const [poems, setPoems] = useState<{ title: string; poem: string }[]>([]);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(175);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await AxiosInstance.get("/api/poems");
        setPoems(response.data);
      } catch (error) {
        console.error("Error fetching poems:", error);
      }
    };

    fetchPoems();
  }, []);

  const handleLike = () => {
    if (!liked) {
      setCount((prev) => prev + 1);
      setLiked(true);
    }
  };

  const getFirstFourCouplets = (poem: string) => {
    const couplets = poem
      .split(".")
      .map((line) => line.trim())
      .filter(Boolean);
    return couplets.slice(0, 4).join(". ");
  };

  return (
    <>
      <Parallax bgImage="/images/home.png" bgImageAlt="the cat" strength={500}>
        <Box
          p="5%"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={5}>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Typography variant="h3" color="#fff" lineHeight={1.3}>
                <Typewriter
                  options={{
                    strings: [
                      "Söweşjeňlik ruh Magrupynyň türkmene joşan ruhydyr.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectCube]}
                slidesPerView={1}
                spaceBetween={10}
                effect="cube"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                speed={1500}
              >
                {poems.map((poem, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      sx={{
                        background: "#CAA183",
                        borderRadius: "20px",
                        width: "80%",
                        position: "relative",
                      }}
                    >
                      <CardActionArea>
                        <CardContent sx={{ padding: "5%", height: "180px" }}>
                          <Typography
                            sx={{ fontFamily: "cursive" }}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {poem.title}
                          </Typography>
                          <Typography
                            width="75%"
                            dangerouslySetInnerHTML={{
                              __html: getFirstFourCouplets(poem.poem) + ".",
                            }}
                          />
                          <Stack
                            direction="row"
                            alignItems="center"
                            position="absolute"
                            sx={{ bottom: 0, right: 0 }}
                          >
                            <Typography color="#fff">{count}</Typography>
                            <Checkbox
                              {...label}
                              icon={<FavoriteBorder sx={{ color: "#fff" }} />}
                              checkedIcon={<Favorite sx={{ color: "red" }} />}
                              checked={liked}
                              onChange={handleLike}
                            />
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
      <HomeProduct />
    </>
  );
};

export default Home;
