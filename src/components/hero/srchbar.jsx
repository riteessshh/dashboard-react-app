import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./srchbar.css";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  function toTitleCase(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/countries/${toTitleCase(searchTerm)}`);
  };
  return (
    <div className="topBar">
      <div className="searchBar">
        <form onSubmit={handleSearchSubmit}>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for country"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="profile">
        <i className="bi bi-app-indicator"></i>
        <i className="bi bi-back"></i>
        <i className="bi bi-bag-dash"></i>
        <i className="bi bi-bell"></i>
        <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
        <p className="profile-name">Matt Jr.</p>
      </div>
    </div>
  );
}

export default Searchbar;
