import React from "react";
import data from './blog.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Rightsideblog = () => {

    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-9 ">

                        <h5 className="mb-5">RIGHT SIDEBAR</h5>

                    {data.map((el, index) => (
                         <div className="mb-4 d-flex flex-row">
                               
                               <div >
                                     <img src={el.image} alt="" className="img-fluid" style={{height:"260px",width:"650px",borderRadius:"5px"}}/>
                               </div>

                               <div className="mx-4"> 
                                      <h6>{el.title}</h6>
                                      <p>{el.date}<span className="mx-3">{el.writtenby}</span></p>
                                      <hr/>
                                      <p>{el.description}</p>
                                      <button className="btn btn-primary">Read more</button>
                                </div>

                         </div>
                    ))}

                    </div>

                    <div className="col-3 d-flex flex-column">
                        <div className="input-group mb-3 d-flex flex-row">
                    
                            <input type="text" className="form-control" placeholder="Search.." aria-label="Username" />
                            <span className="input-group-text bg-dark"><FontAwesomeIcon icon={faSearch} style={{ color: "white" }} /></span>
            
                        </div>
                        <p className="mx-2">Recent posts</p><hr/>

                        <div className="mx-1">

                        {data.map((el, index) => (
                            <div className="mb-2 d-flex flex-row" key={index}>   
                                <div>
                                        <img src={el.image} alt="" className="img-fluid" style={{height:"50px",width:"100px",borderRadius:"5px"}}/>
                                </div>
                                <div className="mx-1"> 
                                        <p>{el.title}<span className="mx-2" style={{fontWeight:"lighter"}}>{el.date}</span></p>
                                    </div>
                            </div>
                        ))}

                    </div>

                    <p className="mt-3">Recent comments</p><hr/>

                    <p className="mt-3">Archives</p><hr/>

                    <table>
                        <tr>
                            <td>May</td><td>(1)</td>
                        </tr>
                        <tr>
                            <td>June</td><td>(1)</td>
                        </tr>
                        <tr>
                            <td>July</td><td>(1)</td>
                        </tr>

                    </table>

                    </div>

                </div>
            </div>
        
        </>
    );
}

export default Rightsideblog;
