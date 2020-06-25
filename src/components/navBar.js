import React, { Component } from 'react';
import Headroom from "react-headroom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
  import Home from './Home'
  import Contact from './Contact'

class NavBar extends Component {

    render() {
      return (
        <Router>
            <div>
                <div className="indexowanie">
                    <Headroom style={{backgroundColor: "#fff"}}>
                        <div className="bar" >
                            <nav>
                                <ul className="nav__links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/contact" className="buttonContact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </Headroom>
                </div>

                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
      );
    }
}

export default NavBar; 