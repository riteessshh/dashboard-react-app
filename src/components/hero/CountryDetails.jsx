import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./countryDetails.css";

function CountryDetails() {
  const [cards, setCards] = useState([]);
  const { country } = useParams();

  const url = "http://localhost:3000/countryData";

  async function fetchData(cnt) {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      const list = fetchedData[cnt];
      setCards(list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(country);
  }, [country]);

  return (
    <div className="country-detail-main">
      <div className="title-area">
        <h2 className="detail-title">
          <Link to={`/countries`}>{country}</Link>
        </h2>
        <Link to={`/countries`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>
      <h4 className="subtitle">Topics and Titles:</h4>
      <ul>
        {cards.map((item, index) => (
          <li className="country-wise" key={index}>
            <strong>Title:</strong> {item.title} <br />
            <strong>Topic:</strong> {item.topic} <br />
            <strong>Region:</strong> {item.region}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;
