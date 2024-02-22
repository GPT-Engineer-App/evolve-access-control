import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#16202A", // Darker shade for modern look
    800: "#2C3E50", // Modern blue
    700: "#34495E", // Slightly lighter blue
    600: "#E53E3E", // Red shade
    500: "#FFFFFF", // White
    400: "#000000", // Black
  },
  background: {
    50: "#F7FAFC", // Light background
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
