import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./wiseStyle.css";

function TopicWise() {
  const [uniqueTopics, setUniqueTopics] = useState([]);

  // const url = "http://localhost:3000/list/topic";
  const url = "https://dashboard-react-server.onrender.com/list/topic";

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

  return (
    <div className="wise-list">
      <div className="title-area">
        <h2 className="wise-title">Topic Wise</h2>
        <Link to={`/`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>

      <ul className="list-container">
        {uniqueTopics
          .filter((topic) => topic !== "")
          .map((topic) => (
            <li className="list-items" key={topic}>
              {topic}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopicWise;
