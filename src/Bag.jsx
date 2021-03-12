import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web1 from "../src/images/bg1.jfif";
import web2 from "../src/images/bg3.jpg";
import web3 from "../src/images/bg2.png";
import web4 from "../src/images/bg4.jfif";

class Bag extends Component {
    state = {  }
    render() { 
        return ( <div>

          <div className="my-5">
              <h1 className="text-center">Our Bags</h1>
          </div>
              
          
          <div className="container-mutton mb-5">
           <div className="row">
               <div className="col-10 mx-auto"  >
               <div className="row gy-4">
  
               <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web1} className="card-img-top" alt="luffy.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text"> Pork belly, which comes from the side of the hog, is called bacon once it has been cured and smoked. </p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
           
           <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web4} className="card-img-top" alt="op.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text">Pride is all very well, but a sausage is a sausage.</p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
           <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web3} className="card-img-top" alt="op.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
           <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web2} className="card-img-top" alt="zoro.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
           <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web3} className="card-img-top" alt="nami.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
           <div className="col-md-4 col-10 mx-auto">
           <div className="card" >
           <img src={web1} className="card-img-top" alt="buffmomo.jpg"/>
           <div className="card-body">
           <h5 className="card-title">Bag</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
          </div>
           </div>
           </div>
  
  
           
  
         
  
         
  
          
  
  
  
  
       
         
           </div>
               </div>
          </div>
      </div>
      </div>);
      }
  }
            
     
 
export default Bag;