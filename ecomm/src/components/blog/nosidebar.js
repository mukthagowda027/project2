import React from "react";
import data from './blog.json';


const Nosideblog = () => {
    console.log("rendering")

    return (
        <>
            <div className="container mt-4">
                <div className="row">


                    <div className="col">

                        <h5 className="mb-4">NO SIDEBAR</h5>

                    {data.map((el, index) => (
                         <div className="mb-4 d-flex flex-row" key={index}>
                               
                               <div >
                                     <img src={el.image} alt="" className="img-fluid" style={{height:"340px",width:"650px",borderRadius:"5px"}}/>
                               </div>

                               <div className="mx-4"> 
                                      <h4>{el.title}</h4>
                                      <p>{el.date}<span className="mx-3">{el.writtenby}</span></p>
                                      <hr/>
                                      <p>{el.description}</p>
                                      <button className="btn btn-primary">Read more</button>
                                </div>

                         </div>
                    ))}

                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Nosideblog;
