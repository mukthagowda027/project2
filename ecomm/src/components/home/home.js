import React, { useState } from 'react';
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faCaretRight} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import CardSlider from './cardslider';
import ProductSlider from './fp';
import ImageSlider from './topcategoryslider';
import { Link } from 'react-router-dom';
import Latestnews from './latestnews';



const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  


    const images = [
         {src:'./images/tc1.jpg',category:'Electronics'},
         {src:'./images/tc2.jpg',category:'Laptops'},
         {src:'./images/tc3.jpg',category:'Home appliances'},
         {src:'./images/tc4.jpg',category:'Hand Watch'},
         {src:"./images/tc5.jpg",category:'Speakers'},
         {src:"./images/tc6.jpg",category:"Homw Appliances"},
         {src:'./images/tc7.jpg',category:"Mobiles"}
          ];
    
    return (
        <>
            <div className='container mt-4 mx-auto'>
                <div className='row'>
                    <div className='col-12 d-flex flex-row'>
                        
                        <div className="vertical-menu">

                        <a href="#" className="active" style={{color:"black", fontWeight:"bold"}}>
                            <FontAwesomeIcon icon={faBars} className='mx-3'/>All CATEGORY
                        </a>



                        <div className="position-relative">
                                <h6
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="cursor-pointer mx-2 mt-2"
                                >
                                    Accessories
                                    <FontAwesomeIcon icon={faCaretRight} className="ml-1 mx-5" />
                                </h6>
                                {isDropdownOpen && (
                                    <div
                                    className="position-absolute start-100 translate-middle-y"
                                    style={{ zIndex: 1000 }}
                                    >
                                    <Link to="/shop/category1" className="dropdown-item" style={{fontWeight:"bolder"}}>
                                        CATEGORY
                                    </Link>
                                    <Link to="/shop/category2" className="dropdown-item">
                                        Avionics
                                    </Link>
                                    <Link to="/shop/category3" className="dropdown-item">
                                        Cryotonics
                                    </Link>
                                    <Link to="/shop/category3" className="dropdown-item">
                                        Electronics
                                    </Link>
                                    <Link to="/shop/category3" className="dropdown-item">
                                        Radio
                                    </Link>
                                    <Link to="/shop/category3" className="dropdown-item">
                                        Lamp
                                    </Link>
                                
                                    </div>
                                    
                                )}
                                </div>
                          
                            <Link to="/shop"><h6>Hydraulic</h6></Link>
                            <Link to="/shop"><h6>Lamp</h6></Link>
                            <Link to="/shop"><h6>Cryotonics</h6></Link>
                            <Link to="/shop"><h6>Induction</h6></Link>
                            <Link to="/shop"><h6>Avionics</h6></Link>
                            <Link to="/shop"><h6>Circuits</h6></Link>
                            <Link to="/shop"><h6>Electronics</h6></Link>
                            <Link to="/shop"><h6>Handwatch</h6></Link>

                        </div>

                        <div className="carousel-container container-fluid"> 
                            <div id="carouselExampleIndicators" className="carousel slide w-100">
                                <div className="carousel-inner">
                                    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                                        <img src="./images/slide1.jpg" className="d-block w-100 mx-auto" height="400px" alt="electronics" />
                                    </div>
                                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                                        <img src="./images/slide2.jpg" className="d-block w-100 mx-auto" height="400px" alt="electronics" />
                                    </div>
                                    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                                        <img src="./images/slide3.jpg" className="d-block w-100 mx-auto" height="400px" alt="electronics" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="custom-carousel-indicators">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className={`custom-indicator ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => handleIndicatorClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='col-12 mt-5 d-flex flex-row justify-content-between'>
                        <div>
                            <img src="./images/image2ndrow1.jpg.png" width="650px" alt="image1"></img>
                        </div>
                        <div>
                            <img src="./images/image2ndrow2.jpg.png" width="600px" height="220px" alt="image2"></img>
                        </div>
                    </div>

                    <div className='col-12  d-flex flex-row justify-content-between align-items-center mt-5' style={{border:"1px solid lightgrey",borderRadius:"5px"}}>

                        <div className='d-flex flex-row'>
                            <div><img src="./images/pix1.png"/></div>
                            <div className='d-flex flex-col-12umn align-items-center justify-content-center'> 
                                <h6>24/7 Support</h6>
                                <p>Online Support 24/7</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row'>
                            <div><img src="./images/pix2.png"/></div>
                            <div className='d-flex flex-col-12umn align-items-center justify-content-center'> 
                                <h6>Money Back Guarantee</h6>
                                <p>100% Secure Payment</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row'>
                            <div><img src="./images/pix3.png"/></div>
                            <div className='d-flex flex-col-12umn align-items-center justify-content-center'> 
                                <h6>Special Gift Cards</h6>
                                <p>Give The Perfect Gift</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row '>
                            <div><img src="./images/pix4.png"/></div>
                            <div className='d-flex flex-col-12umn align-items-center justify-content-center'> 
                                <h6>Free Shipping</h6>
                                <p>On Order Over $99</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-12  mt-5' >
                         <h5>TOP CATEGORY <hr/></h5>
                    </div>

                    <div className='col-12  mt-5'>
                        <ImageSlider images={images} />
                    </div>


                    <div className='col-12  mt-5' >
                         <h5>LATEST PRODUCTS<hr/></h5>
                    </div>

                    <div className='col-12  mt-5'>
                      <CardSlider/>
                    </div>

                    <div className='col-12  mt-5' >
                         <h5>FEATURED PRODUCTS<hr/></h5>
                    </div>

                    <div className='col-12  mt-5'>
                      <ProductSlider/>
                    </div>

                    <div className='col-12  mt-5' >
                         <h5>CATEGORY PRODUCTS<hr/></h5>
                    </div>

                    <div className='col-12  mt-5'>
                      <CardSlider/>
                    </div>

                    <div className='col-12  mt-5 ' >
                         <h4>LATEST NEWS<hr/></h4>
                    </div>

                    <div className='col-12'>
                     <Latestnews />
                    </div>


                    

                    
                </div>
            </div>
        </>
    );
}

export default Home;
