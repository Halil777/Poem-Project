import { Box } from "@mui/material";
import { FC } from "react";
import PoemsHero from "./components/PoemsHero";
import FeaturedPoems from "./components/FeaturedPoems";
import PoemsList from "./components/PoemsList";

const Poem: FC = () => {
  return (
    <Box>
      <PoemsHero />
      <FeaturedPoems />
      <PoemsList />
    </Box>
  );
};

export default Poem;
