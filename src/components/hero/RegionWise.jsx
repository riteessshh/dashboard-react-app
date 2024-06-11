import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./wiseStyle.css";

function RegionWise() {
  const [cards, setCards] = useState([]);
  const [uniqueTopics, setUniqueTopics] = useState([]);

  const url = "http://localhost:3000/data";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setCards(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (cards.length) {
      const topicSet = new Set(cards.map((item) => item.region));
      setUniqueTopics(Array.from(topicSet));
    }
  }, [cards]);

  return (
    <div className="wise-list">
      <div className="title-area">
        <Link to={`/`}>
          <h2 className="wise-title">Region Wise</h2>
        </Link>
        <Link to={`/`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>

      <ul className="list-container">
        {uniqueTopics
          .filter((region) => region !== "")
          .map((region) => (
            <li className="list-items" key={region}>
              {region}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RegionWise;
