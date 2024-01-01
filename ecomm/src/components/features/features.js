import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import './feature.css';
import { Link } from 'react-router-dom';

const Feature=()=>{

    return(
        <>
        <div className="container mt-4 mb-4">
            <div className="row">


                <div className="col-3">

                <div className="vertical-menu bg-success">

                        <a href="#" className="active" style={{color:"black", fontWeight:"bold"}}>
                            <FontAwesomeIcon icon={faBars} className='mx-3'/>All CATEGORY
                        </a>

                        <Link to="/shop"><h6>Accessories</h6></Link>
                            <Link to="/shop"><h6>Hydraulic</h6></Link>
                            <Link to="/shop"><h6>Lamp</h6></Link>
                            <Link to="/shop"><h6>Cryotonics</h6></Link>
                            <Link to="/shop"><h6>Induction</h6></Link>
                            <Link to="/shop"><h6>Avionics</h6></Link>
                            <Link to="/shop"><h6>Circuits</h6></Link>
                            <Link to="/shop"><h6>Electronics</h6></Link>
                            <Link to="/shop"><h6>Handwatch</h6></Link>                 
                            </div>


                            <div className="col-9 mt-5">
                                    <p>Product Tags</p><hr/>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Accessories</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}>Avionics</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}>Bioelectronics</button>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Cryotonics</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}>Electronics</button>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Handwatch</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}> Induction</button>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Integrated</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}>Iphone</button>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Laptops</button>
                                    <button className="btn btn-sm" style={{backgroundColor:"whitesmoke"}}>Mega</button>
                                    <button className="btn btn-sm my-1 mx-2" style={{backgroundColor:"whitesmoke"}}>Mobiles</button>
                                </div>

                </div>

                <div className="col-9">
                     <h5>FEATURES</h5>
                    <div className='mt-5 d-flex flex-row justify-content-between'>
                        <img src="./images/f1.jpg" alt="" height="200px" width="450px"/>
                        <div style={{height:"200px",width:"450px"}}>
                            <p>AWESOME SUPPORT</p>
                               <p> Lorem ipsum dolor sit amet consi et ctetueing adipisc elit sed diam.</p>
                                <p>MARKET ANALYSIS</p>
                               <p> Lorem ipsum dolor sit amet consi et ctetueing adipisc elit sed diam.
                            </p>
                        </div>
                    </div>

                    <div className='mt-5 d-flex flex-row justify-content-between'>
                         <div style={{height:"200px",width:"450px"}}>
                       <p> MULTIPLE WIDGETS</p>
                                  <p>  Widgets make it easy to customize the content of your sidebar</p>
                                  <p>  SOCIAL SHARING</p>
                                  <p>  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                        </div>
                        <img src="./images/f2.jpg" alt="" height="200px" width="450px"/>
                    </div>

                    <div className='mt-5 d-flex flex-row justify-content-between'>
                        <img src="./images/f3.jpg" alt="" height="200px" width="450px"/>
                        <div style={{height:"200px",width:"450px"}}>
                            <p>HTML5 + CSS3</p>
                             <p>   HTML5 is the latest standard for HTML</p>
                             <p> RESPONSIVE DESIGN</p>
                              <p>  Responsive design is an approach to web page creation that makes use of flexible layouts

                            </p>
                        </div>
                    </div>

                    <div className='mt-5 w-100 bg-light d-flex flex-column align-items-center justify-content-center' style={{height:"100px"}}>
                       <p style={{fontSize:"larger"}}>Our Most Powerful New Features & much more...</p>
                       <button className='btn btn-dark'>BUY NOW</button>
                    </div>

                </div>



            </div>
        </div>
        </>
    )
}

export default Feature;