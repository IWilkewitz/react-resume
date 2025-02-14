import React from "react";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ScrollAnimation = ({children, delay = 0, variants}) => {
  return (
    <Container sx={{ textAlign: "center", padding: 0, margin:0 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay }}

      >
        {children}
      </motion.div>
    </Container>
  );
};

export default ScrollAnimation;
