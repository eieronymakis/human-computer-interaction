import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile"; 
import OrderHistory from "./routes/OrderHistory"; 
import Category from "./routes/Category";
import Contact from "./routes/Contact"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>  
        <Route path="/profile" element={<Profile />}>
        </Route> 
        <Route path="/order-history" element={<OrderHistory />}>
        </Route> 
        <Route path="/product" element={<Product/>}>
        </Route>
        <Route path="/categories/:categoryId" element={<Category/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
