import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJLPTLevels from "../components/AllJLPTLevels/AllJLPTLevels";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import JLPTLevel from "../components/JLPTLevel/JLPTLevel";
import N1 from "../components/JLPTLevel/N1";
import N2 from "../components/JLPTLevel/N2";
import N3 from "../components/JLPTLevel/N3";
import N4 from "../components/JLPTLevel/N4";
import N5 from "../components/JLPTLevel/N5";
import SingleKanji from "../components/Card/SingleKanji";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllLevels" element={<AllJLPTLevels />} />
        <Route path="/JLPTLevel" gradeURL="levelURL" element={<JLPTLevel />} />
        <Route path="/N1" element={<N1 />} />
        <Route path="/SingleKanji" element={<SingleKanji />} />

        <Route path="/N2" element={<N2 />} />
        <Route path="/N3" element={<N3 />} />
        <Route path="/N4" element={<N4 />} />
        <Route path="/N5" element={<N5 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
