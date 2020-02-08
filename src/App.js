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


function App() {

    return (
        <WindowDimensionsProvider>
            <Router>
                <Switch>
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/apps" component={ AppGallery } />
                    <Route path="/games" component={ GamesGallery } />
                    <Route path="/" component={ Home } />
                </Switch>
            </Router>
        </WindowDimensionsProvider>
    );
}

export default App;