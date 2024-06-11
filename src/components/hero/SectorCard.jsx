import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sectorcard.css";

function TopicCard() {
  const [sectors, setSectors] = useState([]);

  const url = "http://localhost:3000/list/sector";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setSectors(fetchedData);
      console.log(sectors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sectorList">
      <h2>Sectors</h2>
      <ul className="list-container">
        {sectors
          .filter((sector) => sector !== "")
          .map((sector, index) => (
            <li className="list-item" key={index}>
              <Link to={`/sectors/${sector}`}>{sector}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopicCard;
