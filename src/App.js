import React from "react";
import BoxContainerForm from "./components/BoxAll";
import "./styles/app.scss";
import { Box, ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#e9ecef"
    },
    secondary: {
      main: "#343a40"
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="box_container">
        <BoxContainerForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
