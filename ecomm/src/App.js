import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstbar from "./components/navbar/firstbar";
import Secondbar from "./components/navbar/secondbar";
import Thirdbar from "./components/navbar/thirdbar";
import Navbar from "./components/navbar/mainnavbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import Login from "./login register/login";
import Contact from "./components/contactus/contactus";
import Feature from "./components/features/features";
import Register from "./login register/register";
import ProductDetails from "./components/shop/product";
import Rightsideblog from "./components/blog/rightsidebar";
import Leftsideblog from "./components/blog/leftsidebar";
import Nosideblog from "./components/blog/nosidebar";
import Service from "./components/pages/service";
import Faq from "./components/pages/faqspage";
import Gallery from "./components/pages/gallery";
import Element from "./components/pages/element";
import Page404 from "./components/pages/page404";
import Aboutus from "./components/pages/aboutus";
import ResetPassword from "./login register/reset";
import { UserProvider } from "./login register/usercontext";
import Mycart from "./components/cartorder/cart";
import Checkout from "./components/cartorder/checkout";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
      <UserProvider>
        <Firstbar />
        <Secondbar />
        <Thirdbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdisplay/:productId" element={<ProductDetails />} />
          <Route path="/leftsidebar" element={<Leftsideblog/>} />
          <Route path="/rightsidebar" element={<Rightsideblog />} />
          <Route path="/nosidebar" element={<Nosideblog />} />
          <Route path="/service" element={<Service />}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/element" element={<Element />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/reset-password/:token" element={<ResetPassword/>} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
