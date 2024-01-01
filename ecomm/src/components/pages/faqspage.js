import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './custom.css';

const Faq=()=>{

    
        const [isExpanded, setExpanded] = useState(false);
      
        const handleToggle = () => {
          setExpanded(!isExpanded);
        };
      


    return(
        <>
        <div className="container mt-4 mb-5">
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
                             <h5>FAQS PAGE</h5>

                             <div className="mt-5">
                                 <h5>DELIVERY INFORMATION</h5>
                                 <div style={{height:"50px",border:"1px solid whitesmoke"}} className="mb-1 d-flex d-flex align-items-center"><span onClick={handleToggle} style={{ cursor: "pointer" }} className="mx-2">
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                        What are the delivery types?
                                    {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                    )}
                                </div>
                                <div style={{height:"50px",border:"2px solid whitesmoke"}} className="mb-2 d-flex align-items-center"><span onClick={handleToggle} style={{ cursor: "pointer" }} className="mx-2">
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                        What are the cart options?
                                    {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                    )}
                                </div>
                                <div style={{height:"50px",border:"2px solid whitesmoke"}} className="mb-2 d-flex align-items-center"><span onClick={handleToggle} style={{ cursor: "pointer" }} className="mx-2">
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                        What are the payment options?
                                    {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                    )}
                                </div>
                                <div style={{height:"50px",border:"2px solid whitesmoke"}} className="mb-2 d-flex align-items-center"><span onClick={handleToggle} style={{ cursor: "pointer" }} className="mx-2"> 
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                        What are the mailoptions?
                                    {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                    )}
                                </div>

                             </div>


                             <div className="mt-5">

                                      <h5>RETURNS INFORMATION</h5>

                                      <div className="mb-4 mt-3">

                                        <div className="d-flex flex-row justify-content-between">
                                        Aenean elit orci,efficitur quis nisl at?
                                        <span onClick={handleToggle} style={{ cursor: "pointer",fontWeight:"bolder" }} className="mx-2"> 
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                         </div>

                                      {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                      )}
                                     </div>

                                     <div className="mb-4 mt-3">

                                        <div className="d-flex flex-row justify-content-between">
                                        In which countries can I shop online?
                                        <span onClick={handleToggle} style={{ cursor: "pointer",fontWeight:"bolder" }} className="mx-2"> 
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                         </div>

                                      {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                      )}
                                     </div>

                                     <div className="mb-4 mt-3">

                                        <div className="d-flex flex-row justify-content-between">
                                        I have lost my return form ,what should I do?
                                        <span onClick={handleToggle} style={{ cursor: "pointer",fontWeight:"bolder" }} className="mx-2"> 
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                         </div>

                                      {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                      )}
                                     </div>

                                     <div className="mb-3 mt-3">

                                        <div className="d-flex flex-row justify-content-between">
                                        I have lost the return label , how can I send a return?
                                        <span onClick={handleToggle} style={{ cursor: "pointer",fontWeight:"bolder" }} className="mx-2"> 
                                        {isExpanded ? "-" : "+"} 
                                        </span>{" "}
                                         </div>

                                      {isExpanded && (
                                        <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.
                                        </div>
                                      )}
                                     </div>
                             </div>
                            

                             <div className='mt-5'> 
                                  <h5 className="mb-4 pe-4 border-end">DO YOU HAVE ANY QUESTION?</h5>
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
                        </div>
            </div>
        </div>

        </>
    )
}

export default Faq;