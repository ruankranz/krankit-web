import React from 'react';
import WindowDimensionsProvider from './services/WindowDimensionsProvider'
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import MainRouter from './components/MainRouter'

function App() {

    return (
        <WindowDimensionsProvider>
          <ThemeProvider>
            <ColorModeProvider>
              <MainRouter/>
            </ColorModeProvider>
          </ThemeProvider>
        </WindowDimensionsProvider>
    );
}

export default App;
