import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Mug from "./Mug";
import Tshirt from "./Tshirt";
import Bag from "./Bag";
import Keyrings from "./Keyrings";
import Fotter from "./Fotter";




class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Tshirt" component={Tshirt}/>
                    <Route exact path="/Mug" component={Mug}/>
                    <Route exact path="/Bag" component={Bag}/>
                    <Route exact path="/Keyrings" component={Keyrings}/>
                    <Route exact path="/Service" component={Service}/>
                    <Route exact path="/Contact" component={Contact}/>
                    <Route exact path="/Fotter" component={Fotter}/>
                    <Redirect to="/" />
                </Switch>
                <Fotter/>

            </div>
          );
    }
}
 
export default App;