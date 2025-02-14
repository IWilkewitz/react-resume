import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedSection = () => {
  return (
    <Container sx={{ textAlign: "center", padding: 5 }}>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Animated Website
        </Typography>
      </motion.div>

      {/* Animated Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </motion.div>
    </Container>
  );
};

export default AnimatedSection;
