import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

function Routes() {
    return (
        <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>
            
        </div>
    )
}

export default Routes
