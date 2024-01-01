import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{

    return(
        <>
        <div className="container-fixed bg-light">

            <div className="container">
            <div className="row">

                <div className="col bg-primary d-flex  align-items-center mt-5" style={{height:"70px"}}>

                    
                      <div className="d-flex flex-row justify-content-between align-items-center " style={{width:"100%"}}>

                        <div className="mx-5 d-flex flex-row justify-content-between align-items-center w-25">
                        <div style={{height:"30px",width:"30px",borderRadius:"5px",backgroundColor:"white"}} className="d-flex flex-row justify-content-center align-items-center ">
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div style={{height:"30px",width:"30px",borderRadius:"5px",backgroundColor:"white"}} className="d-flex flex-row justify-content-center align-items-center ">
                        <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div style={{height:"30px",width:"30px",borderRadius:"5px",backgroundColor:"white"}} className="d-flex flex-row justify-content-center align-items-center ">
                        <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div style={{height:"30px",width:"30px",borderRadius:"5px",backgroundColor:"white"}} className="d-flex flex-row justify-content-center align-items-center ">
                        <FontAwesomeIcon icon={faYoutube} />                                      
                        </div>
                        <div style={{height:"30px",width:"30px",borderRadius:"5px",backgroundColor:"white"}} className="d-flex flex-row justify-content-center align-items-center ">
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>

                        </div>


                        <div>
                            <p className="text-white" style={{fontSize:"larger"}}>SIGN UP FOR NEWSLETTER</p>
                        </div>
                         
                        <div className="mx-4">
                        <div className="input-group mb-2">
                                <input type="text" className="form-control px-5" aria-label="Text input with dropdown button" placeholder="Your email address"/>
                                <button className="btn" style={{backgroundColor:"yellow"}}>Subscribe</button>
                         </div>
                       </div>


                      </div>
            

                </div>

                 <div className="Col mt-5 d-flex flex-row justify-content-between">
                       
                       <div>
                           <ul style={{listStyleType:"none",lineHeight:"2"}}>
                            <li><h6 style={{fontWeight:"bolder"}}>CONTACT US</h6></li>
                            <li>
                            1093 Marigold Lane, Coral Way, Miami,<br/>
                             Florida, 33169
                            </li>
                            <li>610-403-403</li>
                             <li><FontAwesomeIcon icon={faEnvelope} size="1x" style={{color:"blue"}}/>company@example.com</li>
                           </ul>
                       </div>

                       <div>
                         <ul style={{listStyleType:"none",lineHeight:'2'}}>
                            <li><h6 style={{fontWeight:"bold"}}>MY ACCOUNT</h6></li>
                            <li>orders</li>
                            <li>My Account</li>
                            <li>Checkout</li>
                            <li>Downloads</li>
                            <li>Account details</li>
                         </ul>
                       </div>

                       <div>
                        <ul style={{listStyleType:"none",lineHeight:'2'}}>
                        <li><h6 style={{fontWeight:"bold"}}>CATEGORIES</h6></li>
                        <li>Hydraulic</li>
                        <li>Atomtronics</li>
                        <li>Cryotonics</li>
                        <li>induction</li>
                        <li>spintronics</li>
                        <li>Pro Electron</li>
                        </ul>
                       </div>

                       <div>
                        <ul style={{listStyleType:"none",lineHeight:"2"}}>
                        <li><h6 style={{fontWeight:"bold"}}>INFORMATION</h6></li>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                        </ul>
                       </div>


                 </div>

                 <hr/>

                 <div className="Col d-flex flex-column align-items-center justify-content-center">
                     <div>
                        <p>Radio Hydraulic Lamp Pro Electron Atomtronics Cryotronics Induction Spintronics Accessories Electronics</p>
                     </div>
                     <div>
                        <p>Chairs Induction Avionics Bar Table Spintronics Bioelectronics Circuits</p>
                     </div>
                 </div>

                 <hr/>

                 <div className="Col d-flex flex-column align-items-center justify-content-center">
                      <div>
                        <p>Designed by Demo Theme All rights reserved.</p>
                      </div>
                      <div>

                      </div>
                 </div>


            </div>
            </div>
        </div>
        </>
    )
}

export default Footer;