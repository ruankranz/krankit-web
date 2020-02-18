/** @jsx jsx */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { jsx } from '@emotion/core'
import About from './components/About'
import AppGallery from './components/AppGallery'
import GamesGallery from './components/GamesGallery'
import Home from './components/Home'
import Contact from './components/Contact'
import WindowDimensionsProvider from './services/WindowDimensionsProvider'
import { ThemeProvider } from "@chakra-ui/core";


function App() {

    return (
        <WindowDimensionsProvider>
          <ThemeProvider>
            <Router>
              <Switch>
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
                <Route path="/apps" component={ AppGallery } />
                <Route path="/games" component={ GamesGallery } />
                <Route path="/" component={ Home } />
              </Switch>
            </Router>
          </ThemeProvider>
        </WindowDimensionsProvider>
    );
}

export default App;
