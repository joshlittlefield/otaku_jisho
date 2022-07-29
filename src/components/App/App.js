import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJLPTLevels from "../AllJLPTLevels/AllJLPTLevels";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AllLevels" element={<AllJLPTLevels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
