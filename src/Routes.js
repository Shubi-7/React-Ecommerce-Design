import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';

function Routes() {
    return (
        <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/shop" component={Shop}/>
            </Switch>
        </Router>
            
        </div>
    )
}

export default Routes
