import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web1 from "../src/images/se1.jpg";
import web2 from "../src/images/highquality.jpg";
import web3 from "../src/images/home.jpg";



class Service extends Component {
    state = {  }
    render() { 
        return (<div>

            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
                
            
            <div className="container-buff mb-6">
             <div className="row">
             <div className="col-10 mx-auto"  >

               
               
             <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={web1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Free Delivery</h5>
        <p>we provide free delivery services at ring road</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

                 
            


             

           

           

            


  

         
           
             </div>
                 </div>
            </div>
        </div>
        );
    }
}
 
export default Service;