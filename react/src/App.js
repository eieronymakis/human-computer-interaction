import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from "./Login";
import Procuct from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/product" element={<Procuct/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
