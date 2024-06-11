import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./wiseStyle.css";

function CountryWise() {
  // const [cards, setCards] = useState([]);
  const [uniqueCountries, setUniqueCountries] = useState([]);

  // const url = "http://localhost:3000/list/country";
  const url = "https://dashboard-react-server.onrender.com/list/country";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setUniqueCountries(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (cards.length) {
  //     const countrySet = new Set(cards.map((item) => item.country));
  //     setUniqueCountries(Array.from(countrySet));
  //   }
  // }, [cards]);

  return (
    <div className="wise-list">
      <div className="title-area">
        <h2 className="wise-title">Country Wise</h2>
        <Link to={`/`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>

      <ul className="list-container">
        {uniqueCountries
          .filter((country) => country !== "")
          .map((country, index) => (
            <li className="list-items" key={index}>
              <Link to={`/Countries/${country}`}>{country}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CountryWise;
