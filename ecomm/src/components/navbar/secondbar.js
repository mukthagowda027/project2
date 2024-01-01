import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Secondbar=()=>{

    return(
        <>
        <div className="container-fixed">
            <div className="row">


                    <div className="d-flex flex-row justify-content-between align-items-center" style={{height:"40px",backgroundColor:"#F0F0F0"}}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="mx-5"><h6>Extra 30% Off On Selected Itmes</h6></div>
                            <div className=""><h6><FontAwesomeIcon icon={faEnvelope} size="1x" />company@example.com</h6></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div><h6>Wishlist</h6></div>
                            <div className="mx-5">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">GBP</button></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        </div>
        </>
    )
}

export default Secondbar;