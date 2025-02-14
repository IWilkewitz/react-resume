import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScrollAnimation from './ScrollAnimation';

const theme = createTheme({
  palette: {
    primary: {
        // main: 'rgb(231, 245, 245)',
        main: 'rgb(255, 255, 255)',
      dark: '#0066CC',
    },
  },
});

export default function BoxSx({ children }) {
  return (
    <ThemeProvider theme={theme}>
    <ScrollAnimation>
      <Box
        sx={{
          width: 500,
          height: 400,
          borderRadius: 1,
          bgcolor: 'primary.main',
          color: 'black',
          textAlign: 'center',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outlineStyle: "solid",
          outlineWidth: "3px",
          outlineColor: "76, 87, 96",
        }}
      >
        {children}
      </Box>
      </ScrollAnimation> 
    </ThemeProvider>
  );
}
