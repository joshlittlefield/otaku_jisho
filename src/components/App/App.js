import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJLPTLevels from "../AllJLPTLevels/AllJLPTLevels";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import N1 from "../JLPTLevel/N1";
import N2 from "../JLPTLevel/N2";
import N3 from "../JLPTLevel/N3";
import N4 from "../JLPTLevel/N4";
import N5 from "../JLPTLevel/N5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AllLevels" element={<AllJLPTLevels />} />
        <Route path="N1" element={<N1 />} />
        <Route path="N2" element={<N2 />} />
        <Route path="N3" element={<N3 />} />
        <Route path="N4" element={<N4 />} />
        <Route path="N5" element={<N5 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
