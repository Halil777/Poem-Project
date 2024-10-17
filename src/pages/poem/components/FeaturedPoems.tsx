import { FC } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const featuredPoems = [
  {
    title: "Döwletýar",
    author: "Magrupy",
    excerpt: "A brief excerpt from the poem goes here...",
    imageUrl: "/images/Dowletyar.jpg",
  },
  {
    title: "Ýusup-Ahmet",
    author: "Magrupy",
    excerpt: "A brief excerpt from the poem goes here...",
    imageUrl: "/images/poem2.png",
  },
  {
    title: "Seýpelmelek – Methaljemal",
    author: "Magrupy",
    excerpt: "A brief excerpt from the poem goes here...",
    imageUrl: "/images/poem3.jpeg",
  },
];

const FeaturedPoems: FC = () => {
  return (
    <Box sx={{ padding: "5%", backgroundColor: "#f9f4e7", mt: 5 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#4a3b28",
          mb: 4,
        }}
      >
        Täsin eserler
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {featuredPoems.map((poem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: "#f0e4d7",
                  color: "#5b4636",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={poem.imageUrl}
                  alt={poem.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {poem.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", mb: 1 }}
                  >
                    {poem.author}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "justify" }}>
                    {poem.excerpt}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      mt: 2,
                      backgroundColor: "#8B5E3C",
                      "&:hover": {
                        backgroundColor: "#704b2f",
                      },
                    }}
                  >
                    Continue Reading
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPoems;
