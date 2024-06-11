import React from "react";
import "./hero.css";
import Searchbar from "./srchbar";
import Titleblock from "./Titleblock";
import Dashboard from "./Dashboard";

export default function Hero() {
  return (
    <div className="hero">
      <Searchbar />
      <div className="">
        <Titleblock name="Dashboard" page="Chart" />
        <Dashboard />
      </div>
    </div>
  );
}
