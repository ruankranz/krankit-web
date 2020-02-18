/** @jsx jsx */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { jsx } from '@emotion/core'
import About from './About'
import AppGallery from './AppGallery'
import GamesGallery from './GamesGallery'
import Home from './Home'
import Contact from './Contact'


function MainRouter() {

    return (
        <Router>
          <Switch>
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route path="/apps" component={ AppGallery } />
            <Route path="/games" component={ GamesGallery } />
            <Route path="/" component={ Home } />
          </Switch>
        </Router>
    );
}

export default MainRouter;
