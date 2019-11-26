/** @jsx jsx */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { jsx } from '@emotion/core'
import About from './About'
import AppGallery from './AppGallery'
import Home from './Home'
import Contact from './Contact'


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
                <Route path="/gallery" component={ AppGallery } />
                <Route path="/" component={ Home } />
            </Switch>
        </Router>
    );
}

export default App;
