import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Login from "./routes/Login";
import Category from "./routes/Category";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
