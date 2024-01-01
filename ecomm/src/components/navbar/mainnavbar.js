import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-primary d-flex align-items-center" style={{ height: "50px" }}>

                        <div className="d-flex justify-content-between w-100 align-items-center">

                            <div className="d-flex flex-row align-items-center">
                                <div className="mx-4">
                                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>HOME</Link>
                                </div>

                                <div className="mx-3">
                                    <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>SHOP</Link>
                                </div>

                                <div className="mx-3">
                                <Dropdown>
                                    <Dropdown.Toggle className="text-white" style={{backgroundColor:"none"}} id="dropdown-basic">
                                        BLOG
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/leftsidebar" style={{ textDecoration: "none" }}>Left Sidebar</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/rightsidebar" style={{ textDecoration: "none" }}>Right Sidebar</Link></Dropdown.Item>
                                       <Dropdown.Item ><Link to="/nosidebar" style={{ textDecoration: "none" }}>No Sidebar</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>

                                <div className="mx-3">
                                <Dropdown>
                                    <Dropdown.Toggle className="text-white" style={{backgroundColor:"none"}} id="dropdown-basic">
                                       PAGES
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/service" style={{ textDecoration: "none" }}> Service</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/faq" style={{ textDecoration: "none" }}>FAQs page</Link></Dropdown.Item>
                                       <Dropdown.Item ><Link to="/gallery" style={{ textDecoration: "none" }}>Gallery</Link></Dropdown.Item>
                                       <Dropdown.Item ><Link to="/element" style={{ textDecoration: "none" }}>Elements</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/page404" style={{ textDecoration: "none" }}>page 404</Link></Dropdown.Item>
                                       <Dropdown.Item ><Link to="/aboutus" style={{ textDecoration: "none" }}>About Us</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className="mx-3">
                                    <Link to="/contactus" style={{ color: "white", textDecoration: "none" }}>CONTACT US</Link>
                                </div>

                                <div className="mx-3">
                                    <Link to="/features" style={{ color: "white", textDecoration: "none" }}>FEATURES</Link>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center mt-2">
                                <p className="text-white mx-3 "><span className="mx-3" style={{height:"20px",width:"10px",borderRadius:"75%",backgroundColor:"yellow"}}><FontAwesomeIcon icon={faPercent} style={{color:"blue"}} className="mx-3"/></span>SPECIAL OFFER</p>
                            </div>

                        </div>


                </div>
            </div>
        </>
    )
}

export default Navbar;
