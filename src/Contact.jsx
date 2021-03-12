import React, { Component } from 'react';

import web from "../src/images/contact.jfif";

class Contact extends Component {
    state = {  }
    render() { 
        return (<div>          
            <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-9 mx-auto col-md-7 pt- order-lg-1 "  >
                 
            <div className="container-contact">
            <div className="text-center ">
                  <h2>
                   We would love to listen from you....
                  </h2>
                </div>
            
             <div className="contact">
             
               <div>
               <a href="#"><i class="fa fa-map"></i></a>
               <a href="#"><i class="fa fa-Phone"></i></a>
               <a href="#"><i class="fa fa-envelope"></i></a>
               </div>
               
               <div class="container ">
  <form >
    <div class="row">
      
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your name.."/>
      </div>
    </div>

    <div class="row">
    
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your gmail address"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </div>

    <div class="row">
     
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your mobile number"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
      </div>
    </div>
    
    
    
    <div class="row">
     
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>

                  </div>
           
                  </div> 
             <div className=" header-img position:absolute  right:10px  " style={{position: "absolute", top: "6px", right:"4px"}}>
                <img src={web} className="img-fluid animated" alt="home jpg"/>
                  </div>
                 </div>
                 
            </div>
        </div>
        </div> );
    }
}
 
export default Contact;