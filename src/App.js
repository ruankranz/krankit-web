// eslint-disable-next-line
import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import WindowDimensionsProvider from "services/WindowDimensionsProvider";
import MainRouter from "components/MainRouter";

function App() {
  return (
    <WindowDimensionsProvider>
      <ThemeProvider>
        <ColorModeProvider>
          <MainRouter />
        </ColorModeProvider>
      </ThemeProvider>
    </WindowDimensionsProvider>
  );
}

export default App;
