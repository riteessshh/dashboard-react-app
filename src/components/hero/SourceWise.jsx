import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./wiseStyle.css";

function SourceWise() {
  // const [cards, setCards] = useState([]);
  const [uniqueTopics, setUniqueTopics] = useState([]);

  // const url = "http://localhost:3000/list/source";
  const url = "https://dashboard-react-server.onrender.com/list/source";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setUniqueTopics(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (cards.length) {
  //     const topicSet = new Set(cards.map((item) => item.source));
  //     setUniqueTopics(Array.from(topicSet));
  //   }
  // }, [cards]);

  return (
    <div className="wise-list">
      <div className="title-area">
        <h2 className="wise-title">Source Wise</h2>
        <Link to={`/`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>

      <ul className="list-container">
        {uniqueTopics
          .filter((source) => source !== "")
          .map((source) => (
            <li className="list-items" key={source}>
              {source}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SourceWise;
