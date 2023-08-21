import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Login from "./routes/Login";
import Category from "./routes/Category";
import Contact from "./routes/Contact"
import Cart from "./laz/pages/Cart"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckOut from "./laz/pages/CheckOut";
import Payment from "./laz/pages/Payment";
import PaymentComplete from "./laz/pages/PaymentComplete";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/product" element={<Product/>}>
        </Route>
        <Route path="/categories/:categoryId" element={<Category/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        <Route path="/checkout" element={<CheckOut />}>
        </Route>
        <Route path="/payment" element={<Payment />}>
        </Route>
        <Route path="/payment-complete" element={<PaymentComplete />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
