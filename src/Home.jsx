import React, { Component } from 'react';
import web from "../src/images/home.jpg";
import {NavLink} from "react-router-dom";
class Home extends Component {
    state = {  }
    render() { 
        return ( <div id="header" className="d-flex align-items-center">
             <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto"  >
                     <div className="row"> 

                 

                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                      Now buy any One piece products from <strong className="brand-name">One Piece Nepal</strong>
                  </h1>
                  <h2 className="m-1">
                      Your Favourite charecters product just one cick away.  

                  </h2>
                  <div className="mt-3">
                      <NavLink to="/About"className="btn-get-started"> Get Started</NavLink>
                    
                   </div>
                  </div>
                  <div className="col-lg-6 order-2 order-lg-4 header-img ">
                <img src={web} className="img-fluid animated" alt="home jpg"/>
                  </div>
                  </div>

                  

                
                  </div>
             </div>
             </div>
        </div> );
    }
}
 
export default Home;