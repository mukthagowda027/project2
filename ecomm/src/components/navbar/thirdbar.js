import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUser } from '../../login register/usercontext';
import axios from "axios";

const Thirdbar = () => {

    const { userId } = useUser();

  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/cart/carttotal/${userId}`);
        const updatedCartItems = response.data.cartitems;

        setCartItems(updatedCartItems);

        const totalQuantity = updatedCartItems.reduce((total, item) => {
          return total + item.quantity;
        }, 0);

        setCartItemCount(totalQuantity);
        setCartTotal(response.data.total);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, [userId]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div style={{ height: "70px" }} className="d-flex justify-content-between align-items-center">
            <div>
              <h3><FontAwesomeIcon icon={faShoppingBag} style={{ color: "FFD700" }} className="mx-2" />SHOPEUR</h3>
            </div>

            <div className="mx-5">
              <div className="input-group mb-2">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                </ul>
                <input type="text" className="form-control px-5" aria-label="Text input with dropdown button" placeholder="Search Products.." />
                <button className="btn btn-warning">Search</button>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex justify-content-center align-items-center mx-2" style={{ height: "40px", width: "40px", backgroundColor: "whitesmoke" }}> <FontAwesomeIcon icon={faUser} /></div>
              <div style={{ lineHeight: "0.5px" }}><h6>My Account</h6><Link to="/login" className={{ color: "black", textDecoration: "none" }}>Sign in</Link></div>
            </div>

            <div className="d-flex flex-row mx-4">
            <div className="d-flex justify-content-center align-items-center mx-2 position-relative" style={{ height: "40px", width: "40px", backgroundColor: "whitesmoke" }}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                {cartItemCount > 0 && <span className="badge bg-warning position-absolute top-0 start-100 translate-middle">
                  {cartItemCount}
                </span>}
              </div>
              <div style={{ lineHeight: "1px" }}>
                <h6>
                <Link to="/mycart" className="text-decoration-none text-black">My Cart</Link>
                </h6>
                <p style={{color:"grey",fontSize:"smaller"}}>Rs.{cartTotal}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdbar;
