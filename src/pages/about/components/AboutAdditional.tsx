import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { FC } from "react";
import { motion } from "framer-motion";

const AboutAdditional: FC = () => {
  return (
    <Box p="5%" mt={10} mb={10} sx={{ backgroundColor: "#f9f4e7" }}>
      <Box
        component="hr"
        sx={{ border: "none", borderTop: "2px solid #b0a08a", my: 3 }}
      />

      <Box mt={5}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#4a3b28",
            mb: 2,
          }}
        >
          Görnükli Eserler
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {["Döwletýar", "Ýusup-Ahmet", "Seýpelmelek – Methaljemal"].map(
            (work, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#f0e4d7",
                      color: "#5b4636",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        {work}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ textAlign: "justify", mt: 2 }}
                      >
                        [Eserde degişli sitata ýa-da maglumat: {work}]
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Divider sx={{ my: 5, backgroundColor: "#b0a08a" }} />

      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#4a3b28",
            mb: 2,
          }}
        >
          Durmuş Wakalary
        </Typography>
        <Box sx={{ pl: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
              <strong>1734</strong>: Ahal welaýatynda doglan.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
              <strong>1780</strong>: Magtymguly Pyragynyň edebi hereketine
              goşulan.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Typography variant="body2" sx={{ mt: 1, ml: 2 }}>
              <strong>1810</strong>: Turkmen edebiýatyna uly miras galdyryp,
              aradan çykdy.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Divider sx={{ my: 5, backgroundColor: "#b0a08a" }} />

      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#4a3b28",
            mb: 2,
          }}
        >
          Miras we Täsir
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography variant="body1" sx={{ textAlign: "justify", mt: 2 }}>
            Magrupynyň poeziýasy diňe bir Türkmenistanda däl, eýsem Merkezi
            Aziýada hem nesilleri ylhamlandyrýar. Onuň durmuş, medeniýet we
            şahsyýet baradaky çuňňur pikirlenmeleri Türkmen edebiýatynyň esasyny
            emele getirip, çydamlylygyň we döredijiligiň ruhuny alamatlandyrýar.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutAdditional;
