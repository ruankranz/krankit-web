/** @jsx jsx */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { jsx } from '@emotion/core'
import About from './components/About'
import AppGallery from './components/AppGallery'
import Home from './components/Home'
import Contact from './components/Contact'


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
