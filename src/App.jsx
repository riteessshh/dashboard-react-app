import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import SectorDetails from "./components/hero/SectorDetails";
import CountryWise from "./components/hero/CountryWise";
import CountryDetails from "./components/hero/CountryDetails";
import TopicWise from "./components/hero/TopicWise";
import PestleWise from "./components/hero/PestleWise";
import SourceWise from "./components/hero/SourceWise";
import RegionWise from "./components/hero/RegionWise";

function App() {
  return (
    <div className="main">
      <div className="block">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/sectors/:sector" element={<SectorDetails />} />
            <Route path="/countries" element={<CountryWise />} />
            <Route path="/topics" element={<TopicWise />} />
            <Route path="/pestles" element={<PestleWise />} />
            <Route path="/sources" element={<SourceWise />} />
            <Route path="/regions" element={<RegionWise />} />
            <Route path="/countries/:country" element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
