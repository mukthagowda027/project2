import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMapMarker,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import { Link } from 'react-router-dom';
import Map from './map';

const Contact=()=>{

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
                     <h5>CONTACT US</h5>
                     <div className='d-flex flex-row justify-content-between mx-2'>
                     <div className='mt-5'>
                     <FontAwesomeIcon icon={faMapMarker} style={{color:"blue"}} size="2x"/>
                        <h5 style={{fontWeight:"bold"}}>Address:</h5>
                       <p>1093 Marigold Lane, Coral Way, <br/>
                        Miami, Florida, 33169</p>
                     </div>
                     <div className='mt-5'>
                     <FontAwesomeIcon icon={faPhone}  style={{color:"blue"}} size="2x"/>
                        <h5 style={{fontWeight:"bold"}}>Phone numbers:</h5>
                       <p>610-403-403</p>
                     </div>
                     <div className='mt-5'>
                     <FontAwesomeIcon icon={faEnvelope} style={{color:"blue"}} size="2x"/>
                        <h5 style={{fontWeight:"bold"}}>Email:</h5>
                       <p>company@example.com</p>
                     </div>
                     </div>
                    

                     <div className='mt-5'> 
                     <form>
                    <fieldset >
                        <div className="mb-3">
                        <label for="disabledTextInput" className="form-label">Your Name(required)</label>
                        <input type="text" id="disabledTextInput" className="form-control bg-light"  />
                        </div>
                        <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Your Email(required)</label>
                        <input type="text" id="disabledSelect" className="form-control bg-light"  />
                        </div>
                        <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Subject</label>
                        <input type="text" id="disabledSelect" className="form-control bg-light"  />
                        </div>
                        <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Your Message</label>
                        <input type="text" id="disabledSelect" className="form-control py-5 bg-light"  />
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </fieldset>
                    </form>
                   </div>

                   <div className='mt-5'>
                     <Map />
                    </div>
                

                </div>



            </div>
        </div>
        </>
    )
}

export default Contact;