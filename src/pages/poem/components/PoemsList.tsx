import { FC, useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { AxiosInstance } from "../../../api/api";

const PoemsList: FC = () => {
  const [poems, setPoems] = useState<{ title: string; poem: string }[]>([]);
  const [selectedPoemIndex, setSelectedPoemIndex] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

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

  const handlePoemClick = (index: number) => {
    setLoading(true);
    setSelectedPoemIndex(index);
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }} p="5%">
      <Box
        sx={{
          width: "250px",
          bgcolor: "#f9f4e7",
          borderRight: "1px solid #ccc",
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", p: 2 }}>
          Magrupynyň Goşgulary
        </Typography>
        <List>
          {poems.map((poem, index) => (
            <>
              <Divider />
              <ListItem
                component="div"
                key={index}
                onClick={() => handlePoemClick(index)}
              >
                <ListItemText sx={{ cursor: "pointer" }} primary={poem.title} />
              </ListItem>
            </>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          flexGrow: 10,
          p: 3,
          overflowY: "auto",
        }}
      >
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="/images/book.webp"
                alt="Loading"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          ) : (
            selectedPoemIndex !== null && (
              <motion.div
                key={selectedPoemIndex}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                style={{ position: "relative", width: "100%" }}
              >
                <Box id={`poem-${selectedPoemIndex}`} sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {poems[selectedPoemIndex].title}
                  </Typography>
                  <Typography variant="body1" component="div">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: poems[selectedPoemIndex].poem,
                      }}
                    />
                  </Typography>
                </Box>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default PoemsList;
